(function () {

    var app = angular.module('loginController', ['authServices'])
    app.config(function () {

        console.log("login Controller Loaded")
    })

    app.controller('loginCtrl', function ($scope, Auth, $timeout, $location, $rootScope) {
        $rootScope.payPeriod = false;
        $rootScope.isLoggedin = false;
        $scope.successfulLogin = false;
        $scope.failedLogin = false;
                $scope.loading = false;

        $scope.errorMsg = false;
      

        $scope.loginUser = function (loginData, valid) {

            console.log(this.loginData)
            console.log(valid)
            $scope.loading = true;
            Auth.login(this.loginData).then(function (data) {

                console.log(data);

                if (data.data.success) {
                    $scope.loading = false;
                    $rootScope.payPeriodIcon = true;
                    $scope.successfulLogin = true;
                    //$rootScope.isLoggedin = true;
                    $rootScope.payPeriod = data.data.user.payperiodnum;
                    if (data.data.user.userclass == "employee") {
                        $timeout(function () {

                            $scope.successfulLogin = false;

                            $location.path('/profile/' + data.data.user._id)

                        }, 3000)
                    } else if (data.data.user.userclass == "client") {
                        $timeout(function () {

                            $scope.successfulLogin = false;

                            $location.path('/clientprofile/' + data.data.user._id)

                        }, 3000)

                    } else {
                        $timeout(function () {

                            $scope.successfulLogin = false;

                            $location.path('/profile/' + data.data.user._id)

                        }, 3000)

                    }


                } else {
                    $scope.loading = false;
                    $scope.failedLogin = true;
                    $scope.errorMsg = data.data.message;

                }

            })
        }



    })

}());