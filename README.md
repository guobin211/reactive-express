<div align="center">
    <h1 align="center">Reactive-Express</h1>
    <span>express</span>
    <span>typescript</span>
    <span>mongodb</span>
    <span>mysql</span>
    <span>typeorm</span>
    <span>mongoose</span>
    <span>swagger</span>
    <p>使用typescript编写nodejs后端服务。</p>
</div>

[![Node](https://img.shields.io/node/v/:math-ts.svg)](https://github.com/guobin211/reactive-express)


[![Reactive-Express](https://github.com/guobin211/reactive-express/blob/master/images/github.jpg)](https://github.com/guobin211/reactive-express)


### 部署简单

**将dist目录上传到服务器，用pm2启动项目**

**使用前确保mongodb数据库在运行状态**
**使用前确保mysql数据库在运行状态**

```sh

npm run build           //  build server

npm run start:watch     //  nodemon start

pm2 start               //  pm2 start

```

### 开发模式

**主要文件**

    server.ts
        initConfig()        用于挂载中间件
        mountRouting()      用于挂载路由
    routes
        **.router.ts        路由和业务控制器
    models
        **.ts               数据模型配置
    
    controller              type-orm 控制器
    entity                  type-orm 模型定义   

**启动命令**   

```
   // ts编译 
   npm run build:watch
   // node启动
   npm run start:watch

```

### 目录说明
    src
        controller      type-orm    controller
        entity          type-orm    models
        models          mongoose    models
        public          公共资源
            v1              api文档
            dist            swagger
            css
            js
            fonts
            images
        routes          mongoose路由
        app             node.js app <使用debug>
        server          express server
        
    ecosystem.config.js     pm2配置文件
    mongodb.sh              mongodb 测试
    nginx.conf              nginx   测试

### 运行地址
    
    // server
    http://localhost:3000/
    // api文档
    http://localhost:3000/dist/index.html

**API文档和测试。**
[![Swagger-Api](https://github.com/guobin211/reactive-express/blob/master/images/swagger.png)](https://github.com/guobin211/reactive-express)
