console.log("testing")
angular.module('userServices',[]).config(function(){

    console.log("UserService")

})
.factory('User', function($http){

    userFactory = {};
    //User.create(regData)
    userFactory.create = function(regData){

        return $http.post('/api/users', regData);

    }
    userFactory.getUser  = function(userId){
        return $http.put('/api/users/'+userId);
    }
    userFactory.changeAvailability = function(){

        return $http.put('/api/user/');

    }
    return userFactory
})