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
    payperiodnum:{type:Number},
    payrate:{type:Number},
    delinquenttimesheets:{type:Array},
    historyupdated:{type:Boolean},
    phonenumber:{type:Number},
    payperiodhistory:{type:Array},
    comments:{type:Array},
    complaints:{type:Array},
    userclass:{type:String},
    active:{type:Boolean,required: false, default: false},
    temporarytoken: {type:String, required: false},
    resettoken:{type:String, required:false, default:'user'},
    viewhistory:{type:Array},
    payperiods:{type:Array},
    alreadyapplied:{type:Array},
    calender:{type:Object},
    June:{type:Array},
    jobDetails:{type:Array},
    supervisors:{type:Array},
    requestedjobs:{type:Array},
    approvedjobs:{type:Array},
    locations:{type:Array}




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
        if(user.password !== hash){
 user.password = hash;
        console.log("New user.password", user.password)
        }
       
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