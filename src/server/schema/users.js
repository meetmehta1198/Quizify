var mongoose=require('mongoose')
var UserSchema=new mongoose.Schema({
    name:String,
    username:String,
    password:String,
    email:String,
    phone:String,
    gender:String
})
var User= mongoose.model('User',UserSchema,'users');
module.exports=User;