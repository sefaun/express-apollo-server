import cors from 'cors'
import morgan from 'morgan'
import i18next from 'i18next'
import i18next_fs_backend from 'i18next-fs-backend'
import i18next_http_middleware from 'i18next-http-middleware'
import express, { Application, NextFunction, Request, Response } from 'express'

import { GraphQLApiV1 } from './graphql'


export class GraphQLServer {

  private app: Application = express()

  public async initServer() {
    this.initServerConfigs()
    this.initLanguageConfigs()
    this.initAPIRoutes()
    this.initServerOnPort()
  }

  private initServerConfigs() {
    this.app.use(morgan('dev'))
    this.app.use(cors())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
  }

  private initLanguageConfigs() {
    i18next.use(i18next_http_middleware.LanguageDetector).use(i18next_fs_backend).init({
      fallbackLng: "en",
      backend: {
        loadPath: "./locales/{{lng}}.json"
      },
    })
    this.app.use(i18next_http_middleware.handle(i18next))
  }

  private async initAPIRoutes() {
    await GraphQLApiV1(this.app)

    this.app.use(async (err: Error, req: Request, res: Response, next: NextFunction) => {
      // try {
      //   if (err) {
      //     return res.status(400).json(ErrorResponse({ message: 'Server Error' }))
      //   }
      //   return res.status(404).json(ErrorResponse({ message: 'Not Found' }))
      // } catch (_error) {
      //   return res.status(500).json(ErrorResponse({ message: 'Server Error' }))
      // }
    })
  }

  private initServerOnPort() {
    this.app.listen(5000, () => console.log("🚀 GraphQL is Running on Port " + 5000))
  }

}