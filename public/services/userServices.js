console.log("testing")
angular.module('userServices',['authServices']).config(function(){

    console.log("UserService")

})
.factory('User', function($http,Auth,AuthToken){

    userFactory = {};
    //User.create(regData)
    userFactory.create = function(regData){

        return $http.post('/api/users', regData);

    }
    userFactory.getUsers = function(){

        return $http.get('/api/users')

    }
       //User.getPermission();
 userFactory.getUserClass= function(){
    if(AuthToken.getToken()){
        var token = AuthToken.getToken()
            return $http.put('/api/getuserclass'+token);

    }

 }
    userFactory.generatePdf = function(){
        return $http.get('/api/generatepdf')
    }
    userFactory.instaSearch = function(input){
        return $http.put('/api/users/'+input)
    }
    userFactory.getUser  = function(userId){
        return $http.put('/api/users/'+userId);
    }
    userFactory.changeAvailability = function(userid,month,date,boolean){

        return $http.put('/api/users/'+userid+'/'+month+'/'+date+'/'+boolean);

    }
    userFactory.addBookedJob = function(jobObject){
        console.log(jobObject)
                return $http.post('/api/bookjob',jobObject);

    }
    userFactory.setToBooked = function(userid,date,boolean){
        //console.log(jobObject)
        return $http.put('/api/users/'+userid+"/"+date+"/"+boolean);
                
        
    }
    return userFactory
})