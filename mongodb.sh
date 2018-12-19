#!/usr/bin/env bash
## start

sudo mkdir -p data/db
sudo mongod

## 创建admin
#> use admin
#> db.createUser(
#     {
#       user:"admin",
#       pwd:"admin888",
#       roles:[{role:"root",db:"admin"}]
#     }
#  )

## 创建数据库账号
#> use node
#> db.createUser({user:"node",pws:"admin888",roles:[{role:'dbOwner',db:"node"}]})

## 启动授权模式
#> sudo mongod --auth

## 自定义数据库配置
#> sudo mongod --auth  -f /usr/local/etc/mongod.conf

## 关闭数据库
#use admin, db.shutdownServer()

## 使用 brew 管理数据库
brew services start mongodb

brew services stop mongodb

brew services restart mongodb

