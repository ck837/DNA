/*
 * @Author: 陈凯（实习） 1264504656@qq.com
 * @Date: 2023-10-18 09:52:45
 * @LastEditors: 陈凯（实习） 1264504656@qq.com
 * @LastEditTime: 2023-10-18 10:10:54
 * @FilePath: \项目\front\src\setupProxy.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(['/project'], {
      target: 'http://127.0.0.1:8080/',
      changeOrigin: true,
      headers: {
          "Connection": "keep-alive"
      },
  }));
};