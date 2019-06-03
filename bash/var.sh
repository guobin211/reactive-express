#!/usr/bin/env bash

# 可修改常量
USERNAME="guobin"
pass_word="123456"

echo "hello ${USERNAME}"
echo ${USERNAME}
echo ${pass_word}

pass_word="111111"
echo ${pass_word}

# 只读常量
readonly PROJECT="node.js"
echo ${PROJECT}

# 删除变量
unset pass_word;
echo ${pass_word}

# 变量迭代赋值
for skill in Java Node Python ; do
    echo "I am good at ${skill}"
done

# array length
file_names=('index.js' 'server.js' 'index.html')
echo ${file_names[1]}
length_file_names=${#file_names[*]}
echo ${length_file_names}

weight_a=10
weight_b=20
# 运算符
# -eq 等于
# -ne 不等于
# -gt 大于
# -lt 小于
# -ge 大于等于
# -le 小于等于
if [${weight_a} -eq ${weight_b}]
then
    echo "weight_a == weight_b"
else
    echo "weight_a !== weight_b"
fi

sum=${weight_a}+${weight_b}
echo ${sum}


