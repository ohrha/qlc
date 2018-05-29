(function(){

//console.log("app.js loaded");

var app = angular.module('qlc',['appRoutes','managementController', 'mainController','authServices','htmlToPdfSave','userServices',"calanderController","tapTargetController","profileController","homeController",'registerController','loginController']);
																																																  
app.config(function($compileProvider){

	//$httpProvider.interceptors.push('AuthInterceptors');
	//$window.Stripe.setPublishableKey('pk_test_aE3UDuxFXzcslBrNanFIIi6Q');
    console.log("app module loaded.")
	$compileProvider.preAssignBindingsEnabled(true);

});
app.controller('QlhController', [  function(Auth) {
console.log("QlhController")
	Auth.getUser().then(function(data){
		console.log(data.data)
	})

}])
}());


