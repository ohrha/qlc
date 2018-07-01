(function(){

    var app = angular.module('registerController',['userServices'])
    app.config(function(){

        console.log("Register Controller Loaded")
    })

    app.controller('registerCtrl', function($scope,$http,$location,User,$timeout){
        $scope.successReg = false;
        $scope.failReg = false;
       $scope.errorMsg = false;
        $scope.successMsg = false;

        this.regUser=function(regData,valid,regForm){
           
            if(valid){
                console.log(this.regData)
                if(this.regData.userclass == 1){
                this.regData.userclass = "client"

                }
                if(this.regData.userclass == 2){
                    this.regData.userclass = "employee"
                }
                $scope.loading= true;
                User.create(this.regData).then(function(data){
                    console.log(data.data)
                    if(data.data.success){
                        $scope.loading = false;
                        $scope.successReg = true;
                        console.log(this.successReg)
                        $scope.successMsg = data.data.message;
                        $timeout(function(){
                            $scope.successReg = false;
                            $scope.successMsg = false;
                            $location.path('/login');
                        },3000)
                    }else{
                        $scope.loading = false;
                        $scope.failReg = true;
                        $scope.errorMsg = data.data.message;
                        console.log($scope.failReg,$scope.errorMsg)
                        setTimeout(function(){
                            $scope.failReg = false;
                            $scope.errorMsg = false;
                            console.log($scope.failReg)
                        },3000)
                    }
                })
            }else{
                console.log("Incomplete form..")
            }
        }

    })

}());