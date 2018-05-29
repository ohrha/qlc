var User = require('./models/user');
var bcrypt = require('bcrypt-nodejs');
var fs = require('fs');
var pdf = require('html-pdf');
var jwt = require('jsonwebtoken');
var secret = "negus";
var html = fs.readFileSync('./public/views/pages/management.html', 'utf8');
var options = { format: 'Letter' };

module.exports = function (app) {
    /*
        pdf.create(html, options).toFile('./businesscard.pdf', function (err, res) {
                if (err) return console.log(err);
                console.log(res); // { filename: '/app/businesscard.pdf' }
            });
        app.get('/users/generatepdf', function (req, res) {
    
            pdf.create(html, options).toFile('./businesscard.pdf', function (err, res) {
                if (err) return console.log(err);
                console.log(res); // { filename: '/app/businesscard.pdf' }
            });
    
        })
        */
   
    app.put('/users/:input', function (req, res) {
        User.find({ name: { $regex: "^" + req.params.input } }, function (err, users) {
            if (err) throw err;
            if (!users) {
                res.json({ success: false, message: "Users not found.." })
            } else {
                res.json({ success: true, message: "Users found", users: users })
            }
        })
    })

    app.get('/users', function (req, res) {

        User.find({}, function (err, users) {
            if (err) throw err;
            if (!users) {
                res.json({ success: false, message: "Users not found.." })
            } else {
                res.json({ success: true, message: "Users found..", users })
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

    app.post('/bookjob', function (req, res) {
        console.log(req.body)
        User.findOneAndUpdate({ _id: req.body.userid }, { $push: { jobDetails: req.body.jobDetails } }, function (err, user) {
            if (err) throw (err)
            if (!user) {
                res.json({ success: false, message: "User not found" })

            } else {
                res.json({ success: true, message: "User found and updated", user })
            }
        })
    })
    app.put('/users/:userId/:date/:boolean', function (req, res) {

        User.findOne({ _id: req.params.userId }, function (err, user) {


            if (err) throw err;

            if (!user) {
                res.json({ success: false, message: "User not found" })

            } else {
                if (req.params.boolean == "true") {
                    user.calender[0][req.params.date] = true;
                    console.log(user.calender[0][req.params.date])
                    User.findOneAndUpdate({ _id: req.params.userId }, { $set: { calender: user.calender } }, function (err, user) {
                        if (err) throw err;
                        if (!user) {
                            res.json({ success: false, message: "User not found" })
                        } else {
                            res.json({ success: true, message: "User found and updated...", user: user })
                        }
                    })
                } else {
                    user.calender[0][req.params.date] = false;

                    User.findOneAndUpdate({ _id: req.params.userid }, { $set: { calender: user.calender } }, function (err, user) {
                        if (err) throw err;
                        if (!user) {
                            res.json({ success: false, message: "User not found" })
                        } else {
                            res.json({ success: true, message: "User found and updated...", user: user })
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
        User.findOne({ username: req.body.username }).select('email username password payperiodnum userclass')
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
                        var token = jwt.sign({ username: user.username, email: user.email, userclass: user.userclass }, secret, { expiresIn: '24h' });
                        res.json({ success: true, message: 'User authenticated', token: token ,user:user});
                        //res.json({ success: true, message: "User authenticated...", user: user })
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
     //EXPRESS MIDDLEWARE
    app.use(function (req, res, next) {
        console.log(req.body.token)
        var token = req.body.token || req.body.query || req.headers['x-access-token'];
        //from jwt documentation
        if (token) {
            // verify token
            jwt.verify(token, secret, function (err, decoded) {

                if (err) {
                    res.json({ success: false, message: "Token invalid" })
                } else {
                    req.decoded = decoded;
                    next(); //continue to post method...
                }

            })

        } else {
            res.json({ success: false, message: "No token provided" });
        }


    });
    app.post('/me', function (req, res) {

        res.send(req.decoded);



    });
        app.put('/api/getuserclass', function (req, res) {
        User.findOne({ username: req.decoded.username }, function (err, user) {

            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "No user found..." });
            } else {
                res.json({ success: true, userclass: user.userclass });
            }

        });


    });



    return app;

}