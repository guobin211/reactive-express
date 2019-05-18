const http = require('http');

let context = {
  get url() {
    return this.request.url
  },
  get body() {
    return this.response.body
  },
  set body(val) {
    this.response.body = val
  }
};
let request = {
  get url() {
    return this.request.url
  }
};
let response = {
  get body() {
    return this._body
  },
  set body(val) {
    this._body = val
  }
};

class Application {
  constructor() {
    // this.callback = () => {
    //   console.log('constructor...')
    // };
    this.context = context;
    this.request = request;
    this.response = response;
  }

  use(callback) {
    this.callback = callback;
  }

  listen(...args) {
    const server = http.createServer(async (req, res) => {
      let ctx = this.createContext(req,res);
      console.log('recived', ctx.request.req);
      await this.callback(ctx);
      ctx.res.end(ctx.body);
      // this.callback(req, res);
    });
    server.listen(...args);
  }

  /**
   * 拦截实现ctx上下文
   * @param req
   * @param res
   */
  createContext(req, res) {
    let ctx = Object.create(this.context);
    // console.log('create', ctx);
    ctx.request = Object.create(this.request);
    ctx.response = Object.create(this.response);
    ctx.req = ctx.request.req = req;
    ctx.res = ctx.response.res = res;
    return ctx;
  }
}

module.exports = Application;

