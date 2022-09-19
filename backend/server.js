const express = require('express')
const app = express();
const env = require('dotenv');
const { myRoute } = require('./routes/myRoute');
env.config();


//Lets create the first route

app.use(myRoute);
app.use(express.static('frontend'))


let port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('The server is running on ',port)
})