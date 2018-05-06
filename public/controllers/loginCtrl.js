(function () {

    var app = angular.module('loginController', ['authServices'])
    app.config(function () {

        console.log("login Controller Loaded")
    })

    app.controller('loginCtrl', function ($scope, Auth) {
        $scope.successfulLogin = false;
        $scope.failedLogin = false;
        $scope.errorMsg = false;
        $scope.loading = false;
        $scope.loginUser = function(loginData, valid){

            console.log(this.loginData)
            console.log(valid)

            Auth.login(this.loginData).then(function (data) {

                console.log(data);
                $scope.loading = true;
                if(data.data.success){
                    $scope.loading = false;
                    $scope.successfulLogin = true;
                    $timeout(function(){

                        $scope.successfulLogin = false;
                        $location.path('/profile')

                    },3000)

                }

            })
        }



    })

}());