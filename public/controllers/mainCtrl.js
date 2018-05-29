(function () {

    var app = angular.module('mainController', ['authServices','userServices'])
    app.config(function () {

        console.log("Main Controller Loaded")
    })

    app.controller('mainCtrl', function ($scope, Auth,$timeout,$location,User,$rootScope,AuthToken) {

        $scope.userClass = "";

        $scope.logout = function(){
            Auth.logout();
        }
        Auth.getUser().then(function(data){
            console.log(data)
            $rootScope.userClass = data.data.userclass;
            
            console.log($rootScope.userClass)
        })
        User.getUserClass().then(function(data){

            console.log(data)

        })
        $rootScope.$on('$routeChangeStart',function(){

            console.log(Auth.isLoggedIn())
            console.log(AuthToken.getToken())
            $rootScope.loggedIn = Auth.isLoggedIn()
        })

    })

}());