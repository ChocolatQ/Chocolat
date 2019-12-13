//使用mongoose链接mongodb数据库

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/blog', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {console.log('链接成功')})
.catch(err => console.log(err, '链接失败'));