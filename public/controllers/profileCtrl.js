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
        $scope.availability
        $scope.availability = 2;
        $scope.userObject = {};
        $scope.calander = [[], [], []];
        $scope.june1 = false;
        $scope.june2 = false;
        $scope.june3 = false;
        $scope.june4 = false;
        $scope.june5 = false;
        $scope.june6 = false;
        $scope.june7 = false;
        $scope.june8 = false;
        $scope.june9 = false;
        $scope.june10 = false;
        $scope.june11 = false;
        $scope.june12 = false;
        $scope.june13 = false;
        $scope.june14 = false;
        $scope.june15 = false;
        $scope.june16 = false;
        $scope.june17 = false;
        $scope.june18 = false;
        console.log($routeParams)
        User.getUser($routeParams.userid).then(function (data) {

            console.log(data)
            $scope.name = data.data.user.name;
            $scope.userObject = data.data.user;
            //$scope.userObject
            for (var i = 0; i < data.data.user.june.length; i++) {
                
                   /*  if (data.data.user.june[2] === true) {
                        $scope.june3 = true;
                    }
                    if (data.data.user.june[3] === true) {
                        $scope.june4 = true;
                    }
                    if (data.data.user.june[4] === true) {
                        $scope.june5 = true;
                    }
                    if (data.data.user.june[5] === true) {
                        $scope.june6 = true;
                    }
                    if (data.data.user.june[6] === true) {
                        $scope.june7 = true;
                    }
                    if (data.data.user.june[7] === true) {
                        $scope.june8 = true;
                    }
                    if (data.data.user.june[8] === true) {
                        $scope.june9 = true;
                    }
                    if (data.data.user.june[9] === true) {
                        $scope.june110 = true;
                    }
                    if (data.data.user.june[10] === true) {
                        $scope.june11 = true;
                    }
                    if (data.data.user.june[11] === true) {
                        $scope.june12 = true;
                    }
                    if (data.data.user.june[12] === true) {
                        $scope.june13 = true;
                    }
                    if (data.data.user.june[13] === true) {
                        $scope.june14 = true;
                    }
                    if (data.data.user.june[14] === true) {
                        $scope.june15 = true;
                    }
                    if (data.data.user.june[15] === true) {
                        $scope.june16 = true;
                    }
                    if (data.data.user.june[16] === true) {
                        $scope.june17 = true;
                    }
                    if (data.data.user.june[17] === true) {
                        $scope.june18 = true;
                    }*/
                if (i < 8)
                    $scope.calander[0].push(data.data.user.june[i])
          

                if (i > 8) {
                    $scope.calander[1].push(data.data.user.june[i])
                } if (i > 16) {
                    $scope.calander[2].push(data.data.user.june[i])
                }

            }
            for(var i =0; i< $scope.calander[0].length;i++){

                    if ($scope.calander[0][0] === true) {
                        $scope.june1 = true;
                        console.log($scope.calander[0][i])
                    }
                    if ($scope.calander[0][1] === true) {
                        $scope.june2 = true;
                        console.log(data.data.user.june[1])
                    }
                    if ($scope.calander[0][1] === true) {
                        $scope.june2 = true;
                        console.log(data.data.user.june[1])
                    } 
                                        if ($scope.calander[0][1] === true) {
                        $scope.june2 = true;
                        console.log(data.data.user.june[1])
                    } 
                                        if ($scope.calander[0][1] === true) {
                        $scope.june2 = true;
                        console.log(data.data.user.june[1])
                    } 
                                        if ($scope.calander[0][1] === true) {
                        $scope.june2 = true;
                        console.log(data.data.user.june[1])
                    } 
                                        if ($scope.calander[0][1] === true) {
                        $scope.june2 = true;
                        console.log(data.data.user.june[1])
                    } 
                     
            }
            //$scope.calander.push(data.data.user.june);
            console.log($scope.calander)
            console.log($scope.calander[0])
            console.log($scope.calander[1])
            console.log($scope.calander[2])
        })
        
        $scope.areYouAvailable = function () {
            if ($scope.availability == 1) {

                $scope.availability = 2;
                console.log($scope.availability)
            } else if ($scope.availability == 2) {
                $scope.availability = 3;
                console.log($scope.availability)

            } else if ($scope.availability == 3) {
                $scope.availability = 1;
                console.log($scope.availability)

            }
        }
        $scope.previousMonth = function () {

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
            else if ($scope.monthPosition === 4) {

                $scope.currentMonth = "MARCH";
                $scope.monthPosition = 3
            }
            else if ($scope.monthPosition === 3) {
                $scope.currentMonth = "FEBRUARY";
                $scope.monthPosition = 2

            }
            else {
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
            else {


            }

        }
    })




}())