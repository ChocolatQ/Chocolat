const express = require('express');
const app = express();
app.listen(80, () => {
    console.log('Blog-Server is running...');
})

const path = require('path');
const _session = require("express-session");
const bp = require("body-parser");
app.use(bp.urlencoded({extended:false}));
app.use(_session({
    secret:"265486434546",
    resave:false,
    saveUninitialized:false
}));
//统一处理静态资源/托管静态资源
app.use(express.static(path.join(__dirname, 'public')))

//配置模板引擎
app.engine('html', require('express-art-template'));
//配置模板文件存放目录
app.set('views', path.join(__dirname, 'view'));
//配置模板文件后缀
app.set('view engine', 'html');

require('./model/connect');

//导入路由模块
const home = require('./router/home');
const admin = require('./router/admin');

//将路由模块注册为中间件
app.use('/home', home);
app.use(checkLogin);
app.use('/admin', admin);


function checkLogin(req,res,next){
    let arr = ["/admin/login","/admin/checkLogin"];
    if(arr.includes(req.url)){
        return next();
    }
    if(!req.session.isLogin){
        return res.redirect("/admin/login");
    }
    
    next();
}