const express = require('express')
const app = express();
const env = require('dotenv');
env.config();

const { myRoute } = require('./routes/myRoute');
const { registerRoute } = require('./routes/authRoute');

//Lets create the first route

//If you want to recive json payload
app.use(express.json())

app.use(myRoute);
app.use('/api',registerRoute);
app.use(express.static('frontend'))


let port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('The server is running on ',port)
})