'use strict'
var colos = require('colors');
var
  fs = require('fs'),
  url = require('url'),
  path = require('path'),
  http = require('http');
const { rootCertificates } = require('tls');

var root = path.resolve(process.argv[2] || '.'); //从命令行中获取当前的路径

console.log('Static root dir: ' + root);

var server = http.createServer(function (request, response) {
  var
    pathname = url.parse(request.url).pathname, // 从浏览器接受的路径
    filepath = path.join(root, pathname); // 合成完整的路径

  fs.stat(filepath, function (err, stats) { // 判断文件类型
    if (!err && stats.isDirectory()) { // 是文件夹
      fs.readdir(filepath, function (err, files) {
        // readdir读取文件夹，files中存放的是文件的名字
        if (!err) {
          let docs = []; // 创建数组存放子文件
          let urls = [];
          // console.log(files.toString());
          for (let i = 0; i < files.length; i++) {
            urls.push(path.join(pathname, files[i])); // 将文件名转换成url
            docs.push(`<li><a href="${urls[i]}">${files[i]}</a></li>`); // 写成一个<li><a></a></li>并放到数组里
          }
          // 返回一个html页面
          response.end(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
          <meta charset="UTF-8" />
          <metaname="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Http-Server</title>
          </head>
          <body>
          <ul>
            ${docs.join("\n")}
          </ul>
        </body>
        <style>
          ul {
            list-style: none;
          }
        </style>
      </html>`)
        }
      });
    }
    else if (!err && stats.isFile()) { // 是文件
      // 根据不同的文件类型，采用不同的content-type
      if (path.extname(filepath) === '.html') {
        response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        fs.createReadStream(filepath).pipe(response);
      } else if (path.extname(filepath) === '.mp4') {
        response.writeHead(200, { 'Content-Type': 'audio/mp4' });
        fs.createReadStream(filepath).pipe(response);
      } else {
        response.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
        fs.createReadStream(filepath).pipe(response);
      }
    } else {
      response.writeHead(404);
      response.end('404 Not Found');
    }
  });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/'.rainbow);