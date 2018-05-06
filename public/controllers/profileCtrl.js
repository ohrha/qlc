(function(){


    var app = angular.module('profileController',[])
    app.config(function(){

        console.log("Profile Controller Loaded")
    })

    app.controller('profileCtrl', function($scope){
        $scope.$on('$routeChangeSuccess', function () {
				$('.carousel').carousel();
	});

    })




}())