const mongoose= require('mongoose')


const userSchema= mongoose.Schema({
    username : { type: String, required: true, unique: true},
    password : { type: String, required: true},
    email    : { type: String, required: true, unique: true},
    role     : { type: String, required: true, enum: ['admin', 'user']},
    isActive : { type: Boolean, required: true, default : false }
 }, 
 {timestamps: true}
)

module.exports= mongoose.model('User', userSchema)