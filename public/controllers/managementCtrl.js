(function () {

    var app = angular.module('managementController', ['authServices'])
    app.config(function () {

        console.log("Management Controller Loaded")
    })

    app.controller('managementCtrl', function ($scope, Auth,$timeout,$location,User) {
        $scope.loading = false;
        $scope.managementPage = true;
        $scope.clientsPage = false;
        $scope.employeesPage = false;
        $scope.userFilePage = false;
        $scope.openIssue = false;
        $scope.closeIssue = false;
        $scope.bookedJobs = false;
        $scope.employeeHome = true;
        $scope.employeeListOpen = false;
        $scope.complaintsOpened = false;
        $scope.complaintsSelected = false;
        $scope.bookedJobsSelected = false;
        $scope.timesheetsSelected = false;
        $scope.disputesSelected = false;
        $scope.jobsSelected = true;
        $scope.bookedJobsPageOpened = false;
        $scope.complaintsPageOpened = false;
        $scope.commentsPageOpened = false;
        $scope.commentsPageOpened = false;
        $scope.commentsSelected = false;
        $scope.slidein = false;
        $scope.slideout = false;
        $scope.fadeOut = false;
        $scope.jobsPageOpen = true;
        $scope.openJob = 0;
        $scope.timesheetsPageOpen = false;
        $scope.disputesPageOpen = false;
        $scope.usersPageIndex = ""
        $scope.userDetailsPageOpened = true;
        $scope.noInput = false;
        $scope.searchResults = false;
        $scope.noSearchResults = false;
        $scope.currentUserFile = "";
        $scope.employees = [];
        $scope.jobDetails = [];
        $scope.comments = [];
        $scope.userSearchResults = [];
        console.log($scope.jobDetails)

        User.getUsers().then(function(data){
            console.log(data)
            $scope.employees = data.data.users;
            $scope.jobDetails = data.data.users.jobDetails;
            for(var i = 0; i < data.data.users.length; i++){
                if(data.data.users[i].name == $scope.currentUserFile){
                    data.data.users[i].jobDetails = $scope.jobDetails;
                    data.data.users[i].comments = $scope.comments;
                }
            }
            console.log($scope.jobDetails)
            console.log($scope.comments)
        })
       // console.log($scope.searchForm.searchInput.$pristine)
       $scope.closeSearchResults = function(){
           console.log("clicked")
           $scope.searchResults = false;
       }
        $scope.searchFunction= function(input){
            $scope.loading =true;
            console.log(input.$viewValue)
            if(input.$viewValue != ""){
                $scope.loading = false;
                   User.instaSearch(input.$viewValue).then(function(data){
                console.log(data.data.users.length)
                if(data.data.users.length == 0){
                    $scope.searchResults = false;
                    $scope.noSearchResults = true;
                    $scope.noInput = false;
                      $timeout(function(){
                    $scope.noSearchResults = false;
                },3000)
            }else{
                console.log("dog")
                $scope.loading = false;
                $scope.userSearchResults=data.data.users
               
                $scope.searchResults = true;
                $scope.noInput = false;
                $scope.noSearchResults = false;
                      $timeout(function(){
                    
                },3000)
                }
                  })
            }else{
                $scope.loading = false;
                $scope.noInput = true;
                $scope.noSearchResults = false;
                $scope.searchResults = false;
                console.log("y")
                $timeout(function(){
                    $scope.noInput = false;
                },3000)
            }
         
          
        }
        $scope.openEmployeeList= function(){
            if($scope.employeeListOpen){
                $scope.employeeListOpen = false;
            }else{
                $scope.employeeListOpen = true;
            }
        }
        $scope.openDisputesPage=function(index){
            $scope.usersPageIndex = index;
                          if(!$scope.disputesPageOpen){
                    $scope.jobsPageOpen = false;
                    $scope.disputesPageOpen =true;
                    $scope.timesheetsPageOpen = false;
                    $scope.timesheetsSelected = false;
                    $scope.jobsSelected = false;
                    $scope.disputesSelected = true;
                }else{
                    $scope.disputesSelected = false;
                    
                }

        }
        $scope.increaseDay=function(){
            $scope.slideout= true;
            $scope.fadeOut = true;

            $timeout(function(){
                $scope.slideout=false;
                $scope.fadeOut = false;
                $scope.slidein = true;
                            if($scope.openJob <= 5){

                $scope.openJob= $scope.openJob+1;


            }else{
              $scope.openJob = 0;
            }
            },500)
            

            console.log($scope.openJob)
        }
        $scope.decreaseDay=function(){
                if($scope.openJob <= 0){
                $scope.openJob= $scope.openJob-1;
            }else{
                $scope.openJob = 0;
            }
        }
        $scope.openJobsPage = function(index){
                        $scope.usersPageIndex = index;

                if(!$scope.jobsPageOpen){
                    $scope.jobsPageOpen = true;
                    $scope.jobsSelected = true;
                    $scope.disputesSelected = false;
                    $scope.timesheetsSelected = false;
                    $scope.disputesPageOpen =false;
                    $scope.timesheetsPageOpen = false;
                }else{
                    $scope.jobsSelected = false;

                }

        }
        $scope.openTimesheetsPage = function(index){
                        $scope.usersPageIndex = index;
                        $scope.openJob = index;
                          if(!$scope.timesheetsPageOpen){
                    $scope.jobsPageOpen = false;
                    $scope.disputesPageOpen =false;
                    $scope.timesheetsPageOpen = true;
                    $scope.timesheetsSelected = true;
                    $scope.disputesSelected = false;
                    $scope.jobsSelected = false;
                }else{
                    $scope.timesheetsSelected = false;
                }
        }
        $scope.openCommentsPage = function(index){
            $scope.openJob = 0;
            if($scope.commentsSelected){

                $scope.commentsSelected = false;
                $scope.commentsPageOpened = false;
            }else{

                $scope.commentsSelected = true;
                $scope.commentsPageOpened = true
                $scope.complaintsPageOpened = false;
                $scope.complaintsSelected = false;
                $scope.userDetailsPageOpened = false;
                $scope.bookedJobsPageOpened = false;
                $scope.bookedJobsSelected = false;
                $scope.userDetailsPageOpened=false;
            }
        }
        $scope.openComplaintsPage=function(){
            $scope.openJob = 0;
            if($scope.complaintsSelected){
                $scope.complaintsSelected = false;
                $scope.complaintsPageOpened = false;
            }else{
                $scope.complaintsSelected = true;
                $scope.complaintsPageOpened = true;
                $scope.commentsSelected = false;
                $scope.commentsPageOpened = false;
                $scope.bookedJobsPageOpened = false;
                $scope.bookedJobsSelected = false;

            }
        }
                $scope.openBookedJobsPage=function(){
                    
            if($scope.bookedJobsSelected){
                $scope.bookedJobsSelected = false;
                $scope.bookedJobsPageOpened =false;

            }else{
                $scope.bookedJobsSelected = true;
                              $scope.complaintsPageOpened = false;
                $scope.bookedJobsPageOpened = true;
                $scope.complaintsSelected = false;
                      $scope.complaintsSelected = false;
                      $scope.userDetailsPageOpened = false;
                $scope.complaintsPageOpened = false;
                $scope.commentsSelected = false;
                $scope.commentsPageOpened = false;
            }
        }

        $scope.openEmployeeHome = function(){
            console.log("clicked")
            if(!$scope.employeeHome){
                $scope.employeeHome = true;
                
            }
        }
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
            $scope.employeeHome = true;
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
        $scope.openComplaints = function(){
            $scope.openJob = 0;
             if($scope.bookedJobs){
                $scope.bookedJobs = false;
            }
            if($scope.complaintsOpened){
                $scope.complaintsOpened = false;
            }else{
                $scope.complaintsOpened = true;

            }
        }
        $scope.openCloseBookedJobs= function(){
            if($scope.complaintsOpened){
                $scope.complaintsOpened = false;
            }
            if($scope.bookedJobs){
                $scope.bookedJobs = false;
            }else{
                $scope.bookedJobs = true;
            }
        }
        $scope.openUserFile=function(name){
           $scope.openJob = 0;
            $scope.employeeHome = false;
            $scope.userDetailsPageOpened = true;
            $scope.bookedJobsPageOpened = false;
            $scope.complaintsPageOpened = false;
            $scope.commentsPageOpened = false;

            $scope.currentUserFile = name;
                   User.getUsers().then(function(data){
            console.log(data)
           // $scope.employees = data.data.users;
            //$scope.jobDetails = data.data.users.jobDetails;
            for(var i = 0; i < data.data.users.length; i++){
                if(data.data.users[i].name == $scope.currentUserFile){
                   $scope.jobDetails=data.data.users[i].jobDetails ;
                   $scope.comments=data.data.users[i].comments ;
                   console.log(data.data.users[i].name)
                   console.log(data.data.users[i].jobDetails)
                   console.log(data.data.users[i].comments)
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