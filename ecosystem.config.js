module.exports = {
    apps: [{
        name: "admin",
        script: "./dist/app.js",
        kill_timeout: 10000,
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
};
