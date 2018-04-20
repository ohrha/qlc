(function(){

//console.log("app.js loaded");

var app = angular.module('qlc',['appRoutes',"tapTargetController","homeController",'registerController','loginController']);
																																																  
app.config(function(){

	//$httpProvider.interceptors.push('AuthInterceptors');
	//$window.Stripe.setPublishableKey('pk_test_aE3UDuxFXzcslBrNanFIIi6Q');
    console.log("app module loaded.")

});
app.controller('QlhController', [  function() {
console.log("QlhController")

}])
}());


