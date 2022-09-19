
const express = require('express')

const myRoute = express.Router();


myRoute.get('/',(req,res)=>{
    let frontendurl = __dirname;
    frontendurl = frontendurl.slice(0, -15)
    
    res.sendFile(frontendurl+'/frontend/index.html');
});

//Named Export
module.exports = { myRoute };