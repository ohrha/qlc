(function () {

    console.log("routes.js loaded");

    var app = angular.module("appRoutes", ['ngRoute']);

    app.config(function ($routeProvider, $locationProvider) {//Only providers in config phase... no $rootScope or any other instances...



        $routeProvider
            .when('/',{
                templateUrl:'../views/pages/test.html',
                name:"QLH | INDEX",
                resolve:{
                    init: function($route){
                        console.log("index")
                    }
                }
            })
            .when('/home', {

                templateUrl: '../views/pages/test2.html',
                
                name: "QLH | Home",
                controller: 'homeCtrl',
                controllerAs: 'home',
                resolve: {
                    init: function ($route) {

                        console.log("homecontroller")
                        console.log($route)
                        console.log(templateUrl)
                    }
                }

            })
            .otherwise({
                redirectTo: '/home'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requiredBase: false
            //now no more # required before routes
        })

    })





}())