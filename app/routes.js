var User = require('./models/user');
var bcrypt = require('bcrypt-nodejs');
module.exports = function (app) {

    app.get('/users', function(req,res){

        User.find({}, function(err,users){
            if(err)throw err;
            if(!users){
                res.json({success: false, message:"Users not found.."})
            }else{
                res.json({success: true, message: "Users found..", users})
            }
        })
    })
    app.put('/users/:userid/:month/:date/:boolean', function (req, res) {

        User.findOne({ _id: req.params.userid }, function (err, user) {

            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found.." })
            } else {
                //res.json({success: true, message: "User found..", user.})
                console.log(user)
                if (req.params.month == "June") {
                    if (req.params.boolean == "false") {
                        user.june[req.params.date - 1] = false;
                        User.findOneAndUpdate({ _id: req.params.userid }, { $set: { June: user.June } }, function (err, user) {
                            if (err) throw err;
                            if (!user) {
                                res.json({ success: false, message: "User not found..." })
                            } else {
                                res.json({ success: true, message: "User found and updated..", user })
                            }
                        })
                    } else {
                        user.june[req.params.date - 1] = true;
                        User.findOneAndUpdate({ _id: req.params.userid }, { $set: { June: user.June } }, function (err, user) {
                            if (err) throw err;
                            if (!user) {
                                res.json({ success: false, message: "User not found..." })
                            } else {
                                res.json({ success: true, message: "User found and updated..", user })
                            }
                        })
                    }
               
                }
                //res.json({success: true, message: "User's availability modified", user: user})
            }

        })

    })
   
    app.post('/bookjob', function(req,res){ 
        console.log(req.body)
       User.findOneAndUpdate ({_id: req.body.userid},{$push:{jobDetails: req.body.jobDetails}}, function(err,user){
            if(err)throw(err)
            if(!user){
                res.json({success: false, message:"User not found"})
                
            }else{
                res.json({success: true, message: "User found and updated",user})
            }
        })
    }) 
     app.put('/users/:userId/:date/:boolean', function(req,res){
            
        User.findOne({_id:req.params.userId},function(err,user){
            

            if(err)throw err; 

            if(!user){
                res.json({success: false, message:"User not found"})

            }else{
                if(req.params.boolean =="true"){
                    user.calender[0][req.params.date]=true;
                    console.log(user.calender[0][req.params.date])
                              User.findOneAndUpdate({_id: req.params.userId},{$set:{calender:user.calender}},function(err,user){
                    if(err)throw err;
                    if(!user){
                        res.json({success:false, message:"User not found"})
                    }else{
                        res.json({success: true, message: "User found and updated...",user:user})
                    }
                })
            }else{
                                    user.calender[0][req.params.date]=false;

                              User.findOneAndUpdate({_id: req.params.userid},{$set:{calender:user.calender}},function(err,user){
                    if(err)throw err;
                    if(!user){
                        res.json({success:false, message:"User not found"})
                    }else{
                        res.json({success: true, message: "User found and updated...",user:user})
                    }
                })
                }
      
            }

        })
    })
    app.put('/users/:userid', function (req, res) {

        User.findOne({ _id: req.params.userid }, function (err, user) {
            if (!user) {
                res.json({ success: false, message: "User not found..." })
            } else {
                res.json({ success: true, message: "User found..", user: user })
            }
        })

    })
    app.post('/authenticate', function (req, res) {

        //res.send("testing new route")
        console.log("authenticate Route Hit");
        console.log(req.body)
        User.findOne({ username: req.body.username }).select('email username password')
            .exec(function (err, user) {

                if (err) throw err;
                if (!user) {
                    console.log("ppocher")
                    res.json({ success: false, message: "Could Not Authenticate User" })
                } else if (user) {
                    //START PASSWORD VALIDATION
                    console.log("hello")
                    var validPassword = user.comparePassword(req.body.password)
                    console.log("validPassword", validPassword)

                    //console.log(validPassword)
                    if (!validPassword) {
                        res.json({ success: false, message: "Could not authenticate password" })
                    } else {
                        res.json({ success: true, message: "User authenticated...", user: user })
                    }
                }
            })

    })
    app.post('/users', function (req, res) {
        console.log("Route Hit")
        var user = new User();
        user.username = req.body.userName;
        user.password = req.body.password.toString(),
            user.email = req.body.email;
        user.name = req.body.name;
        console.log(user)

        if (req.body.userName == null || req.body.userName == "" || req.body.password == null || req.body.password == "" ||
            req.body.email == null || req.body.email == "" || req.body.name == null || req.body.name == '') {
            res.json({ success: false, message: "Ensure username, email, name and password are provided" });


        } else {
            console.log("Here i am")
            user.save(function (err) {
                if (err) {

                    //res.send("Ensure all fields input")
                    res.json({ success: false, message: "There was an error..." })
                    console.log(err)
                } else {

                    /* if (err) {
                         res.send("Username or email already exists..")
                         res.json({success: false, message: "Username or email already exists.."})
                     } else {*/
                    //res.send("userCreated");
                    res.json({ success: true, message: "User Created Successfully." })
                    /* }*/


                }
            })
        }

    })


    return app;

}