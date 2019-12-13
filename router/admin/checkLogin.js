
const {users}=  require("../../model/users");
module.exports=(req,res)=>{
   
    let regEmail = /^\w{2,20}@\w{2,20}.\w{1,10}$/;
    const regPwd = /^\w{6,20}$/;
    if(!regEmail.test(req.body.email)||!regPwd.test(req.body.password)){
        return res.render("admin/login",{err:"用户名或者密码错误"});
    }
    users.findOne({email:req.body.email}).then((result)=>{
        if(result == null){
            return res.render("admin/login",{err:"用户名或者密码错误"});
        }else{
            console.log(result);
            if(result.password == req.body.password){
                req.session.isLogin = true;
                req.session.userInfo =result;
                res.redirect("/admin/user");
            }
            console.log(req.body);
            // res.send("nidaye");
        }

    });
    // res.send(req.body);
}