const mongoose = require('mongoose')



mongoose.connect(`mongodb://localhost:27017`)
.then(d=>{
    console.log('Connected');
})
.catch(e=>{

});

module.exports = { mongoose } 