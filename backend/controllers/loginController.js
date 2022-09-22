const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { User } = require("../models/userModel");

let loginController = (req,res)=>{

    //Check if the email is in db

    User.findOne({ email:req.body.email}).then(d=>{
        if(d === null){
            res.status(403).json({
                msg:"Invalid Credentials"
            });
        }else{
            let db_hashed_pwd = d.password;
            let your_paswrod = req.body.password;

            if(bcrypt.compareSync(your_paswrod, db_hashed_pwd)){
                let jwt_payload ={
                    email:d.email
                };
                let token = jwt.sign(jwt_payload, process.env.JWT_SECRET_KEY);;

                res.status(200).json({
                    msg:"Welcome",
                    token
                });
            }else{
                res.status(403).json({
                    msg:"Invalid Credentials"
                });
            }
            //bcrypt.compareSync(myPlaintextPassword, hash); // true
            // your_paswrod --> hash
           
        }
    }).catch(e=>{
        res.status(400).json(e);
    });

    
}

exports.loginController = loginController;