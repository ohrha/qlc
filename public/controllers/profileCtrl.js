(function(){


    var app = angular.module('profileController',['userServices'])
    app.config(function(){

        console.log("Profile Controller Loaded")
    })

    app.controller('profileCtrl', function($scope,User,$routeParams){
        $scope.$on('$routeChangeSuccess', function () {
				$('.carousel').carousel();
	});
    $scope.name = "";

    console.log($routeParams)
    User.getUser($routeParams.userid).then(function(data){

        console.log(data)
        $scope.name = data.data.user.name;

    })
    })




}())