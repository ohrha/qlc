(function () {


    var app = angular.module('profileController', ['userServices'])
    app.config(function () {

        console.log("Profile Controller Loaded")
    })

    app.controller('profileCtrl', function ($scope, User, $routeParams) {
        $scope.$on('$routeChangeSuccess', function () {
            $('.carousel').carousel();
        });
        $scope.name = "";
        $scope.monthPosition = 1;
        $scope.currentMonth = "JANUARY";
        $scope.availability = 2;

        console.log($routeParams)
        User.getUser($routeParams.userid).then(function (data) {

            console.log(data)
            $scope.name = data.data.user.name;

        })
        $scope.areYouAvailable = function(){
            if($scope.availability == 1){

                $scope.availability = 2;
                console.log($scope.availability)
            }else if($scope.availability == 2){
                $scope.availability = 3;
                console.log($scope.availability)

            }else if($scope.availability == 3){
                $scope.availability = 1;
                console.log($scope.availability)

            }
        }
        $scope.previousMonth = function(){

            if ($scope.monthPosition === 1) {
                console.log("hello")
                $scope.currentMonth = "DECEMBER";
                $scope.monthPosition = 12
            }
            else if ($scope.monthPosition === 12) {
                $scope.currentMonth = "NOVEMBER";
                $scope.monthPosition = 11
            }
            else if ($scope.monthPosition === 11) {
                $scope.currentMonth = "OCTOBER";
                $scope.monthPosition = 10

            }
            else if ($scope.monthPosition === 10) {
                $scope.currentMonth = "SEPTEMBER";
                $scope.monthPosition = 9

            }
            else if ($scope.monthPosition === 9) {
                $scope.currentMonth = "AUGUST";
                $scope.monthPosition = 8

            }
            else if ($scope.monthPosition === 8) {
                $scope.currentMonth = "JULY";
                $scope.monthPosition = 7

            }
            else if ($scope.monthPosition === 7) {
                $scope.currentMonth = "JUNE";
                $scope.monthPosition = 6

            }
            else if ($scope.monthPosition === 6) {
                $scope.currentMonth = "MAY";
                $scope.monthPosition = 5

            }
           else if ($scope.monthPosition === 5) {
                $scope.currentMonth = "APRIL";
                $scope.monthPosition = 4

            }
           else  if ($scope.monthPosition === 4) {

                $scope.currentMonth = "MARCH";
                $scope.monthPosition = 3
            }
            else if ($scope.monthPosition === 3) {
                $scope.currentMonth = "FEBRUARY";
                $scope.monthPosition = 2

            }
            else  {
               $scope.currentMonth = "JANUARY";
               $scope.monthPosition = 1
               console.log($scope.monthPosition)

            }
        }
        $scope.nextMonth = function () {

            if ($scope.monthPosition == 1) {
                $scope.currentMonth = "FEBRUARY";
                $scope.monthPosition = 2
            }
            else if ($scope.monthPosition === 2) {
                $scope.currentMonth = "MARCH";
                $scope.monthPosition = 3
            }
            else if ($scope.monthPosition === 3) {
                $scope.currentMonth = "APRIL";
                $scope.monthPosition = 4

            }
            else if ($scope.monthPosition === 4) {
                $scope.currentMonth = "MAY";
                $scope.monthPosition = 5

            }
            else if ($scope.monthPosition === 5) {
                $scope.currentMonth = "JUNE";
                $scope.monthPosition = 6

            }
            else if ($scope.monthPosition === 6) {
                $scope.currentMonth = "JULY";
                $scope.monthPosition = 7

            }
            else if ($scope.monthPosition === 7) {
                $scope.currentMonth = "AUGUST";
                $scope.monthPosition = 8
            }
            else if ($scope.monthPosition === 8) {
                $scope.currentMonth = "SEPTEMBER";
                $scope.monthPosition = 9

            }
            else if ($scope.monthPosition === 9) {
                $scope.currentMonth = "OCTOBER";
                $scope.monthPosition = 10

            }
            else if ($scope.monthPosition === 10) {

                $scope.currentMonth = "NOVEMBER";
                $scope.monthPosition = 11
            }
            else if ($scope.monthPosition === 11) {
                $scope.currentMonth = "DECEMBER";
                $scope.monthPosition = 12

            }
            else  {
               

            }

        }
    })




}())