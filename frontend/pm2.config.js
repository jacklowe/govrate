module.exports = {
  apps: [
    {
      name: "gr-frontend",
      script: "serve -s build",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G"
    }
  ]
};
