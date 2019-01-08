## Reactive-Express

使用typescript编写nodejs后端服务，自动生成api文档和测试，项目结构清晰，运行可靠。

[![Reactive-Express](https://github.com/guobin211/reactive-express/blob/master/images/github.jpg)](https://github.com/guobin211/reactive-express)

### note: express + ts + + mongodb + pm2 + swagger

**使用前确保mongodb数据库在运行状态**

```sh

npm run start   // dev server

npm run serve   // local test server

pm2 start       //  pm2 server

```

### 开发说明

    server.ts
        initConfig()        用于挂载中间件
        mountRouting()      用于挂载路由
    routes
        **.router.ts        路由和业务控制器
    models
        **.ts               数据模型配置

### 目录说明
    
    models          模型
    public          公共资源
        v1              api
        dist            swagger
    routes          路由
    app             app启动
    server          server入口
    
    ecosystem.config.js     pm2配置文件
    mongodb.sh              mongodb
    nginx.conf              nginx

### 运行地址
    
    // server
    http://localhost:3000/
    // api文档
    http://localhost:3000/dist/index.html

