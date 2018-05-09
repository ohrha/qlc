(function () {

    var app = angular.module('calanderController', ['userServices'])
    app.config(function () {

        console.log("calander Controller Loaded")
    })

    app.controller('calanderCtrl', function ($scope, Auth,$timeout,$location,$routeParams,User) {
       
        $scope.available = false;
        $scope.isSwitchedOn = true;
document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
});
        ////console.log(document.getElementById("switch").checked)
        //console.log(document.getElementById("switch").prop)
        console.log($routeParams)
        $('#switch').prop('checked', true);
            $scope.getSwitchValue = function() {
      alert(angular.element('#my-switch').prop('checked'));
    };  

        $scope.availabilityChanger = function(){

            if($scope.isSwitchedOn){
                $scope.available = false;
                console.log($scope.available)
                User.changeAvailability($routeParams.userid,$routeParams.month,$routeParams.date,"false").then(function(data){
                    console.log(data)
                    $scope.isSwitchedOn = false;
                })

            }else{
                $scope.available = true;
                console.log($scope.available)
                User.changeAvailability($routeParams.userid,$routeParams.month,$routeParams.date,"true").then(function(data){
                    console.log(data)
                    $scope.isSwitcheOn = true;
                })
            }


        }
    })

}());