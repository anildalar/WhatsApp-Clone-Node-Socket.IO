
const { mongoose } = require('../config/db')


//Lets define our user Schema
let userSchema =  mongoose.Schema({ 
    fname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
},{
    timestamps:true
})

const User = mongoose.model('User',userSchema);

module.exports = { User }
