#!/usr/bin/env bash

file="./config.js"

if [[ -r ${file} ]];
then
    echo "文件可以读"
else
    echo "文件不可以读"
fi

if [[ -w ${file} ]];
then
    echo "文件可以写入"
else
    echo "文件不可以写入"
fi

if [[ -d ${file} ]];
then
    echo "文件是个目录"
else
    echo "文件不是目录"
fi

command node ${file}
