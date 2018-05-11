(function () {

    var app = angular.module('managementController', ['authServices'])
    app.config(function () {

        console.log("Management Controller Loaded")
    })

    app.controller('managementCtrl', function ($scope, Auth,$timeout,$location,User) {
        $scope.managementPage = true;
        $scope.clientsPage = false;
        $scope.employeesPage = false;
        $scope.userFilePage = false;
        $scope.openIssue = false;
        $scope.closeIssue = false;
        $scope.currentUserFile = "";
        $scope.employees = [];
        $scope.jobDetails = [];
        console.log($scope.jobDetails)

        User.getUsers().then(function(data){
            console.log(data)
            $scope.employees = data.data.users;
            $scope.jobDetails = data.data.users.jobDetails;
            for(var i = 0; i < data.data.users.length; i++){
                if(data.data.users[i].name == $scope.currentUserFile){
                    data.data.users[i].jobDetails = $scope.jobDetails;
                }
            }
            console.log($scope.jobDetails)
        })
        $scope.openCloseIssue= function(){
            console.log($scope.openIssue)

            if(!$scope.openIssue){
                $scope.openIssue = true
                $scope.closeIssue = false;
            }else{
                $scope.openIssue = false
                $scope.closeIssue = true;
            }
        }

        $scope.openManagementPage = function(){

            
                $scope.managementPage = true;
                $scope.employeesPage = false;
                $scope.clientsPage = false;
            

        }
        $scope.openClientsPage = function(){

            console.log("clicked")
            console.log($scope.clientsPage)
            if($scope.clientsPage){

                $scope.clientsPage = false;
                
            }else{
                $scope.clientsPage = true;
                $scope.employeesPage = false;
                $scope.managementPage = false;
            }

        }
        $scope.openEmployeesPage = function(){
                        console.log("clicked")
                        console.log($scope.employeesPage)

            
            if($scope.employeesPage){

                $scope.employeesPage = false;

            }else{
                $scope.employeesPage = true;
                $scope.currentUserFile = "";
                $scope.clientsPage = false;
                $scope.managementPage = false;
            }

        }
        $scope.openUserFile=function(name){
            $scope.currentUserFile = name;
                   User.getUsers().then(function(data){
            console.log(data)
           // $scope.employees = data.data.users;
            //$scope.jobDetails = data.data.users.jobDetails;
            for(var i = 0; i < data.data.users.length; i++){
                if(data.data.users[i].name == $scope.currentUserFile){
                   $scope.jobDetails=data.data.users[i].jobDetails ;
                   console.log(data.data.users[i].name)
                   console.log(data.data.users[i].jobDetails)
                }
            }
            console.log($scope.jobDetails)
        })
            console.log(name);
            console.log("Curent User",$scope.currentUserFile)
            if(!$scope.userFilePage && $scope.currentUserFile == name){
                $scope.userFilePage = true;
            }else if(!$scope.userFilePage && $scope.currentUserFile == name){
                $scope.userFilePage = true;
            }else if($scope.userFilePage && $scope.currentUserFile == name){
                $scope.userFilePage = true;
            }else if($scope.userFilePage && $scope.currentUserFile !== name){
                $scope.currentUserFile = name;
                $scope.userFilePage = true;
            }
        }

    })

}());