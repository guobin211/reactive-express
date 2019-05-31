import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import { NextFunction } from 'express';
import * as helmet from 'helmet';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';
import * as path from 'path';
import { createConnection } from 'typeorm';
/**
 *  import router class
 */
import { UserRouter } from './routes/user-router';

/**
 * build routers
 */
const userRoutes = new UserRouter();
/**
 * type orm controller
 */
import { getAllPhotos, photoGetById, postSavePhoto } from './controller/photo-controller';

/**
 * express server
 */
class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initConfig();
    this.mountRouting();
  }

  /**
   * express app mid config
   */
  private initConfig(): void {
    const MONGO_URL = 'mongodb://localhost/node_mongo';
    mongoose.connect(MONGO_URL || process.env.MONGODB_URL, {useNewUrlParser: true})
        .then(mongo => {
          logger('mongodb 连接成功');
        }).catch(err => logger('mongodb 连接失败' + err));
    createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin888',
      database: 'node_mysql8',
      entities: [
        __dirname + '/entity/*.js'
      ],
      synchronize: true
    }).then(async connection => {
      // init
      logger('mysql 链接成功');
    }).catch(err => {
      logger('mysql 链接失败' + err);
    });
    this.app.use(bodyParser.urlencoded({extended: true}));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(logger('dev'));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.static(path.join(__dirname, 'public'),
        {
          maxAge: 31557600000
        }));
    /**
     * set header
     */
    this.app.use((req: express.Request, res: express.Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
          'Access-Control-Allow-Methods',
          'GET, POST, PUT, DELETE, OPTIONS'
      );
      res.header(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Token, Accept, Authorization,' +
          ' Access-Control-Allow-Credentials'
      );
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });
  }

  /**
   * mount routing
   */
  private mountRouting(): void {
    const router: express.Router = express.Router();
    // mongodb
    this.app.use('/', router);
    this.app.use('/user', userRoutes.router);
    // type orm
    this.app.get('/photo', getAllPhotos);
    this.app.post('/photo', postSavePhoto);
    this.app.get('/photo/:id', photoGetById);
    // 404
    this.app.get('*', function (req, res) {
      res.redirect('http://localhost:3000/404.html');
    });
  }
}

export default new Server().app;
