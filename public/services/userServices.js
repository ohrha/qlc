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
    userFactory.changeAvailability = function(userid,month,date,boolean){

        return $http.put('/api/users/'+userid+'/'+month+'/'+date+'/'+boolean);

    }
    userFactory.addBookedJob = function(userid,job){
                return $http.put('/api/users/'+userid+"/"+job);

    }
    userFactory.setToBooked = function(userId,date,boolean){
        return $http.post('/api/users/bookjob')
        
    }
    return userFactory
})