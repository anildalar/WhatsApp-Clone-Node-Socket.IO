const e = require("express");
const { User } = require("../models/userModel");
const bcrypt = require('bcrypt');
const salt = 10;
//HOF
let registerController = (req,res,)=>{

    //Check if the user is aviable
    User.findOne({email:req.body.email})
    .then(d=>{
        console.log(d)
        if(d === null){
            //go for Registation
            console.log(d);

            console.log(req.body);

            //Now you can store the user information
            const hash = bcrypt.hashSync(req.body.pwd, salt)
            let d2 = {
                fname:req.body.fname,
                email:req.body.email,
                password:hash,
            }

            console.log(d2);

            const user = new User(d2);

            user.save()
            .then(d=>{
                res.status(200).json({
                    msg:"Saved"
                });
            })
            .catch(e=>{
                res.status(400).json({
                    msg:"NOt Saved",
                    error:e
                });
            });
            
        }else{
            //You can not register because email is already in db
            res.status(404).json({
                msg:"Email aready registered"
            });
        }
        
    })
    .catch(e=>{
        res.json(e);
    });

    
}

module.exports = { registerController }


