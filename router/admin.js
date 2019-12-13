const express = require('express');

const router = express.Router();

// users = {users:users}
const {users} = require('../model/users');

router.get('/login', (req, res) => {
    res.render('admin/login')
})
// router.get("/set",(req,res)=>{
//     req.session.aaa= "hjkljfds";
//     res.end("ok");
// });
// router.get("/get",(req,res)=>{
//     console.log(req.session);
//     res.end("4565456");
// });
router.post("/checkLogin",require("./admin/checkLogin"));
router.get('/user', (req, res) => {
    // if(!req.session.isLogin){
    //     return res.redirect("/admin/login");
    // }
    res.render('admin/user');
})
router.get('/logout', (req, res) => {
    req.session.destroy(()=>{
        res.clearCookie("connect.sid");
        res.redirect("/admin/login");
    });
    // res.render('admin/user');
})
router.get('/user-add', (req, res) => {
   res.render("admin/user-add",{msg:req.query.message});
})
router.post('/user-add', (req, res) => {
    // res.send("this ok");
    users.findOne({email:req.body.email}).then((result)=>{                                            
        if(result !=null){
            return res.redirect("/admin/user-add?message=邮箱已被占用");
        }
        // res.send(req.body);
        users.create(req.body).then(()=>{
            return res.redirect("/admin/user-add");
        });

    });
    

 });
router.get('/article', (req, res) => {
    res.render('admin/article')
})

module.exports = router;