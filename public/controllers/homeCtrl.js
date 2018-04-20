(function(){

    var app = angular.module('homeController',[])
    app.config(function(){

        console.log("Home Controller Loaded")
    })

    app.controller('homeCtrl', function($scope){
        $scope.$on('$routeChangeSuccess', function () {
				$('.carousel').carousel();
	});

    })

}());