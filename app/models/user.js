var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var titlize = require('mongoose-title-case');
var validate = require('mongoose-validator');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({

    name: {type: String, required: true},
    username: {type:String, lowercase: true, required: true, unique:true,dropDups:true},
    password:{type:String, required:true, select:false},
    email:{type:String, required: true, lowercase:true, unique:true, dropDups:true},
    active:{type:Boolean,required: false, default: false},
    temporarytoken: {type:String, required: true},
    resettoken:{type:String, required:false, default:'user'},
    viewhistory:{type:Array},
    alreadyapplied:{type:Array},
    calender:{type:Object}




})

//var Model = mongoose.model('User', UserSchema);
module.exports = mongoose.model('User', UserSchema);

var User = mongoose.model('User', UserSchema);