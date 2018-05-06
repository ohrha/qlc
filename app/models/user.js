var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var titlize = require('mongoose-title-case');
var validate = require('mongoose-validator');
var bcrypt = require('bcryptjs');

var UserSchema = new Schema({

    name: {type: String, required: true},
    username: {type:String, lowercase: true, required: true, unique:true,dropDups:true},
    password:{type:String, required:true, select:false},
    email:{type:String, required: true, lowercase:true, unique:true, dropDups:true},
    active:{type:Boolean,required: false, default: false},
    temporarytoken: {type:String, required: false},
    resettoken:{type:String, required:false, default:'user'},
    viewhistory:{type:Array},
    alreadyapplied:{type:Array},
    calender:{type:Object}




})

UserSchema.pre('save', function(next){
    var user = this;
    console.log('user Prehook',user.password) 
    console.log(typeof user.password)
    //var password = user.password.toString()
    bcrypt.hash(user.password, 10, function(err,hash){
        if(err) return next(err);
        console.log("Old user.password", user.password);
        console.log("Hash". hash)
        user.password = hash;
        console.log("New user.password", user.password)
        next();
    })
})
//CREATE CUSTOM METHOD
UserSchema.methods.comparePassword = function(password){
    console.log("oy")
    console.log(password, this.password)
    console.log(typeof password)
    var passwordPlain = password.toString()
    return bcrypt.compare(password,this.password);

}
//var Model = mongoose.model('User', UserSchema);
module.exports = mongoose.model('User', UserSchema);

var User = mongoose.model('User', UserSchema);