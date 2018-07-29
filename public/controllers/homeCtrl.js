(function(){

    var app = angular.module('homeController',[])
    app.config(function(){

        console.log("Home Controller Loaded")
    })

    app.controller('homeCtrl', function($scope,$rootScope){
          $rootScope.$on('$routeChangeStart', function () {

            console.log(Auth.isLoggedIn())
            console.log(AuthToken.getToken())
            $rootScope.loggedIn = Auth.isLoggedIn()
            Auth.getUser().then(function (data) {
                console.log(data)
                $rootScope.payPeriod = data.data.payperiod;
                $rootScope.userClassy = $rootScope.userClass

                console.log($rootScope.userClass)
            })
        })
              $('.carousel.carousel-slider').carousel({ fullWidth: true });

    })

}());