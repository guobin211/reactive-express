#!/usr/bin/env bash

# 删除dir
rm -rf dist/
# 创建dir
mkdir dist
mkdir dist/public
# 复制静态资源目录
cp -rf src/public/. dist/
