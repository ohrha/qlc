var User = require('./models/user');
module.exports = function (app) {


    app.post('/users', function (req, res) {
        console.log("Route Hit")
        var user = new User();
        user.username = req.body.userName;
        user.password = req.body.password,
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
                    res.json({success: false, message: "There was an error..."})
                    console.log(err)
                } else {
                    user.save(function (err) {
                        if (err) {
                            res.send("Username or email already exists..")
                            res.json({success: false, message: "Username or email already exists.."})
                        } else {
                            //res.send("userCreated");
                            res.json({success: true, message: "User Created Successfully."})
                        }


                    })
                }
            })
        }

    })


    return app;

}