//配置集合信息并创建集合对象

const mongoose = require('mongoose');

//配置集合信息
const schema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 10,
        required: true,
        trim: true
    },
    email: String,
    password: String,
    //角色: 有两种  admin (管理员)  normal (普通用户)
    role: String,
    //状态: 有两种  1 启用  0 禁用
    //启用: 能够正常通过后台登录页登录系统
    //禁用: 不能通过后台登录页登录系统
    status: Number
});

// 创建集合对象
const users = mongoose.model('users', schema);

// 导出users集合对象
module.exports = {
    users
}