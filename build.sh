#!/usr/bin/env bash

npm run build

docker build -t 'registry.cn-hangzhou.aliyuncs.com/cvi/pay-center-vue' .
docker push 'registry.cn-hangzhou.aliyuncs.com/cvi/pay-center-vue'
