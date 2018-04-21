(function(){

    var app = angular.module('registerController',[])
    app.config(function(){

        console.log("Register Controller Loaded")
    })

    app.controller('registerCtrl', function($scope){
 
        
        this.regUser=function(regData,valid,regForm){
            console.log("gello");
            console.log(valid)
            console.log(this.regData)
            console.log(regForm)
        }

    })

}());