
angular.module('payperiodServices', []).config(function () {

    console.log("payperiodService")

})
.factory('PayPeriod', function ($http,$window) {
    var payPeriodFactory = {};

    payPeriodFactory.createPayPeriod = function (payperiod) {
      
        return $http.post('api/payperiod/createpayperiod',payperiod)

    };
    payPeriodFactory.getAllPayPeriods = function(){
        return $http.get('api/payperiod/getallpayperiods')
    }


    return payPeriodFactory;
});