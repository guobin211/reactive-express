import { Request, Response, Router } from 'express';
import { Users } from '../models/User';

/**
 *  user-router.ts
 *  @author GuoBin201314@gmail.com
 *  @date 2018-12-17 20:59
 *  @version 1.0.0
 */
export class UserRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.buildRoutes();
    }

    /**
     * all Users
     * @param req
     * @param res
     */
    public getAllUsers(req: Request, res: Response): void {
        Users.find().then(data => {
            return res.status(200).json({code: 200, body: data});
        }).catch(error => {
            res.status(500).json({error});
            return error;
        });
    }

    /**
     * findOne
     * @param req body{username}
     * @param res
     */
    public one(req: Request, res: Response): void {
        const {username} = req.params;

        Users.findOne({username})
            .then((data) => {
                res.status(200).json({data});
            })
            .catch((error) => {
                res.status(500).json({error});
            });
    }

    /**
     * create 创建用户
     * @param req body{
     *     firstName
     *     lastName
     *     username
     *     email
     *     password
     * }
     * @param res
     */
    public create(req: Request, res: Response): void {
        const {firstName, lastName, username, email, password} = req.body;
        Users.findOne({username: username}).then(data => {
            if (data) {
                res.status(503).json({msg: '用户已经存在'});
            } else {
                Users.countDocuments('', (err, count) => {
                    const user = new Users({
                        firstName,
                        lastName,
                        username,
                        email,
                        password: password + count
                    });
                    user
                        .save()
                        .then((data) => {
                            res.status(200).json({data});
                        })
                        .catch((error) => {
                            res.status(500).json({error});
                        });
                })
            }
        })

    }

    /**
     * update 更新用户信息
     * @param req body{user}
     * @param res
     */
    public update(req: Request, res: Response): void {
        const {username} = req.params;

        Users.findOneAndUpdate({username}, req.body)
            .then((data) => {
                res.status(200).json({data});
            })
            .catch((error) => {
                res.status(500).json({error});
            });
    }

    /**
     * delete 删除用户
     * @param req body{user}
     * @param res
     */
    public delete(req: Request, res: Response): void {
        const id = req.params.username;
        console.log(id);
        Users.findOneAndDelete({_id: id})
            .then(() => {
                res.status(204).end();
            })
            .catch((error) => {
                res.status(500).json({error});
            });
    }

    /**
     * 构建路由
     */
    public buildRoutes(): void {
        this.router.get('/', this.getAllUsers);
        this.router.get('/:username', this.one);
        this.router.post('/', this.create);
        this.router.put('/:username', this.update);
        this.router.delete('/:username', this.delete);
    }
}
