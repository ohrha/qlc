(function(){

    var app = angular.module('homeController',[])
    app.config(function(){

        console.log("Home Controller Loaded")
    })

    app.controller('homeCtrl', function(){
        console.log("hello from homeCtrl")

    })

}());