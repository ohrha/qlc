(function () {


    var app = angular.module('profileController', ['userServices'])
    app.config(function () {

        console.log("Profile Controller Loaded")
    })

    app.controller('profileCtrl', function ($scope, User, $routeParams, Auth, $timeout, $window,$rootScope) {
        $scope.$on('$routeChangeSuccess', function () {
            $('.carousel').carousel();
        });
        $scope.name = "";
        $scope.userClass = "";
        $scope.userToken = "";
        $scope.currentJobInDate = 0;
        $scope.test = "tes"
        $scope.monthPosition = 1;
        $scope.currentMonth = "JANUARY";
        $scope.availability
        $scope.availability = 2;
        $scope.userObject = {};
        $scope.user_id = "";
        $scope.calander = [[], [], []];
        $scope.june1 = false;
        $scope.june1Booked = false;

        $scope.june2 = false;
        $scope.june2Booked = false;
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
        $scope.historyEntryOpen = true;
        $scope.messagesArray = []
        $scope.messagesPaginated = [];
        $scope.currentusernameArray =[];
        $scope.employeeJobDetails = {};
        $scope.jobData = {};
        $scope.messagePageOpen = false;
        $scope.messagePageSelected = false;
        $scope.messagesLoading = false;
        $scope.messageOpen = true;
        $scope.areYouSure = false;
        $scope.addHoursPageOpen = false;
        $scope.timeData = {};
        $scope.currentIndex = null;
        $scope.page = 0;
           $scope.date = new Date();
        $scope.dateNow = $scope.date.getDate()
         $scope.month = $scope.date.getMonth() + 1;
        $scope.showChart = true;
        //$scope.individualPayPeriodOpen = false;
        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.labels2 = ["January", "February", "March", "April", "May", "June", "July"];

        $scope.series = ['Series A'];
        $scope.data = [
            [0, 0, 0, 81, 56, 55, 40]

        ];
        $scope.data2 = [
            [0, 0, 0, 81, 56, 55, 40]

        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        console.log($routeParams)




        setTimeout(function () {

            //$('.tap-target').tapTarget('open');
            $('select').material_select();

        }, 15000);
        $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        $scope.options = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    }
                ]
            }
        }

        if ($window.localStorage.getItem('token')) {

            $scope.userToken = $window.localStorage.getItem('token');
            Auth.getUser($scope.userToken).then(function (data) {
                console.log(data)
                $scope.userClass = data.data.userclass;
                $scope.userPayPeriod = data.data.payperiod

                if ($scope.userClass = "admin") {

                    if ($scope.month == 1) {
                        if ($scope.dateNow == 1 || 2 || 3 || 4 || 5 || 6 || 7) {

                            $rootScope.payPeriod = 1;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)

                        }
                        if ($scope.dateNow == 8 || 9 || 10 || 11 || 12 || 13 || 14) {

                            $rootScope.payPeriod = 2;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 15 || 16 || 17 || 18 || 19 || 20 || 21) {

                            $rootScope.payPeriod = 3;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 22 || 23 || 24 || 25 || 26 || 27 || 28) {

                            $rootScope.payPeriod = 4;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 29 || 30 || 31) {

                            $rootScope.payPeriod = 5;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                    }
                    if ($scope.month == 2) {

                        if ($scope.dateNow == 1 || 2 || 3 || 4) {

                            $rootScope.payPeriod = 5;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)

                        }
                        if ($scope.dateNow == 5 || 6 || 7 || 8 || 9 || 10 || 11) {

                            $rootScope.payPeriod = 6;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 12 || 13 || 14 || 15 || 16 || 17 || 18) {

                            $rootScope.payPeriod = 7;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 19 || 20 || 21 || 22 || 23 || 24 || 25) {

                            $rootScope.payPeriod = 8;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 26 || 27 || 28) {

                            $rootScope.payPeriod = 9;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                    }
                    if ($scope.month == 3) {
                        if ($scope.dateNow == 1 || 2 || 3 || 4) {

                            $rootScope.payPeriod = 9;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)

                        }
                        if ($scope.dateNow == 5 || 6 || 7 || 8 || 9 || 10 || 11) {

                            $rootScope.payPeriod = 10;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 12 || 13 || 14 || 15 || 16 || 17 || 18) {

                            $rootScope.payPeriod = 11;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 19 || 20 || 21 || 22 || 23 || 24 || 25) {

                            $rootScope.payPeriod = 12;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 26 || 27 || 28 || 29 || 30 || 31) {

                            $rootScope.payPeriod = 13;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                    }
                    if ($scope.month == 4) {
                        if ($scope.dateNow == 1) {

                            $rootScope.payPeriod = 13;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)

                        }
                        if ($scope.dateNow == 2 || 3 || 4 || 5 || 6 || 7 || 8) {

                            $rootScope.payPeriod = 14;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 9 || 10 || 11 || 12 || 13 || 14 || 15) {

                            $rootScope.payPeriod = 15;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 16 || 17 || 18 || 19 || 20 || 21 || 22) {

                            $rootScope.payPeriod = 16;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 24 || 25 || 26 || 27 || 28 || 29 || 30) {

                            $rootScope.payPeriod = 18;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                    }
                    if ($scope.month == 5) {
                        if ($scope.dateNow == 1 || 2 || 3 || 4 || 5 || 6 || 7) {

                            $rootScope.payPeriod = 19;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)

                        }
                        if ($scope.dateNow == 8 || 9 || 10 || 11 || 12 || 13 || 14) {

                            $rootScope.payPeriod = 20;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 15 || 16 || 17 || 18 || 19 || 20 || 21) {

                            $rootScope.payPeriod = 21;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 22 || 23 || 24 || 25 || 26 || 27 || 28) {

                            $rootScope.payPeriod = 22;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 28 || 29 || 30 || 31) {

                            $rootScope.payPeriod = 1;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                    }
                    if ($scope.month == 6) {

                        if ($scope.dateNow == 1 || $scope.dateNow == 2 || $scope.dateNow == 3) {

                            $rootScope.payPeriod = 1;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)

                        }
                        if ($scope.dateNow == 4 || $scope.dateNow == 5 || $scope.dateNow == 6 || $scope.dateNow == 7 || $scope.dateNow == 8 || $scope.dateNow == 9 || $scope.dateNow == 10) {

                            $rootScope.payPeriod = 2;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)
                            $scope.newPPObject = {}
                            $scope.newPPObject.newpayperiod = $rootScope.payPeriod;
                            /* User.getUsers().then(function(data){
                                 for(var z= 0; z< data.data.users.length;z++){
                                     for(var d = 0; d< data.data.users[z].length; d++){
             
                                     }
                                 }
                             })
                             */
                            /*
                            User.changeUserPayPeriod($scope.newPPObject).then(function (data) {
                                console.log(data)
                                if (data.data.success) {
                                    $scope.payPeriodUpdated = true;
                                    //$timeout(function(){
                                    //    $scope.payPeriodUpdated = false;
                                    //},)
                                }
                            })
                            */

                        }
                        if ($scope.dateNow == 11 || $scope.dateNow == 12 || $scope.dateNow == 13 || $scope.dateNow == 14 || $scope.dateNow == 15 || $scope.dateNow == 16 || $scope.dateNow == 17) {

                            $rootScope.payPeriod = 3;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)

                            $scope.newPPObject = {}
                            $scope.newPPObject.newpayperiod = $rootScope.payPeriod;


                        }
                        if ($scope.dateNow == 18 || $scope.dateNow == 19 || $scope.dateNow == 20 || $scope.dateNow == 21 || $scope.dateNow == 22 || $scope.dateNow == 23 || $scope.dateNow == 24) {
  $scope.newPPObject = {}
                                $scope.newPPObject.newpayperiod = $rootScope.payPeriod;
                            $rootScope.payPeriod = 4;
                            if ($scope.userPayPeriod !== $rootScope.payPeriod) {
                                $scope.userPayPeriod = $rootScope.payPeriod
                                console.log("$rootScope.payPeriod", $rootScope.payPeriod)
                                   User.getUsers().then(function (data) {
            console.log(data.data.users.length)
                 for (var i = 0; i < data.data.users.length; i++) {
              
              
                    $scope.newPPObject.newpayperiod = $rootScope.payPeriod
                    $scope.newPPObject.currentusername = data.data.users[i].name
                    
                    $scope.currentusernameArray.push(data.data.users[i].name)
                    $scope.newPPObject.currentusernamearray = $scope.currentusernameArray                 // $scope.newPayPeriodObject.lootch = $scope.employees[i].name


                       // console.log( $scope.newPayPeriodObject)

           
               // }
            }


    

 
                                User.changeUserPayPeriod($scope.newPPObject).then(function (data) {

                                    console.log(data)
                                    $scope.addPayPeriodToPayPeriodHistory();
                                 

                                })

        })
                             

                            }else{

                                console.log("Pay Periods Match")

                            }



                        }
                        if ($scope.dateNow == 25 || $scope.dateNow == 26 || $scope.dateNow == 27 || $scope.dateNow == 28 || $scope.dateNow == 39 || $scope.dateNow == 30) {

                            $rootScope.payPeriod = 5;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                    }
                    if ($scope.month == 7) {
                        if ($scope.dateNow == 1) {

                            $rootScope.payPeriod = 5;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)

                        }
                        if ($scope.dateNow == 2 || 3 || 4 || 5 || 6 || 7 || 8) {

                            $rootScope.payPeriod = 6;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 9 || 10 || 11 || 12 || 13 || 14 || 15) {

                            $rootScope.payPeriod = 7;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 16 || 17 || 18 || 19 || 20 || 21 || 22) {

                            $rootScope.payPeriod = 8;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 23 || 24 || 25 || 26 || 27 || 28 || 29) {

                            $rootScope.payPeriod = 9;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 30 || 31) {

                            $rootScope.payPeriod = 10;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                    }
                    if ($scope.month == 8) {
                        if ($scope.dateNow == 1 || 2 || 3 || 4 || 5) {

                            $rootScope.payPeriod = 10;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)

                        }
                        if ($scope.dateNow == 6 || 7 || 8 || 9 || 10 || 11 || 12) {

                            $rootScope.payPeriod = 11;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 13 || 14 || 15 || 16 || 17 || 18 || 19) {

                            $rootScope.payPeriod = 12;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 20 || 21 || 22 || 23 || 24 || 25 || 26) {

                            $rootScope.payPeriod = 13;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 27 || 28 || 29 || 30 || 31) {

                            $rootScope.payPeriod = 14;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                    }
                    if ($scope.month == 9) {
                        if ($scope.dateNow == 1 || 2) {

                            $rootScope.payPeriod = 15;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)

                        }
                        if ($scope.dateNow == 3 || 4 || 5 || 6 || 7 || 8 || 9) {

                            $rootScope.payPeriod = 16;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 10 || 11 || 12 || 13 || 14 || 15 || 16) {

                            $rootScope.payPeriod = 17;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 17 || 18 || 19 || 20 || 21 || 22 || 23) {

                            $rootScope.payPeriod = 18;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 24 || 25 || 26 || 27 || 28 || 29 || 30) {

                            $rootScope.payPeriod = 19;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                    }
                    if ($scope.month == 10) {
                        if ($scope.dateNow == 1 || 2 || 3 || 4 || 5 || 6 || 7) {

                            $rootScope.payPeriod = 20;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)

                        }
                        if ($scope.dateNow == 8 || 9 || 10 || 11 || 12 || 13 || 14) {

                            $rootScope.payPeriod = 21;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 15 || 16 || 17 || 18 || 19 || 20 || 21) {

                            $rootScope.payPeriod = 22;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 22 || 23 || 24 || 25 || 26 || 27 || 28) {

                            $rootScope.payPeriod = 23;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 29 || 30 || 31) {

                            $rootScope.payPeriod = 24;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                    }
                    if ($scope.month == 11) {
                        if ($scope.dateNow == 1 || 2 || 3 || 4) {

                            $rootScope.payPeriod = 24;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)

                        }
                        if ($scope.dateNow == 5 || 6 || 7 || 8 || 9 || 10 || 11) {

                            $rootScope.payPeriod = 25;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 12 || 13 || 14 || 15 || 16 || 17 || 18) {

                            $rootScope.payPeriod = 26;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 19 || 20 || 21 || 22 || 23 || 24 || 25) {

                            $rootScope.payPeriod = 27;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 26 || 27 || 28 || 29 || 30) {

                            $rootScope.payPeriod = 28;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                    }
                    if ($scope.month == 12) {
                        if ($scope.dateNow == 1 || 2) {

                            $rootScope.payPeriod = 29;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)

                        }
                        if ($scope.dateNow == 3 || 4 || 5 || 6 || 7 || 8 || 9) {

                            $rootScope.payPeriod = 30;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 10 || 11 || 12 || 13 || 14 || 15 || 16) {

                            $rootScope.payPeriod = 31;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 17 || 18 || 19 || 20 || 21 || 22 || 23) {

                            $rootScope.payPeriod = 32;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                        if ($scope.dateNow == 24 || 25 || 26 || 27 || 28 || 29 || 30) {

                            $rootScope.payPeriod = 33;
                            console.log("$rootScope.payPeriod", $rootScope.payPeriod)


                        }
                    }

                }



            })

        } else {
            console.log("Not Logged In")
        }

        Auth.getUser().then(function (data) {
            console.log(data)
            $scope.name = data.data.name;
            $scope.user_id = $routeParams.userid
            console.log($scope.user_id)
        })
           $scope.addPayPeriodToPayPeriodHistory = function () {
                                       // console.log(details)
                                        $scope.employeeJobDetails.payperiod = $rootScope.payPeriod;
                                        $scope.allEmployeesJobDetails = []
                                        User.getUsers().then(function (data) {

                                            for (var d = 0; d < data.data.users.length; d++) {

                                                for (var k = 0; k < data.data.users[d].payperiods.length; k++) {

                                                    if (data.data.users[d].payperiods[0].payperiodnum == $rootScope.payPeriod) {


                                                        $scope.nameObject = {}
                                                        $scope.nameObject.name = data.data.users[d].name
                                                        data.data.users[d].payperiods[0].jobDetails.push($scope.nameObject)
                                                        $scope.allEmployeesJobDetails.push(data.data.users[d].payperiods[0].jobDetails)
                                                    }

                                                }
                                                $scope.employeeJobDetails.allEmployeesJobDetails = $scope.allEmployeesJobDetails;
                                                console.log($scope.allEmployeesJobDetails)
                                                $scope.payPeriodHistory = data.data.users[d].payperiodhistory
                                                console.log($scope.payPeriodHistory)
                                                for (var z = 0; z < $scope.employeeJobDetails.allEmployeesJobDetails.length; z++) {
                                                    //$scope.data

                                                    // $scope.data[0][b]= hoursIterator;
                                                    for (var x = 0; x < $scope.employeeJobDetails.allEmployeesJobDetails[z].length; x++) {

                                                        for (var y = 0; y < $scope.employeeJobDetails.allEmployeesJobDetails[z][x].length; y++) {
                                                            console.log($scope.employeeJobDetails.allEmployeesJobDetails[z][x][y])
                                                            if ($scope.employeeJobDetails.allEmployeesJobDetails[z][x][y].timeSheetSubmitted) {


                                                                var startTime = moment($scope.employeeJobDetails.allEmployeesJobDetails[z][x][y].timein, "HH:mm:ss a");
                                                                var endTime = moment($scope.employeeJobDetails.allEmployeesJobDetails[z][x][y].timeout, "HH:mm:ss a");
                                                                var duration = moment.duration(endTime.diff(startTime));
                                                                var hours = parseInt(duration.asHours());
                                                                var minutes = parseInt(duration.asMinutes()) - hours * 60;
                                                                console.log(hours)
                                                                console.log(minutes)


                                                                if (minutes == 15) {
                                                                    hours + .25
                                                                    minIterator = 0;
                                                                }
                                                                if (minutes == 30) {
                                                                    hours + .30
                                                                }
                                                                if (minutes == 45) {
                                                                    hours + .75
                                                                }

                                                                $scope.employeeJobDetails.allEmployeesJobDetails[z][x][y].hoursCalculated = hours + minutes;


                                                            } else {

                                                                $scope.employeeJobDetails.allEmployeesJobDetails[z][x][y].hoursCalculated = 0;
                                                                $scope.employeeJobDetails.allEmployeesJobDetails[z][x][y].datebooked = false;

                                                            }


                                                        }
                                                    }


                                                }

                                                //console.log($scope.employeeJobDetails)


                                            }

                                            User.addPayPeriodToPayPeriodHistory($scope.employeeJobDetails).then(function (data) {

                                                console.log(data)
                                            })

                                        })



                                    }
        $scope.openMessage = function (index, timesheetData) {
            console.log(index)
            console.log(timesheetData)
            $('select').material_select();

            if ($scope.messageOpen && index !== $scope.currentIndex
            ) {
                // $scope.individualPayPeriodOpen = false;
                $scope.messageLoading = true;
                $scope.currentIndex = index;

                        User.changeMessageToRead($scope.name,$scope.currentIndex).then(function(data){
                             console.log(data)
                               $scope.pageLimit = 4;
                               $scope.messagesPaginated = [];
                               $scope.messageForPagination = [];
                            $scope.messagesArray= data.data.user.comments;
                             for (var i = 0; i <= $scope.messagesArray.length; i++) {

                    var page = 0;
                    ////console.log($scope.pageLimit, i, $scope.employees.length)
                    console.log($scope.employees)
                    if (i < $scope.pageLimit) {
                        console.log("its less")

                    }
                    if (i < $scope.messagesArray.length) {
                        console.log("yup,less")
                    }

                    if (i < $scope.pageLimit && i < $scope.messagesArray.length) {//5
                        console.log("HELLO")
                        //console.log($scope.employees[i])
                        //console.log($scope.pageLimit, i, $scope.employees.length)
                        if ($scope.messagesArray[i]) {
                            $scope.messageForPagination.push($scope.messagesArray[i])
                            console.log(i)
                            console.log("firstCondiation")
                            console.log($scope.pageArray)

                        }



                    } else {
                        if (!$scope.usersLoaded) {

                            console.log("else")
                            $scope.loadingUsers = false;
                            $scope.messagesPaginated.push($scope.messageForPagination)
                            console.log($scope.messagesPaginated)
                            $scope.messageForPagination = [];
                            if ($scope.messagesArray[i] !== undefined) {
                                $scope.messageForPagination.push($scope.messagesArray[i])
                            }
                            $scope.pageLimit = $scope.pageLimit + 4;
                            //console.log($scope.pageLimit, i, $scope.employees.length)

                            page++

                        }

                    }

                }

                            $scope.messageLoading = false;
                            //$scope.openMessagePage2();
                         })
                console.log("first")
                // console.log($scope.timesheet)
                console.log($scope.timesheetEntryOpen)

            }


            else if (!$scope.messageOpen && index == $scope.currentIndex) {
                $scope.messageOpen = true;
                console.log("second")
                console.log($scope.timesheetEntryOpen)
                //$scope.curPeriod = index;
            }
            else if (!$scope.messageOpen && index !== $scope.currentIndex) {
                console.log("third")
                $scope.messageOpen = true;
                console.log($scope.timesheetEntryOpen)
                $scope.currentIndex = index;
            } else {
                console.log("last")
                $scope.currentIndex = null

                // $scope.showChart = true;
                //$scope.removeChart = false;
            }
            // },500)
        }
        /*
       $scope.openMessage = function(index,truecondition){

        $scope.currentIndex = index;
        User.changeMessageToRead($scope.name,$scope.currentIndex).then(function(data){
            console.log(data)
           $scope.messagesArray= data.data.user.comments;
           $scope.openMessagePage2();
        })

       }*/
       $scope.closeAddHours = function(){
           $scope.addHoursPageOpen = false;
           
       }
        $scope.openBookedJobsPage = function () {

            if ($scope.bookedJobsSelected) {
                $scope.bookedJobsSelected = false;
                $scope.bookedJobsPageOpened = false;
                ;

            } else {
                console.log("second")
                $scope.bookedJobsSelected = true;
                $scope.complaintsPageOpened = false;
                $scope.bookedJobsPageOpened = true;
                $scope.delinquentTimeSheetSelected = false;
                $scope.historyPageOpenProfile = false;
                $scope.delinquentTimeSheetPageOpened = false;
                $scope.chartsPageOpen = false;
                $scope.addJobPageOpen = false;
                $scope.jobsPageOpen = true
                $scope.complaintsSelected = false;
                $scope.complaintsSelected = false;
                $scope.userDetailsPageOpened = false;
                $scope.payslipGenerationOpen = false;
                $scope.complaintsPageOpened = false;
                $scope.commentsSelected = false;
                $scope.commentsPageOpened = false;
            }
        }
        $scope.openUserFileHistory = function (name, phonenumber) {
            $scope.openJob = 0;
            $scope.historyPageOpenProfile = true;
            $scope.generalHistoryOpen = false;
            $scope.generalHistoryTitle = false;
            $scope.chartsPageOpen = false;
            $scope.loadingPersonalHistory = true;
            $scope.personalHistoryTitle = true;
            $scope.personalHistoryOpen = true;
            $scope.employeeHome = false;
            $scope.searchResults = false;
            $scope.userList = false;
            $scope.employeeListOpen = false;
            $scope.userDetailsPageOpened = true;
            $scope.bookedJobsPageOpened = false;
            $scope.complaintsPageOpened = false;
            $scope.commentsPageOpened = false;
            console.log(phonenumber)
            console.log(name)
            //$scope.currentUserFile = name;
            $scope.currentUserHistoryFile = name;
            $scope.currentUserPhoneNumber = phonenumber;
            $scope.jobDetails = [];
            //$scope.employeesPaginated = [];

            $scope.hoursArrayForHistory = [];
            if ($scope.usersLoaded) {
                User.findUser($scope.currentUserHistoryFile).then(function (data) {

                    $scope.payPeriodHistory = data.data.user[0].payperiodhistory
                    console.log($scope.payPeriodHistory)


                    for (var b = 0; b < $scope.payPeriodHistory.length; b++) {
                        //$scope.data

                        // $scope.data[0][b]= hoursIterator;


                        for (var c = 0; c < $scope.payPeriodHistory[b].entry.length; c++) {
                            $scope.hoursCalcIterator = 0;
                            for (var x = 0; x < $scope.payPeriodHistory[b].entry[x].length; x++) {

                                console.log($scope.payPeriodHistory[b].entry[c])
                                if ($scope.payPeriodHistory[b].entry[c][0] !== undefined) {

                                    $scope.labels[c] = $scope.payPeriodHistory[b].entry[c][0].date
                                    if ($scope.payPeriodHistory[b].entry[c][x + 1] !== undefined) {
                                        console.log("HOlk")
                                        $scope.hoursCalIterator = $scope.payPeriodHistory[b].entry[c][x].hoursCalculated + $scope.payPeriodHistory[b].entry[c][x + 1];
                                        console.log($scope.payPeriodHistory[b].entry[c][x].hoursCalculated + $scope.payPeriodHistory[b].entry[c][x + 1].hoursCalculated)
                                        $scope.data[0][c] = $scope.payPeriodHistory[b].entry[c][x].hoursCalculated + $scope.payPeriodHistory[b].entry[c][x + 1].hoursCalculated;


                                    } else {
                                        console.log("choOlk")
                                        $scope.data[0][c] = $scope.payPeriodHistory[b].entry[c][x].hoursCalculated;

                                    }



                                }

                            }
                            var hoursIterator = 0;
                            var minIterator = 0;
                            //console.log(c,$scope.payPeriodHistory[b].entry.length)
                            // console.log("hoursIteratot",hoursIterator)




                            /*
                                                            var startTime = moment($scope.payPeriodHistory[b].entry[c].timein, "HH:mm:ss a");
                                                            var endTime = moment($scope.payPeriodHistory[b].entry[c].timeout, "HH:mm:ss a");
                                                            var duration = moment.duration(endTime.diff(startTime));
                                                            var hours = parseInt(duration.asHours());
                                                            var minutes = parseInt(duration.asMinutes()) - hours * 60;
                                                            //hoursIterator = hoursIterator + hours;
                                                            //minIterator = minIterator + minutes
                                                            if (minutes == 15) {
                                                                hours + .25
                                                                minIterator = 0;
                                                            }
                                                            if (minutes == 30) {
                                                                hours + .30
                                                            }
                                                            if (minutes == 45) {
                                                                hours + .75
                                                            }*/

                            // console.log(hours, minutes)
                        }

                    }
                    $scope.loadingPersonalHistory = false;

                    //},2000)
                    //$scope.loadingPersonalHistory = false;
                    console.log($scope.payperiods)
                    console.log($scope.currentUserFile)
                    console.log($scope.payPeriodHistory)
                })


            } else {
                User.getUsers().then(function (data) {
                    console.log(data)

                    // $scope.employees = data.data.users;
                    //$scope.jobDetails = data.data.users.jobDetails;
                    for (var i = 0; i < data.data.users.length; i++) {
                        if (data.data.users[i].name == $scope.currentUserHistoryFile) {
                            console.log($scope.currentUserFile)
                            // $scope.jobDetails = data.data.users[i].jobDetails;
                            $scope.comments = data.data.users[i].comments;
                            $scope.payperiods = data.data.users[i].payperiods;
                            $scope.payPeriodHistory = data.data.users[i].payperiodhistory
                            $scope.loadingPersonalHistory = false;
                            console.log($scope.payperiods)
                            console.log($scope.currentUserFile)
                            console.log($scope.payPeriodHistory)

                            for (var b = 0; b < $scope.payPeriodHistory.length; b++) {
                                //$scope.data

                                // $scope.data[0][b]= hoursIterator;

                                for (var c = 0; c < $scope.payPeriodHistory[b].entry.length; c++) {
                                    var hoursIterator = 0;
                                    var minIterator = 0;
                                    //console.log(c,$scope.payPeriodHistory[b].entry.length)
                                    // console.log("hoursIteratot",hoursIterator)



                                    $scope.labels[c] = $scope.payPeriodHistory[b].entry[c].date

                                    var startTime = moment($scope.payPeriodHistory[b].entry[c].timein, "HH:mm:ss a");
                                    var endTime = moment($scope.payPeriodHistory[b].entry[c].timeout, "HH:mm:ss a");
                                    var duration = moment.duration(endTime.diff(startTime));
                                    var hours = parseInt(duration.asHours());
                                    var minutes = parseInt(duration.asMinutes()) - hours * 60;
                                    //hoursIterator = hoursIterator + hours;
                                    //minIterator = minIterator + minutes
                                    if (minutes == 15) {
                                        hours + .25
                                        minIterator = 0;
                                    }
                                    if (minutes == 30) {
                                        hours + .30
                                    }
                                    if (minutes == 45) {
                                        hours + .75
                                    }
                                    $scope.data[0][c] = hours + minutes

                                    console.log(hours, minutes)
                                }

                            }
                            /*
                            var startTime = moment($scope.allEmployeesJobDetails[s][k].timein, "HH:mm:ss a");
                                        var endTime = moment($scope.allEmployeesJobDetails[s][k].timeout, "HH:mm:ss a");
                                        var duration = moment.duration(endTime.diff(startTime));
                                        var hours = parseInt(duration.asHours());
                                        var minutes = parseInt(duration.asMinutes()) - hours * 60;
    
                            $scope.payperiod = data.data.users[i].payperiodnum;
                            */

                            for (var k = 0; k < $scope.payperiods.length; k++) {
                                //console.log($scope.payperiods[k].payperiodnum)
                                //console.log($rootScope.payPeriod)
                                if ($scope.payperiods[k].payperiodnum == $rootScope.payPeriod) {
                                    console.log($scope.payperiods[k].jobDetails)

                                    $scope.jobDetails = $scope.payperiods[k].jobDetails
                                }

                            }

                        }
                    }
                    console.log($scope.payperiods)
                    console.log($scope.jobDetails)
                })

            }

            console.log(name);
            console.log("Curent User", $scope.currentUserFile)
            if (!$scope.userFilePage && $scope.currentUserFile == name) {
                $scope.userFilePage = true;
            } else if (!$scope.userFilePage && $scope.currentUserFile == name) {
                $scope.userFilePage = true;
            } else if ($scope.userFilePage && $scope.currentUserFile == name) {
                $scope.userFilePage = true;
            } else if ($scope.userFilePage && $scope.currentUserFile !== name) {
                $scope.currentUserFile = name;
                $scope.userFilePage = true;
            }
        }
            $scope.changeJobInDate = function(index){
            $scope.slideOut= true;
            $scope.fadeOut2 = true;
            $timeout(function(){
                     if($scope.currentJobInDate == 0){
                            $scope.currentJobInDate++;

            }else{
                $scope.currentJobInDate = 0
            }
            console.log($scope.currentJobInDate
            )
                $scope.slideOut = false;
                $scope.fadeOut2 = false
                $scope.fadeIn2 = true;
                $scope.slideIn = true;
            },500)
       
        }
          $scope.finishSubmitTimesheet = function (decision) {
            console.log(decision)
           /// console.log($scope.delinquentJobDetails)
            $scope.loadingAddHours = true;
     
            
            if (decision == "yes") {
                $scope.areYouSure = false;

       User.addHoursToBookedJob($scope.jobData).then(function (data) {
                console.log(data)
                if (data.data.success) {
                    $scope.loadingAddHours = false;
                    $scope.areYouSure = false;
                    $scope.openUserFile($scope.name)
                } else {

                }
       })
            } else {
                $scope.areYouSure = false;
            }
        }
        $scope.addHours = function(currentJobInDate,index,jobData){
           console.log($scope.timeData)
           // console.log($scope.currentJobInDate)
           console.log(jobData)

               if ($scope.timeData.hrsIn1 !== null && $scope.timeData.hrsIn2 !== null &&
                $scope.timeData.minsIn1 !== null && $scope.timeData.minsIn2 !== null
                && $scope.timeData.amPm1 !== null
                && $scope.timeData.hrsOut1 !== null
                && $scope.timeData.hrsOut2 !== null
                && $scope.timeData.minOut2 !== null
                && $scope.timeData.minsOut2 !== null
                && $scope.timeData.amPm2 !== null) {
                $scope.minVarOut = $scope.timeData.minsOut1 + $scope.timeData.minsOut2 + $scope.timeData.amPm2
                $scope.minVarIn = "" + $scope.timeData.minsIn1 + $scope.timeData.minsIn2 + $scope.timeData.amPm1
                $scope.hrVarOut = $scope.timeData.hrsOut1 + $scope.timeData.hrsOut2
                $scope.hrVarIn = $scope.timeData.hrsIn1 + $scope.timeData.hrsIn2
                jobData.timein =""+ $scope.timeData.hrsIn1+$scope.timeData.hrsIn2+$scope.timeData.minsIn1+$scope.timeData.minsIn2+$scope.timeData.amPm1
                jobData.timeout =""+ $scope.timeData.hrsOut1+$scope.timeData.hrsOut2+$scope.timeData.minsOut1+$scope.timeData.minsOut2+$scope.timeData.amPm2
                jobData.payperiodnum = $rootScope.payPeriod;
                jobData.currentuser = $scope.name;
                jobData.lunch = $scope.timeData.lunch;
                jobData.booked = true;
                jobData.timesheetSubmitted = true;
                $scope.jobData = jobData;
                console.log($scope.hrVarOut)
                console.log($scope.hrVarIn)
                console.log($scope.minVarOut)
                console.log($scope.minVarIn)
                console.log($scope.timeData)
                $scope.areYouSure = true;
                console.log($scope.areYouSure)

            } else {
                console.log("null")
            }
        }
        $scope.openAddHoursPage = function(){
                        $('select').material_select();

       
            if(!$scope.addHoursPageOpen){

                $scope.addHoursPageOpen = true;

            }else{

                $scope.addHoursPageOpen = false;

            }
        }
        $scope.openUserFile = function (name, phonenumber) {

            $('html, body').animate({ scrollTop: 0 }, 'fast');
            if ($scope.bookedJobsSelected) {
                $scope.bookedJobsSelected = false;
                $scope.bookedJobsPageOpened = false;
                ;

            } else {
                $scope.bookedJobsSelected = true;
                $scope.complaintsPageOpened = false;
                $scope.bookedJobsPageOpened = true;
                $scope.addHoursPageOpen = false;
                $scope.messagePageOpen = false;
                $scope.chartsPageOpen = false;
                $scope.historyPageOpenProfile = false;
                console.log($scope.bookedJobsPageOpened)
                $scope.delinquentTimeSheetSelected = false;
                $scope.delinquentTimeSheetPageOpened = false;
                $scope.addJobPageOpen = false;
                $scope.jobsPageOpen = true
                $scope.complaintsSelected = false;
                $scope.complaintsSelected = false;
                $scope.userDetailsPageOpened = false;
                $scope.payslipGenerationOpen = false;
                $scope.complaintsPageOpened = false;
                $scope.commentsSelected = false;
                $scope.commentsPageOpened = false;
                $scope.openJob = 0;


                $scope.employeeHome = false;
                $scope.loadingCurrentEmployee = true;
                $scope.searchResults = false;
                $scope.userList = false;
                $scope.employeeListOpen = false;
                $scope.userDetailsPageOpened = true;
                $scope.delinquentTimeSheetPageOpened = false;
                //$scope.bookedJobsPageOpened = false;
                $scope.complaintsPageOpened = false;
                $scope.commentsPageOpened = false;
                console.log(phonenumber)
                console.log(name)
                $scope.currentUserFile = name;
                $scope.currentUserPhoneNumber = phonenumber;
                $scope.delinquentTimeSheetArray = [];
                $scope.jobDetails = [];



                /*   for (var i = 0; i < $scope.employees.length; i++) {
                       if ($scope.employees[i].name == $scope.currentUserFile) {
                           console.log($scope.currentUserFile)
                           // $scope.jobDetails = data.data.users[i].jobDetails;
                           $scope.comments = $scope.employees[i].comments;
                           if($scope.comments.length <1){
                               $scope.noComments = true;
                           }
                           if($scope.employees[i].complaints.length < 1){
                               $scope.noComplaints = true;
                           }
                           $scope.payperiods = $scope.employees[i].payperiods;
                           $scope.payPeriodHistory = $scope.employees[i].payperiodhistory
                           $scope.delinquenttimesheets = $scope.employees[i].delinquenttimesheets
                           // console.log(data.data.users[i].delinquent)
                           if ($scope.delinquenttimesheets.length > 0) {
                               $scope.delinquentTimeSheet = true;
                               for (var t = 0; t <$scope.delinquenttimesheets[0].length; t++) {
   
                                   $scope.delinquentTimeSheetArray.push($scope.delinquenttimesheets[0][t])
   
                               }
                           } else {
                               $scope.delinquentTimeSheet = false;
                           }
                           console.log($scope.delinquentTimeSheetArray)
                           console.log($scope.payperiods)
                           console.log($scope.currentUserFile)
                           console.log($scope.payPeriodHistory)
                           $scope.payperiod = $scope.employees[i].payperiodnum;
   
   
                           for (var k = 0; k < $scope.payperiods.length; k++) {
                               //console.log($scope.payperiods[k].payperiodnum)
                               //console.log($rootScope.payPeriod)
                               if ($scope.payperiods[k].payperiodnum == $rootScope.payPeriod) {
                                   console.log($scope.payperiods[k].jobDetails)
   
                                   $scope.jobDetails = $scope.payperiods[k].jobDetails
                               }
   
                           }
   
                       }
                   }*/


                User.findUser($scope.currentUserFile).then(function (data) {
                    console.log(data)
                    $scope.currentEmployee = data.data.user
                    $scope.loadingCurrentEmployee = false;
                    // console.log
                    $scope.comments = data.data.user[0].comments
                    if ($scope.comments.length < 1) {
                        $scope.noComments = true;
                    }
                    if (data.data.user[0].complaints.length < 1) {
                        $scope.noComplaints = true;
                    }
                    $scope.payperiods = data.data.user[0].payperiods;
                    $scope.payPeriodHistory = data.data.user[0].payperiodhistory
                    $scope.delinquenttimesheets = data.data.user[0].delinquenttimesheets
                    if ($scope.delinquenttimesheets.length > 0) {
                        $scope.delinquentTimeSheet = true;
                        for (var t = 0; t < $scope.delinquenttimesheets[0].length; t++) {

                            $scope.delinquentTimeSheetArray.push($scope.delinquenttimesheets[0][t])

                        }
                    } else {
                        $scope.delinquentTimeSheet = false;
                    }

                    console.log($scope.delinquentTimeSheetArray)
                    console.log($scope.payperiods)
                    console.log($scope.currentUserFile)
                    console.log($scope.payPeriodHistory)
                    $scope.payperiod = data.data.user[0].payperiodnum;



                    /* NOT NEEDED WHEN ONLY ONE PAY PERIOD EXISTS... */

                    /* for (var k = 0; k < $scope.payperiods.length; k++) {
                         //console.log($scope.payperiods[k].payperiodnum)
                         //console.log($rootScope.payPeriod)
                         if ($scope.payperiods[k].payperiodnum == $rootScope.payPeriod) {
                             console.log($scope.payperiods[k].jobDetails)

                             $scope.jobDetails = $scope.payperiods[k].jobDetails
                         }

                     }
                     */

                    /*CHECK IF THE JOBDETAIL DATE HAS PASSED AND DISABLE IF TRUE*/



                    for (var u = 0; u < $scope.payperiods[0].jobDetails.length; u++) {
                        // console.log($scope.jobDetails[u].dateNum,$scope.dateNow)
                        for(var x = 0; x< $scope.payperiods[0].jobDetails[u].length;x++){

                            console.log($scope.payperiods[0].jobDetails[u][x])

                        }
                        if ($scope.payperiods[0].jobDetails[u].dateNum < $scope.dateNow) {
                            //  console.log($scope.jobDetails[u])
                            $scope.payperiods[0].jobDetails[u].dateHasPassed = true;

                        } else {
                            $scope.payperiods[0].jobDetails[u].dateHasPassed = false;

                        }

                    }
                    $scope.jobDetails = $scope.payperiods[0].jobDetails

                    /*CHECK IF THE JOBDETAIL DATE HAS PASSED AND DISABLE IF TRUE*/


                    /*NOT NEEDED WHEN ONLY ONE PAY PERIOD EXISTS...*/

                })



            }

            console.log(name);
            console.log($scope.bookedJobsPageOpened)

            console.log("Curent User", $scope.currentUserFile)
            if (!$scope.userFilePage && $scope.currentUserFile == name) {
                $scope.userFilePage = true;
            } else if (!$scope.userFilePage && $scope.currentUserFile == name) {
                $scope.userFilePage = true;
            } else if ($scope.userFilePage && $scope.currentUserFile == name) {
                $scope.userFilePage = true;
            } else if ($scope.userFilePage && $scope.currentUserFile !== name) {
                $scope.currentUserFile = name;
                $scope.userFilePage = true;
            }
        }
        $scope.openChartsPage = function () {
            $scope.chartsPageOpen = true;
            $scope.historyPageOpen = false;
            $scope.messagePageOpen = false;
            $scope.historyPageOpenProfile = false;
            $scope.bookedJobsPageOpened = false;

            $scope.incompletePayPeriodPageOpen = false;

            User.findUser($scope.name).then(function (data) {
                console.log(data)
                $scope.payPeriodHistory = data.data.user[0].payperiodhistory
                console.log($scope.payPeriodHistory)


                for (var b = 0; b < $scope.payPeriodHistory.length; b++) {
                    //$scope.data
                    $scope.hoursCalcIterator = 0;

                    // $scope.data[0][b]= hoursIterator;
                    console.log($scope.payPeriodHistory[b].entry[0][0].date + "-" + $scope.payPeriodHistory[b].entry[6][0].date)
                    $scope.labels2[b] = $scope.payPeriodHistory[b].entry[0][0].date + "-" + $scope.payPeriodHistory[b].entry[6][0].date

                    for (var c = 0; c < $scope.payPeriodHistory[b].entry.length; c++) {
                        console.log($scope.payPeriodHistory.length)

                        for (var x = 0; x < $scope.payPeriodHistory[b].entry[c].length; x++) {

                            console.log($scope.payPeriodHistory[b].entry[c])
                            $scope.hoursCalcIterator = $scope.hoursCalcIterator + $scope.payPeriodHistory[b].entry[c][x].hoursCalculated
                            /*    if($scope.payPeriodHistory[b].entry[c][0]!== undefined){

                                       $scope.labels[c] = $scope.payPeriodHistory[b].entry[c][0].date
                                       if($scope.payPeriodHistory[b].entry[c][x+1] !== undefined){
                                        console.log("HOlk")
                                                $scope.hoursCalIterator = $scope.payPeriodHistory[b].entry[c][x].hoursCalculated + $scope.payPeriodHistory[b].entry[c][x+1];
                                             console.log($scope.payPeriodHistory[b].entry[c][x].hoursCalculated + $scope.payPeriodHistory[b].entry[c][x+1].hoursCalculated)
                                               $scope.data[0][c] = $scope.payPeriodHistory[b].entry[c][x].hoursCalculated + $scope.payPeriodHistory[b].entry[c][x+1].hoursCalculated;

                                             
                                       }else{
                                           console.log("choOlk")
                                                                                              $scope.data[0][c] = $scope.payPeriodHistory[b].entry[c][x].hoursCalculated ;

                                       }



                                }*/
                            console.log($scope.hoursCalcIterator, b)
                            $scope.data2[b] = $scope.hoursCalcIterator
                        }

                        var hoursIterator = 0;
                        var minIterator = 0;

                    }

                }
            })


        }
        $scope.increaseDay = function () {
            $scope.currentJobInDate = 0;
            $scope.fadeIn2 = false;
            $scope.slideout = true;
            $scope.fadeOut = true;

            $timeout(function () {
                $scope.slideout = false;
                $scope.fadeOut = false;
                $scope.slidein = true;
                console.log($scope.jobDetails.length)
                if ($scope.openJob <= 6) {
                    if ($scope.jobDetails[$scope.openJob + 1].length < 1) {
                        console.log("Oy")
                        $scope.openJob = 0;
                    } else {
                        $scope.openJob = $scope.openJob + 1;

                    }


                } else {
                    $scope.openJob = 0;
                }
            }, 500)


            console.log($scope.openJob)
        }
        $scope.openMessagePage2 = function () {
            $scope.currentIndex = null;
            $scope.messagePageOpen = true;
            $scope.bookedJobsPageOpened = false;
            $scope.chartsPageOpen = false;
            $scope.historyPageOpenProfile = false;
            $scope.messagePageSelected = true;
            $scope.messagesLoading = true;
            $scope.messageForPagination = [];
            $scope.pageLimit = 4;
            User.getMessages($scope.name).then(function (data) {
                console.log(data)
                $scope.messagesArray = data.data.messages;
                $scope.messagesLoading = false;
                for (var i = 0; i <= $scope.messagesArray.length; i++) {

                    var page = 0;
                    ////console.log($scope.pageLimit, i, $scope.employees.length)
                    console.log($scope.employees)
                    if (i < $scope.pageLimit) {
                        console.log("its less")

                    }
                    if (i < $scope.messagesArray.length) {
                        console.log("yup,less")
                    }

                    if (i < $scope.pageLimit && i < $scope.messagesArray.length) {//5
                        console.log("HELLO")
                        //console.log($scope.employees[i])
                        //console.log($scope.pageLimit, i, $scope.employees.length)
                        if ($scope.messagesArray[i]) {
                            $scope.messageForPagination.push($scope.messagesArray[i])
                            console.log(i)
                            console.log("firstCondiation")
                            console.log($scope.pageArray)

                        }



                    } else {
                        if (!$scope.usersLoaded) {

                            console.log("else")
                            $scope.loadingUsers = false;
                            $scope.messagesPaginated.push($scope.messageForPagination)
                            console.log($scope.messagesPaginated)
                            $scope.messageForPagination = [];
                            if ($scope.messagesArray[i] !== undefined) {
                                $scope.messageForPagination.push($scope.messagesArray[i])
                            }
                            $scope.pageLimit = $scope.pageLimit + 4;
                            //console.log($scope.pageLimit, i, $scope.employees.length)

                            page++

                        }

                    }

                }
            })
        }
        $scope.openMessagePage = function () {
            if ($scope.messagePageOpen) {
                $scope.messagePageOpen = false;
                $scope.messagePageSelected = false;
            } else {
                $scope.messagePageOpen = true;
                $scope.messagePageSelected = true;
                $scope.bookedJobsPageOpened = false;
                $scope.bookedJobsSelected = false;
                $scope.chartsPageOpen = false;
                $scope.historyPageOpenProfile = false;
                $scope.messagesLoading = true;
                $scope.currentIndex = null;
                $scope.messageForPagination = [];
                $scope.pageLimit = 4;
                User.getMessages($scope.name).then(function (data) {
                    console.log(data)
                    $scope.messagesArray = data.data.messages;
                    $scope.messagesLoading = false;
                    for (var i = 0; i <= $scope.messagesArray.length; i++) {

                        var page = 0;
                        ////console.log($scope.pageLimit, i, $scope.employees.length)
                        console.log($scope.employees)
                        if (i < $scope.pageLimit) {
                            console.log("its less")

                        }
                        if (i < $scope.messagesArray.length) {
                            console.log("yup,less")
                        }

                        if (i < $scope.pageLimit && i < $scope.messagesArray.length) {//5
                            console.log("HELLO")
                            //console.log($scope.employees[i])
                            //console.log($scope.pageLimit, i, $scope.employees.length)
                            if ($scope.messagesArray[i]) {
                                $scope.messageForPagination.push($scope.messagesArray[i])
                                console.log(i)
                                console.log("firstCondiation")
                                console.log($scope.pageArray)

                            }



                        } else {
                            if (!$scope.usersLoaded) {

                                console.log("else")
                                $scope.loadingUsers = false;
                                $scope.messagesPaginated.push($scope.messageForPagination)
                                console.log($scope.messagesPaginated)
                                $scope.messageForPagination = [];
                                if ($scope.messagesArray[i] !== undefined) {
                                    $scope.messageForPagination.push($scope.messagesArray[i])
                                }
                                $scope.pageLimit = $scope.pageLimit + 4;
                                //console.log($scope.pageLimit, i, $scope.employees.length)

                                page++

                            }

                        }

                    }
                })
            }
        }
        $scope.openHistoryPageProfile = function () {
            $scope.openJob = 0;
            $scope.chartsPageOpen = false;
            $scope.generalHistoryOpen = false;
            $scope.generalHistoryTitle = false;
            $scope.historyPageOpenProfile = true;
            $scope.bookedJobsPageOpened = false;
            $scope.messagePageOpen = false;
            $scope.bookedJobsSelected = false;
            $scope.loadingPersonalHistory = true;
            $scope.personalHistoryTitle = true;
            $scope.personalHistoryOpen = true;
            $scope.employeeHome = false;
            $scope.searchResults = false;
            $scope.userList = false;
            $scope.employeeListOpen = false;
            $scope.userDetailsPageOpened = true;
            $scope.bookedJobsPageOpened = false;
            $scope.complaintsPageOpened = false;
            $scope.commentsPageOpened = false;
            User.findUser($scope.name).then(function (data) {
                console.log(data)
                $scope.payPeriodHistory = data.data.user[0].payperiodhistory
                console.log($scope.payPeriodHistory)


                for (var b = 0; b < $scope.payPeriodHistory.length; b++) {
                    //$scope.data

                    // $scope.data[0][b]= hoursIterator;


                    for (var c = 0; c < $scope.payPeriodHistory[b].entry.length; c++) {
                        $scope.hoursCalcIterator = 0;
                        for (var x = 0; x < $scope.payPeriodHistory[b].entry[x].length; x++) {

                            console.log($scope.payPeriodHistory[b].entry[c])
                            if ($scope.payPeriodHistory[b].entry[c][0] !== undefined) {

                                $scope.labels[c] = $scope.payPeriodHistory[b].entry[c][0].date
                                if ($scope.payPeriodHistory[b].entry[c][x + 1] !== undefined) {
                                    console.log("HOlk")
                                    $scope.hoursCalIterator = $scope.payPeriodHistory[b].entry[c][x].hoursCalculated + $scope.payPeriodHistory[b].entry[c][x + 1];
                                    console.log($scope.payPeriodHistory[b].entry[c][x].hoursCalculated + $scope.payPeriodHistory[b].entry[c][x + 1].hoursCalculated)
                                    $scope.data[0][c] = $scope.payPeriodHistory[b].entry[c][x].hoursCalculated + $scope.payPeriodHistory[b].entry[c][x + 1].hoursCalculated;


                                } else {
                                    console.log("choOlk")
                                    $scope.data[0][c] = $scope.payPeriodHistory[b].entry[c][x].hoursCalculated;

                                }



                            }

                        }
                        var hoursIterator = 0;
                        var minIterator = 0;
                        //console.log(c,$scope.payPeriodHistory[b].entry.length)
                        // console.log("hoursIteratot",hoursIterator)




                        /*
                                                        var startTime = moment($scope.payPeriodHistory[b].entry[c].timein, "HH:mm:ss a");
                                                        var endTime = moment($scope.payPeriodHistory[b].entry[c].timeout, "HH:mm:ss a");
                                                        var duration = moment.duration(endTime.diff(startTime));
                                                        var hours = parseInt(duration.asHours());
                                                        var minutes = parseInt(duration.asMinutes()) - hours * 60;
                                                        //hoursIterator = hoursIterator + hours;
                                                        //minIterator = minIterator + minutes
                                                        if (minutes == 15) {
                                                            hours + .25
                                                            minIterator = 0;
                                                        }
                                                        if (minutes == 30) {
                                                            hours + .30
                                                        }
                                                        if (minutes == 45) {
                                                            hours + .75
                                                        }*/

                        // console.log(hours, minutes)
                    }

                }
            })
            $scope.loadingPersonalHistory = false;
            console.log($scope.bookedJobsPageOpened)
        }
        $scope.openIndividualHistoryEntry = function (index) {
            console.log(index)
            //curHistory = index;
            // $('html, body').animate({ scrollTop: 0 }, 'fast');

            $scope.showChart = false;
            $timeout(function () {
                $scope.removeChart = true;
                if ($scope.historyEntryOpen && index !== $scope.curHistory
                ) {
                    // $scope.individualPayPeriodOpen = false;
                    $scope.curHistory = index;
                    console.log("first")

                }


                else if (!$scope.historyEntryOpen && index == $scope.curHistory) {
                    $scope.historyEntryOpen = true;
                    console.log("second")
                    //$scope.curPeriod = index;
                }
                else if (!$scope.historyEntryOpen && index !== $scope.curHistory) {
                    console.log("third")
                    $scope.historyEntryOpen = true;
                    $scope.curHistory = index;
                } else {
                    $scope.curHistory = null

                    $scope.showChart = true;
                    $scope.removeChart = false;
                }
            }, 500)
        }
        $scope.openIndividualPayPeriod = function (index) {
            console.log(index)

            // $scope.historyEntryOpen = false;
            if ($scope.individualPayPeriodOpen && index !== $scope.curPeriod
            ) {
                // $scope.individualPayPeriodOpen = false;
                $scope.curPeriod = index;
                console.log("first")

            }


            else if (!$scope.individualPayPeriodOpen && index == $scope.curPeriod) {
                $scope.individualPayPeriodOpen = true;
                console.log("second")
                //$scope.curPeriod = index;
            }
            else if (!$scope.individualPayPeriodOpen && index !== $scope.curPeriod) {
                console.log("third")
                $scope.individualPayPeriodOpen = true;
                $scope.curPeriod = index;
            } else {
                console.log("fourth")
                $scope.curHistory = null;
                $scope.curPeriod = null
                $scope.showChart = true;
            }
        }

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