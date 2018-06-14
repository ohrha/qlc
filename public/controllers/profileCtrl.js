(function () {


    var app = angular.module('profileController', ['userServices'])
    app.config(function () {

        console.log("Profile Controller Loaded")
    })

    app.controller('profileCtrl', function ($scope, User, $routeParams,Auth) {
        $scope.$on('$routeChangeSuccess', function () {
            $('.carousel').carousel();
        });
        $scope.name = "";
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
           $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40]

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
       
       Auth.getUser().then(function(data){
           console.log(data)
           $scope.name = data.data.name;
           $scope.user_id=$routeParams.userid
           console.log($scope.user_id)
       })
          $scope.openHistoryPageProfile = function () {
$scope.openJob = 0;
            $scope.generalHistoryOpen = false;
            $scope.generalHistoryTitle = false;
            $scope.historyPageOpenProfile = true;
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
              User.findUser($scope.name).then(function(data){
                console.log(data)
                      $scope.payPeriodHistory = data.data.user[0].payperiodhistory
console.log($scope.payPeriodHistory)
               

                        for (var b = 0; b < $scope.payPeriodHistory.length; b++) {
                            //$scope.data

                            // $scope.data[0][b]= hoursIterator;


                            for (var c = 0; c < $scope.payPeriodHistory[b].entry.length; c++) {
$scope.hoursCalcIterator = 0;
                                for(var x=0; x< $scope.payPeriodHistory[b].entry[x].length;x++){
                                    
                                    console.log($scope.payPeriodHistory[b].entry[c])
                                    if($scope.payPeriodHistory[b].entry[c][0]!== undefined){

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
          $scope.loadingPersonalHistory =false;

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