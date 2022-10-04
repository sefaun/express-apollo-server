module.exports = {
  apps: [
    {
      name: "GRAPHQL API",
      script: "./build/index.js",
      exec_mode: "fork",
      instances: 1,
      merge_logs: false,
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      watch: false,
      exp_backoff_restart_delay: 3,
      env: {
        GRAPHQL_API_PORT: 5000
      }
    },
  ]
}