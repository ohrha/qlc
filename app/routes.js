var User = require('./models/user');
var PayPeriod = require('./models/payperiod')
var Client = require('./models/client')
var Location = require('./models/location');
var Supervisor = require('./models/supervisor')
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
    app.post('/users/addpayperiodtopayperiodhistory', function (req, res) {
        console.log(req.body.payperiod)
        console.log(req.body.allEmployeesJobDetails.length)
        for (var z = 0; z < req.body.allEmployeesJobDetails.length; z++) {
            var payperiodHistoryEntry = {}
            payperiodHistoryEntry.payperiod = req.body.payperiod;
            payperiodHistoryEntry.entry = req.body.allEmployeesJobDetails[z];
            //  payperiodHistoryEntroy.historyentered = true;
            //  console.log(req.body.allEmployeesJobDetails[z][7].name)
            if (req.body.allEmployeesJobDetails[z][7].name !== undefined) {
                //console.log(z)
                var name = req.body.allEmployeesJobDetails[z][7].name;
                console.log(name)
                User.findOne({ name: name }, function (err, user) {
                    if (err) throw err;
                    if (!user) {
                        res.json({ success: false, message: "User not found.." })
                    } else {
                        console.log(user.historyupdated)
                        if (user.historyupdated) {
                            console.log("History already updated...")
                        } else {
                            console.log('history not update'+user.name)
                            User.findOneAndUpdate({ name: user.name }, { $push: { payperiodhistory: payperiodHistoryEntry } }, { new: true }, function (err, user) {

                                if (err) throw err;
                                if (!user) {
                                    res.json({ success: false, message: "User not found, so not updated" })
                                } else {
                                    console.log("User updated..."+user.name)
                                   // console.log(req.body.allEmployeesJobDetails[z][7].name)
                                    User.findOneAndUpdate({ name: user.name }, { $set: { historyupdated: true } }, { new: true }, function (err, user) {

                                        if (err) throw err;
                                        if (!user) {
                                            res.json({ success: false, message: "User not found, so not updated" })
                                        } else {
                                            console.log("User History indicator Updated... "+user.name)
                                           // console.log(name)
                                        }
                                    })
                                }
                            })
                        }

                    }
                })

            }
        }
        User.find({}, function(err,users){
            if(err)throw err
            if(!users){
                res.json({success: false, message:"Users not found..."})
            }else{
                res.json({success: true, message:"Users found..", users:users})
            }
        })
        //res.json({ success: true, message: "User Pay Period History Successfully Updated..." })
    })
    app.post('/users/addjobtocurrentpayperiod',function(req,res){
console.log(req.body)

        User.find({name: req.body.user}, function(err,user){

            if(err)throw err;
            if(!user){
                res.json({success: false, message: "User not found..."})
            }else{
               // res.json({success: true, message: "User fou"})
               //console.log(user)
               for(var z=0;z<user[0].payperiods.length;z++){
                  // console.log(user[0].payperiods[z].payperiodnum)
                                      //console.log(user[0].payperiods[z].jobDetails)
                                      if(user[0].payperiods[z].payperiodnum == req.body.payperiodnum){
                                          //consolconsole.log(user[0].payperiods[z].jobDetails)
                                        console.log(z)
                                        user[0].payperiods[z].jobDetails.push(req.body)
                                          User.findOneAndUpdate({name: req.body.user},{$set:{payperiods:user[0].payperiods}}, function(err,user){

                                              if(err)throw err;
                                              if(!user){
                                                  console.log("here")
                                                  res.json({success: false, message:"User not found so not updated.."})
                                              }else{
                                                console.log("herer")
                                                  //res.json({success: true, message:"User found and updated..", user: user})
                                                  User.find({name: req.body.user}, function(err,user){

                                                      for(var z=0; z< user[0].delinquenttimesheets.length;z++){
                                                          console.log("Holaa")
                                                         // console.log(user[0].delinquenttimesheets[z].payperiod)
                                                          for(var d=0; d< user[0].delinquenttimesheets[z].length;d++){
                                                              console.log(user[0].delinquenttimesheets[z][d])
                                                            if(user[0].delinquenttimesheets[z][d].date == req.body.date){
                                                                console.log("2")
                                                                user[0].delinquenttimesheets[z].splice(user[0].delinquenttimesheets[z].indexOf(user[0].delinquenttimesheets[z][d]),1)
                                                                console.log(user[0].delinquenttimesheets[z])
                                                                User.findOneAndUpdate({name: req.body.user}, {$set:{delinquenttimesheets: user[0].delinquenttimesheets[z]}},{new:true}, function(err,user){
                                                                    if(err)throw err;
                                                                    if(!user){
                                                                        res.json({success: false, message:"User not found so no updated.."})
                                                                    }else{

                                                                       // res.json({success: true, message:"User found "})
                                                                       console.log("Delinquent Timesheet Removed..")
                                                                    }
                                                                })
                                                            }
                                                          }
                                                      }
                                                  })
                                              }
                                          })
                                      }


                  
               }
               res.json({success: true, message:"Current Pay Period Successfully Updated With Delinquent Time Sheet", user:user})
            }
        })
    })
    app.post('/users/adddelinquenttimesheet', function (req, res) {
        //console.log(req.body)
        User.find({ name: req.body.name[0] }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found..." })
            } else {
                console.log("userfnd")
                // console.log(user[0].delinquenttimesheets)
                //user[0].push(req.body.)

                for (var z = 0; z < req.body.date.length; z++) {
                    console.log("userfound")

                    if (user[0].delinquenttimesheets.length > 0) {
                        for (var d = 0; d < user[0].delinquenttimesheets.length; d++) {
                            console.log("hello")
                            //console.log(user[0].delinquenttimesheets[d])
                            for (var s = 0; s < user[0].delinquenttimesheets[d].length; s++) {

                                if (req.body.date[z] == user[0].delinquenttimesheets[d][s].date && user[0].delinquenttimesheets[d][s].date !== undefined) {

                                    console.log("Delinquent Time SHeet Already Exists")

                                } else {
                                    console.log("COLI")
                                    req.body.jobDetails[0].payperiod = req.body.payperiod;
                                    user[0].delinquenttimesheets.push(req.body.jobDetails)
                                    User.findOneAndUpdate({ name: req.body.name[0] }, { $set: { delinquenttimesheets: user[0].delinquenttimesheets } }, { new: true }, function (err, user) {

                                        if (err) throw err;
                                        if (!user) {
                                            res.json({ success: false, message: "User not found, so not updated..." })
                                        } else {
                                            res.json({ success: true, message: "User found and updated..", user: user })
                                        }
                                    })

                                }


                            }




                        }
                    } else {
                        req.body.jobDetails[0].payperiod = req.body.payperiod;

                        user[0].delinquenttimesheets.push(req.body.jobDetails)
                        User.findOneAndUpdate({ name: req.body.name[0] }, { $set: { delinquenttimesheets: user[0].delinquenttimesheets } }, { new: true }, function (err, user) {

                            if (err) throw err;
                            if (!user) {
                                res.json({ success: false, message: "User not found, so not updated..." })
                            } else {
                                res.json({ success: true, message: "User found and updated..", user: user })
                            }
                        })
                    }

                    //if(user[0].delinquenttimesheets[z].date == req.body.date)

                }


                //res.json({success: true, message: "User found..."})
            }
            res.json({success: false, message:"User Delinquent Time Sheet Already Exists!"})
        })
    })
    app.put('/clients/create/:clientName', function (req, res) {

        var client = new Client();
        client.name = req.params.clientName;
        if (req.params.clientName !== "" || undefined) {
            client.save(function (err, client) {
                if (err) {
                    res.json({ success: false, message: "Save failed.." })
                } else {
                    res.json({ success: true, message: "Save successfull...", client: client })
                }
            })
        }
    })
    app.put('/locations/create/:locationName', function (req, res) {

        var location = new Location();
        location.name = req.params.locationName;
        if (req.params.locationName !== "" || undefined) {
            location.save(function (err, location) {
                if (err) {
                    res.json({ success: false, message: "Save failed.." })
                } else {
                    res.json({ success: true, message: "Save successfull...", location: location })
                }
            })
        }
    })
    app.put('/supervisors/create/:supervisorName', function (req, res) {

        var supervisor = new Supervisor();
        supervisor.name = req.params.supervisorName;
        if (req.params.supervisorName !== "" || undefined) {
            supervisor.save(function (err, supervisor) {
                if (err) {
                    res.json({ success: false, message: "Save failed.." })
                } else {
                    res.json({ success: true, message: "Save successfull...", supervisor: supervisor })
                }
            })
        }
    })
    app.get('/clients', function (req, res) {
        Client.find({}, function (err, clients) {

            if (err) throw err;
            if (!clients) {
                res.json({ success: false, message: "Clients not founds..." })
            } else {
                res.json({ success: true, message: "Clients found...", clients: clients })
            }
        })
    })
    app.get('/locations', function (req, res) {
        Location.find({}, function (err, location) {

            if (err) throw err;
            if (!location) {
                res.json({ success: false, message: "Location not founds..." })
            } else {
                res.json({ success: true, message: "Location found...", location: location })
            }
        })
    })
    app.get('/supervisors', function (req, res) {
        Supervisor.find({}, function (err, supervisors) {

            if (err) throw err;
            if (!supervisors) {
                res.json({ success: false, message: "Supervisors not founds..." })
            } else {
                res.json({ success: true, message: "Supervisors found...", supervisors: supervisors })
            }
        })
    })
    app.put('/users/finduser/:name', function (req, res) {
        User.find({ name: req.params.name }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found.." })
            } else {
                res.json({ success: true, message: "User found", user: user })
            }
        })
    })
    app.post('/users/addjob', function (req, res) {
        console.log(req.body)
        Client.find({ _id: req.body.client }, function (err, client) {
            if (err) throw err;
            if (!client) {
                res.json({ success: false, message: "Client not found.." })
            } else {
                // res.json({success: true, message:"Client found...", client:client})
                Location.find({ _id: req.body.location }, function (err, location) {
                    if (err) throw err;
                    if (!location) {
                        res.json({ success: false, message: "Location not found.." })
                    } else {
                        Supervisor.find({ _id: req.body.supervisor }, function (err, supervisor) {
                            if (err) throw err;
                            if (!supervisor) {
                                res.json({ success: false, message: "Supervisor not found.." })
                            } else {
                                console.log(supervisor[0].name, location[0].name, client[0].name)
                                req.body.client = client[0].name
                                req.body.location = location[0].name;
                                req.body.supervisor = supervisor[0].name
                                User.find({ name: req.body.currentuser }, function (err, user) {
                                    if (err) throw err;
                                    if (!user) {
                                        res.json({ success: false, message: "User not found..." })
                                    } else {
                                        // console.log(user[0])
                                        for (var z = 0; z < user[0].payperiods.length; z++) {
                                            if (user[0].payperiods[z].payperiodnum == user[0].payperiodnum) {
                                                console.log(user[0].payperiods[z].jobDetails[req.body.payperiodIndex])
                                                user[0].payperiods[z].jobDetails[req.body.payperiodIndex] = req.body
                                                User.findOneAndUpdate({ name: req.body.currentuser }, { $set: { payperiods: user[0].payperiods } }, { new: true }, function (err, user) {
                                                    if (err) throw err;
                                                    if (!user) {
                                                        res.json({ success: false, message: "User not found.." })
                                                    } else {
                                                        res.json({ success: true, message: "User found and updated...", user: user })
                                                    }
                                                })
                                            }
                                        }

                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    })
    app.post('/payperiod/updatepayperiodjobdetails', function (req, res) {
        console.log(req.body)
        PayPeriod.find({}, function (err, payperiods) {
            if (err) throw err;
            if (!payperiods) {
                res.json({ success: false, message: "Payperiods not found.." })
            } else {
                // console.log(payperiods.length)
                // console.log(req.body.length)
                // console.log(payperiods[0])
                //console.log(req.body[0])
                for (var i = 0; i < payperiods.length; i++) {
                    // console.log(i)
                    // console.log(payperiods[i])
                    for (var d = 0; d < payperiods[i].jobDetails.length; d++) {


                        //payperiods[51].jobDetails[6] = req.body;
                        //payperiods[i].jobDetails[d].booked = req.body.booked
                        //console.log(d,payperiods[i].jobDetails[d],payperiods[i].payperiodnum)
                        console.log(payperiods)
                        PayPeriod.findOneAndUpdate({ payperiodnum: payperiods[i].payperiodnum }, { $set: { jobDetails: req.body[i].jobDetails } }, { new: true }, function (err, payperiod) {

                            if (err) throw err;
                            if (!payperiod) {
                                console.log("payperiod not found...")
                            } else {
                                console.log("Payperiod found and updated...")
                            }
                        })
                    }

                }
                res.json({ success: true, message: "PayPeriods Successfully Updated", payperiods: payperiods })
            }
        })
    })
    app.post('/payperiod/createpayperiod', function (req, res) {

        var payperiod = new PayPeriod();
        //payperiod.date = req.body.date;
        payperiod.payperiodnum = req.body.payperiod;
        payperiod.jobDetails = req.body.jobDetails;
        payperiod.booked = req.body.booked;
        payperiod.monthName = req.body.month;
        console.log(payperiod)
        payperiod.save(function (err, user) {

            if (err) {
                res.json({ success: false, message: "Save failed...", err: err })
            } else {
                res.json({ successs: true, message: "Save Successful..." })
            }


        })

    })
    app.get('/payperiod/getallpayperiods', function (req, res) {
        PayPeriod.find({}, function (err, payperiods) {

            if (err) throw err;
            if (!payperiods) {
                res.json({ success: false, message: "Payperiods not found.." })
            } else {
                res.json({ success: true, message: "PayPeriods found..", payperiods: payperiods })
            }

        })
    })
    app.put('/users/updatepayperiod/:payperiod/:username', function (req, res) {
        console.log("hello")
        console.log("HELLODFLKSDJFKLDJ")
        User.findOneAndUpdate({ username: req.params.username }, { $inc: { payperiodnum: 1 } }, { new: true }, function (err, user) {

            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found so not updated.." })
            } else {
                res.json({ success: true, message: "User found and updated..", user: user })
            }

        })
    })

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
                        var token = jwt.sign({ username: user.username, email: user.email, userclass: user.userclass, payperiod: user.payperiodnum }, secret, { expiresIn: '24h' });
                        res.json({ success: true, message: 'User authenticated', token: token, user: user });
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
            PayPeriod.find({}, function (err, payperiods) {
                console.log("hello", payperiods.length)
                for (var i = 0; i < payperiods.length; i++) {
                    payperiods[i].currentuser = req.body.name;
                    //console.log(payperiods[0].currentuser)
                }
                console.log(payperiods[0].currentuser)
                user.payperiods = payperiods;
                console.log(user.payperiods[0].currentuser)
                user.payperiodnum = 5;
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
                        res.json({ success: true, message: "User Created Successfully.", user: user })
                        /* }*/


                    }
                })

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