# kcola-mvc

## 简介
`kcola-mvc` 是 [kcola](https://github.com/Khadron/kcola) 框架的最佳实践

可以快速实现业务功能，提升开发效率，降本增效

## 目录说明
```shell
-/src
--/config        --存放项目配置文件
--/controller    --存放controller文件
--/middleware    --存放项目中自定义的中间件
--/public        --静态资源目录
--/route_config  --存放路由文件目录
--/services      --存放项目中‘服务’，比如日志服务，生成token服务
--/test          --单元测试
--/utils         --工具
--/view_model    --存放页面显示用到的实体对象
--/views         --存放页面(动态/静态)
app.js           --应用程序文件
appConfig.json   --kcola框架配置文件
starter.js       --程序启动文件（入口文件）
```

## kcola-mvc中间件

### Proxy

代理请求模块，可以合并请求，自定义返回结果，一般用于前后端分离

### Auth

API鉴权模块，采用JSON Web Token验证方式，多进程实现


## 运行环境

node version >=8.94

koa >=2.0

## 命令

```shell

npm run prod //生产环境启动命令
npm run dev  //开发环境启动命令
npm run test //测试环境启动命令
```
## Hello world!

#### 1.新建appConfig.json文件
`appConfig.json`配置选项请参考[这里](https://github.com/Khadron/kcola)

#### 2.新建config.js文件
`config.js`配置选项请参考[这里](https://github.com/Khadron/kcola)
在`Hello world!`项目中直接沿用默认配置即可

#### 3.新建home controller文件，放到controller文件夹中

```js
/*
  controller/home.js
*/

class HomeController {

  constructor() {

  }

  async homePage() {

    await this.ctx.render("home", {
      title: "mincola",
      letter: "hello world!"
    });
  }

}
module.exports = HomeController

```

#### 4.新建home router配置文件，放到route_config文件夹中
`router`配置说明请看[这里](https://github.com/Khadron/kcola)

``` js
{
  "homePage": {
    "route": "/",
    "method": "get",
    "ignoreauth": true
  }
}
```

#### 5.新建home viewModel文件，放到view_model文件夹中

``` js

/*
  业务实体（模型）
*/
const template = {
  userPass: "",
  userName: ""
};

module.exports = Object.assign({}, template);

```

#### 6.新建home.ejs文件，放到views文件夹中

``` js

<!DOCTYPE html>

<head>
  <title>
    <%= title %>
  </title>
  <style type="text/css">
    div {
      text-align: center;
      margin: 100px;
    }

    ul {
      list-style: none;
    }

  </style>
</head>

<body>
  <div>
    <h1>mincola</h1>
    <p>一个基于koa2，小而美的RESTful API + MVC的web开发框架！</p>
    <h2>
      <%= letter %>
    </h2>
  </div>
</body>

```

#### 5.初始化

```shell
npm install
```

#### 6.启动
```shell
npm run dev
```
访问 http://localhost:3669/  (默认端口号为3669，可以自己设置)，就可以进行开发了