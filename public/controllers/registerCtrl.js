(function(){

    var app = angular.module('registerController',[])
    app.config(function(){

        console.log("Register Controller Loaded")
    })

    app.controller('registerCtrl', function($scope){
 
        this.regUser=function(regData){
            console.log("gello");
            console.log(this.regData)
        }

    })

}());