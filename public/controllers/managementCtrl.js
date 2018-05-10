(function () {

    var app = angular.module('managementController', ['authServices'])
    app.config(function () {

        console.log("Management Controller Loaded")
    })

    app.controller('managementCtrl', function ($scope, Auth,$timeout,$location,User) {
        $scope.managementPage = true;
        $scope.clientsPage = false;
        $scope.employeesPage = false;
        $scope.employees = [];

        User.getUsers().then(function(data){
            console.log(data)
            $scope.employees = data.data.users;
        })
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
                $scope.clientsPage = false;
                $scope.managementPage = false;
            }

        }


    })

}());