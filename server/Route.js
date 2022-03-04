const express = require("express");
const rout = express.Router("");
const use = require ('./Mongoose')
const PersonData = require ('./Database');


rout.post("/Todoadded", async(req,res) => {
    const post = new PersonData ({
        username : req.body.username,
        text : req.body.text
    })
    await post.save();
    res.json({
        status : true,
        message : "Todo Posted Successfully"
    })
})


rout.post("/tododata", async (req,res) => {
    const Huser = PersonData.find({username : req.body.username}, async(err,data) => {
        if(data){
            res.json(data)
        }
        else{
            res.json("Todo Not Posted ! Something went to wrong")
        }
    })
})


rout.post("/tododelete", async (req,res) => {
    var id = req.body.ids;
    PersonData.findByIdAndDelete(id, function (err,docs) {
        if (err) {
            console.log(err)
        }
        else {
            res.json({
                status : true,
                delete : "Todo Deleted Successfully"
            })
        }
    })
})


rout.post("/userdelete", async (req,res) => {
    var username = {username : req.body.username};
    use.findOneAndDelete(username, function (err,docs){
        if(err){
            console.log(err);
        }
        else{
            res.json({
                status : true,
                delete : "User Successfully Deleted !!!"
            })
        }
    })
})

rout.post("/login", async (req,res) => {
    const Us = use.find({username:req.body.username}, (err,data) => {
        if(data){
            const UDatas = data
            if( UDatas ==""){
                res.json({
                    status : false,
                    error : "user Not found ! please try again"
                })
            }else{
                use.findOne({username : req.body.username},(err,data) => {
                    if(data.password == req.body.password){
                        res.json({
                            username : data.username,
                            password : data.password
                        })
                    }
                    else{
                        res.json({
                            status : false,
                            error : "Invalid password ! try again..." 
                        })
                    }
                })
            }
        }
    })
})


rout.put("/PasswordUpdate", async(req,res) => {
    const Assigned = req.body.username;
    const getdatas = await use.updateOne({username : Assigned} , {password : req.body.password});
    if(getdatas.modifiedCount == 0) {
        res.json({
            status : false,
            msg : "Password Already used ! Please try again"
        })
    }
    else {
        res.json({
            status : true,
            msg : "Password updated Successfully"
        })
    }
})



rout.post("/register" , async (req,res) => {
    const Us = use.find({username : req.body.username}, async (err,data) => {
        if(data){
            const Getter = data
            if(Getter == ""){
                const EE = use.find({email : req.body.email},async (err,edata) => {
                    const Active = edata;
                    if(Active == ""){
                            const register = new use({
                            username : req.body.username,
                            email : req.body.email,
                            password : req.body.password
                        })
                        await register.save();
                        res.json({
                            status : true,
                            message : "Registered Successfully ! please Login..."
                        });
                    }
                    else{
                        res.json({
                            status : false,
                            error : "email already exist ! Please use another mail Id"
                        })
                    }
                })
            }
            else{
                res.json({
                    status : false,
                    error : "Username Already exist ! Please use another mail Id"
                })
            }
        }
    })
})



module.exports = rout;