(function () {

    var app = angular.module('mainController', ['authServices', 'userServices', 'payperiodServices'])
    app.config(function () {

        console.log("Main Controller Loaded")
    })

    app.controller('mainCtrl', function ($scope, Auth, $timeout, $location, User, $rootScope, AuthToken, PayPeriod) {

        $scope.userClass = "";
        $scope.date = 25;
        $scope.month = 11;
        $scope.monthName = "November"
        $scope.booked = true;
        $scope.day = ""
        $scope.iterator = 0;
        $scope.payperiod = 47;

        $scope.jobDetails = [];
        $rootScope.payPeriodIcon = false;

        $scope.logout = function () {
            Auth.logout();
            $location.path('/')
            $rootScope.payPeriodIcon = false;
        }

        $scope.addPayPeriod = function () {
            $scope.payPeriod = {};


        }
        PayPeriod.getAllPayPeriods().then(function(data){
            console.log(data)
        })
        $scope.addJobDetails = function () {



            $scope.iterator++
           // $scope.day = "Monday"



            if ($scope.iterator < 8) {
                if($scope.date == 30){
                    $scope.date = 1
 if($scope.monthName == ""){
                        $scope.monthName = "January"
                    }else if($scope.monthName == "January"){
                        $scope.monthName = "February"
                        console.log($scope.monthName)
                    }else if ($scope.monthName == "February"){
                        $scope.monthName ="March"

                    }else if ($scope.monthName == "March"){
                        $scope.monthName ="April"

                    }else if ($scope.monthName == "April"){
                        $scope.monthName = "May"

                    }else if ($scope.monthName == "May"){
                        $scope.monthName ="June"

                    }else if($scope.monthName == "June"){
                        $scope.monthName ="July"

                    }else if($scope.monthName == "July"){
                        $scope.monthName = "August"

                    }else if($scope.monthName == "August"){
                        $scope.monthName = "September"

                    }else if($scope.monthName == "September"){
                        $scope.monthName ="October"

                    }else if($scope.monthName == "October"){
                        $scope.monthName = "November"

                    }else if($scope.monthName == "November"){
                        $scope.monthName = "December"

                    }else if($scope.monthName == "December"){
                        $scope.monthName = "January"

                    }
                    $scope.month++
        
                }else{
                    $scope.date++;
                }
                
                if($scope.day == ""){
                    $scope.day = "Monday";
                }else if( $scope.day =="Monday"){
                    $scope.day = "Tuesday";
                }else if( $scope.day == "Tuesday"){
                    $scope.day = "Wednesday"
                }else if ( $scope.day == "Wednesday"){
                    $scope.day = "Thursday"
                }else if ($scope.day == "Thursday"){
                    $scope.day = "Friday"
                }else if ( $scope.day == "Friday"){
                    $scope.day = "Saturday"
                }else if ($scope.day == "Saturday"){
                    $scope.day = "Sunday"
                }else if ($scope.day == "Sunday"){
                    $scope.day = "Monday"
                }
                   
                console.log($scope.date)
                $scope.fulldate = $scope.month +"/"+ $scope.date + "/18"
            
                console.log($scope.fulldate)
                $scope.jobDetails.push(

                    {

                        date: $scope.fulldate,
                        dateNum: $scope.date,
                        day: $scope.day,
                        location: "ASB SHOWGROUNDS",
                        contractor: "Carlton Events",
                        supervisor: "Stoves",
                        timesheetSubmitted: true,
                        timeout: "6:00pm",
                        timein: "6:00am"
                    }

                )
                console.log($scope.jobDetails)

            } else {
                
                $scope.payperiod++
                $scope.payPeriod = {

                }
                $scope.payPeriod.booked = $scope.booked;
                $scope.payPeriod.payperiod = $scope.payperiod
                $scope.payPeriod.jobDetails = $scope.jobDetails
                $scope.payPeriod.month = $scope.monthName;
                $scope.payPeriod.monthNum = $scope.month;
                //$scope.payPeriod.date = $scope.date;

                PayPeriod.createPayPeriod($scope.payPeriod).then(function(data){
                    $scope.iterator = 0;
                    $scope.jobDetails = [];
                    console.log(data)
                })

                console.log($scope.payPeriod)
                console.log("new week")
            }

            //$scope.payPeriod.number = $scope.


        }

        /*PayPeriod.createPayPeriod().then(function(data){



        })*/
        Auth.getUser().then(function (data) {
            console.log(data)
            $rootScope.userClass = data.data.userclass;

            console.log($rootScope.userClass)
        })
        User.getUserClass().then(function (data) {

            console.log(data)

        })
        $rootScope.$on('$routeChangeStart', function () {

            console.log(Auth.isLoggedIn())
            console.log(AuthToken.getToken())
            $rootScope.loggedIn = Auth.isLoggedIn()
                Auth.getUser().then(function (data) {
            console.log(data)
            $rootScope.payPeriod = data.data.payperiod;

            console.log($rootScope.userClass)
        })
        })

    })

}());