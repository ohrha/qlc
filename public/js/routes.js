(function () {

    console.log("routes.js loaded");

    var app = angular.module("appRoutes", ['ngRoute']);

    app.config(function ($routeProvider, $locationProvider) {//Only providers in config phase... no $rootScope or any other instances...



        $routeProvider
            .when('/',{
                templateUrl:'../views/pages/test.html',
                controller:'homeCtrl',
                name:"QLH | INDEX",
                resolve:{
                    init: function($route){
                        console.log("index")
                    }
                }
            })
                .when('/services',{
                templateUrl:'../views/pages/services.html',
                name:"QLH | SERVICES",
                resolve:{
                    init: function($route){
                        console.log("index")
                    }
                }
            })
                            .when('/register',{
                templateUrl:'../views/pages/register.html',
                name:"QLH | SERVICES",
                resolve:{
                    init: function($route){
                        console.log("index")
                    }
                }
            })
                            .when('/login',{
                templateUrl:'../views/pages/login.html',
                name:"QLH | SERVICES",
                resolve:{
                    init: function($route){
                        console.log("index")
                    }
                }
            })
                            .when('/contact',{
                templateUrl:'../views/pages/contact.html',
                name:"QLH | SERVICES",
                resolve:{
                    init: function($route){
                        console.log("index")
                    }
                }
            })
            .when('/home', {

                templateUrl: '../views/pages/test2.html',
                
                name: "QLH | Home",
           
                resolve: {
                    init: function ($route) {

                        console.log("homecontroller")
                        console.log($route)
                        console.log(templateUrl)
                    }
                }

            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requiredBase: false
            //now no more # required before routes
        })

    })





}())