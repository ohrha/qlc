var User = require('./models/user');
module.exports = function (app) {


    app.post('/api/users', function (req, res) {
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password,
            user.email = req.body.email;
        user.name = req.body.name;

    })
    if (req.body.username == null || req.body.username == "" || req.body.password == null || req.body.password == "" ||
        req.body.email == null || req.body.email == "" || req.body.name == null || req.body.name == '') {
        res.json({ success: false, message: "Ensure username, email, name and password are provided" });


    }else{
        user.save(function(err){
            if(err){
                                   if (err.errors != null) {

                        if (err.errors.name) {
                            res.json({ success: false, message: err.errors.name.message });
                        } else if (err.errors.email) {
                            res.json({ success: false, message: err.errors.email.message });
                        } else if (err.errors.username) {
                            res.json({ success: false, message: err.errors.username.message })
                        } else if (err.errors.password) {
                            res.json({ success: false, message: err.errors.password.message });
                        } else {
                            res.json({ success: false, message: err });
                        }
                    } else if (err) {

                        if (err.code == 11000) {
                            if (err.errmsg[61] == 'u') {
                                res.json({ success: false, message: "That username is already taken..." });
                            } else if (err.errmsg[61] == "e") {
                                res.json({ success: false, message: "That email is already taken..." }); j
                            }
                        } else {
                            res.json({ success: false, message: err });
                        }
                    }
                } else {
                    user.save(function(err){
                        if(err){
                            res.json({success:false, message: err})
                        }else{
                            res.json({success: true, message:"Save successful."})
                        }
                    })
            }
        })
    }



}