### 模块

> 在Node环境中，一个.js文件就称之为一个模块（module）
>
> 可以避免命名冲突

要在模块中**对外输出**变量，

* 方法一：对module.exports赋值

```js
module.exports = {
    hello: hello,
    greet: greet
};
```

* 方法二：直接使用exports

```js
exports.hello = hello;
exports.greet = greet;
```

要**引入**其他模块输出的对象，用：

```js
var foo = require('other_module');
```

* 注意文档的相对路径，当前目录：./

global 全局对象

process对象 代表Node.js当前工作进程

### fs文件系统

##### Buffer缓冲区

专门用来存储二进制数据（将数据转换成二进制保存）

Buffer中每一个元素的范围是从00-ff（0-255）

```js
var str= "hello";
//将一个字符保存到buffer中
var buf = Buffer.from(str);
//创建一个指定大小的Buffer
var buf2 = Buffer.alloc(10);//10个字节
//通过索引，操作Buffer中的元素
buf2[0] = 88;
buf2[1] =0xaa;
buf2[2] = 555//超过255会截取二进制的后8位
```

Buffer的大小一旦确定，不能修改



使用文件系统，需要先引入fs模块

```js
var fs = require("fs");
```

fs模块中所有的操作都有**同步**和**异步**两种形式

#### 同步文件写入（用的不多）

1. 打开文件

```js
fs.openSync(path,flags[,mode])
//-path 路径
//-flags 要做的操作类型 r只读 w可写
```

2. 向文件中写入内容

```js
fs.writeSync(fd,string[,position[,encoding]])
//-fd 需要写入的文件的描述符
//-string 要写入的内容
//-position 写入的起始位置
```

3. 关闭文件

```js
fs.closeSync(fd)
//-fd 描述符
```

#### 异步文件写入（用的不多）

**返回值由 回调函数的参数返回**

1. 打开文件

```js
fs.open(path,flags[,mode],callback)
```

回调函数的两个参数：

err：错误对象，如果没有错误则为null

fd：文件的描述符

2. 写入

```js
fs.write(fd,string[,position[,encoding]],callback)
```

3. 关闭文件

```js
fs.closeSync(fd.callback)
```

参数：err

实例：

```js
fs.open("hello.txt","w",function(err,fd){
    if(!err){
        fs.write(fd,"写入内容",function(err){
            if(!err){
                fs.close(fd,function(err){});
            }
        });
    }
});
```

#### 简单文件写入（常用）

```js
fs.writeFile(file,data[,options],callback)
fs.writeFileSync(file,data[,options])
//-file 要操作的文件的路径
//-data 要写入的数据
//-option 选项，可以对写入进行一些设置
//-callback 回调函数
```

option：encoding|mode|flag

```js
fs.writeFileSync("hello.txt","写入的内容"，{flag:"w"})
```

#### 流式文件写入

```js
var ws= fs.createWriteStream(path[,options]);
ws.write("写入内容");
ws.end();
```

#### 简单文件读取

```js
fs.readFile(path[,options],callback)
fs.readFileSync(path[,options])
```

callback两个参数

-err：错误对象

-data：读取到的数据，会返回一个Buffer

#### 其他操作

fs.existsSync(path)	验证文件是否存在

**fs.stat(path.callback)	获取文件信息**

> callback两个参数：err stats
>
> stats.isDirectory()	是否是一个文件夹
>
> stats.isFile()	是否是一个文件

fs.unlink(path,callback)	删除文件

**fs.readdir(path[,options],callback(err,files))	列出文件**

fs.truncate(path,len,callback)	截断文件

fs.mkdir(path[,mode],callback)	创建目录

fs.rmdir(path,callback)	删除目录

fs.rename(oldPath,newPath,callback)	重命名

*******

### HTTP模块

#### IP地址和端口号

* IP地址用来定位计算机
* 端口号用来定位具体的应用程序

所有需要联网通信的应用程序都会占用一个端口号

有一些默认端口号，最好不要用，例如80

#### HTTP请求

请求的流程：

1. 浏览器首先向服务器**发送HTTP请求**，请求包括：

   * 方法：`GET`还是`POST`，`GET`仅请求资源，`POST`会附带用户数据；

   * 路径：`/full/url/path`；

   * 域名：由Host头指定：`Host: www.sina.com.cn`

   以及其他相关的Header；如果是POST，那么请求还包括一个Body，包含用户数据。

2. 服务器向浏览器**返回HTTP响应**，响应包括：

   * 响应代码：`200`表示成功，`3xx`表示重定向，`4xx`表示客户端发送的请求有错误，`5xx`表示服务器端处理时发生了错误；

   * 响应类型：由`Content-Type`指定，例如：`Content-Type: text/html;charset=utf-8`表示响应类型是HTML文本，并且编码是`UTF-8`，`Content-Type: image/jpeg`表示响应类型是JPEG格式的图片；

   以及其他相关的Header；通常服务器的HTTP响应会携带内容，也就是有一个Body，包含响应的内容，网页的HTML源码就在Body中。

3. 如果浏览器还需要继续向服务器请求其他资源，比如图片，就再次发出HTTP请求，重复步骤1、2。

#### HTTP服务器

* `request`对象封装了HTTP请求，我们调用`request`对象的属性和方法就可以拿到所有HTTP请求的信息；
* `response`对象封装了HTTP响应，我们操作`response`对象的方法，就可以把HTTP响应返回给浏览器。

示例：

```js
'use strict';

// 导入http模块:
var http = require('http');

// 创建http server，并传入回调函数:
var server = http.createServer(function (request, response) {
    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    console.log(request.method + ': ' + request.url);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    // 将HTTP响应的HTML内容写入response:
    response.end('<h1>Hello world!</h1>');
});

// 让服务器监听8080端口:
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');
```

响应内容类型Content-Type

说明发送的数据内容是什么类型

```js
res.setHeader('Content-Type','text/html;charset=ytf-8')
```

#### 文件服务器

需要解析`request.url`中的路径，然后在本地找到对应的文件，把文件内容发送出去就可以了。







