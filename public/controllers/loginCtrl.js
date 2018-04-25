(function () {

    var app = angular.module('loginController', ['authServices'])
    app.config(function () {

        console.log("login Controller Loaded")
    })

    app.controller('loginCtrl', function ($scope, Auth) {

        $scope.loginUser = function(loginData, valid){

            console.log(this.loginData)
            console.log(valid)

            Auth.login(this.loginData).then(function (data) {

                console.log(data);


            })
        }



    })

}());