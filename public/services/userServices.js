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
    userFactory.addJob = function(jobData){
        return $http.post('/api/users/addjob',jobData)
    }
    userFactory.removeJob = function(jobData){
        return $http.post('/api/users/removejob',jobData)
    }
    userFactory.findUser = function(name){
        return $http.put('/api/users/finduser/'+name)
    }
    userFactory.addDelinquentTimeSheet = function(jobDetail){
        return $http.post('/api/users/adddelinquenttimesheet',jobDetail)
    }
    userFactory.addPayPeriodToPayPeriodHistory = function(payperiod){
        return $http.post('/api/users/addpayperiodtopayperiodhistory',payperiod)
    }
    userFactory.addJobToCurrentPayPeriod = function(job){
        return $http.post('/api/users/addjobtocurrentpayperiod',job)
    }
    userFactory.changeUserPayPeriod= function(details){
        console.log(details)
        return $http.post('/api/users/changeuserpayperiod',details)
    }
    userFactory.sendSms = function(userDetails){
        return $http.post('/api/users/sendsms', userDetails)
    }
    userFactory.sendMessage = function(messageDetails){
        return $http.post('/api/users/sendmessage',messageDetails)
    }
    userFactory.addHoursToBookedJob = function(jobData){
        return $http.post('/api/users/addhourstobookedjob', jobData)
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
        console.log(input)
        return $http.put('/api/users/'+input)
    }
       
    userFactory.updatePayPeriod = function(payperiod,username){
        console.log("Hello from userservice")
        return $http.put('/api/users/updatepayperiod/'+payperiod+'/'+username)

    }
    userFactory.getUser  = function(userId){
         console.log("Hello from userservice")
        return $http.put('/api/users/'+userId);
    }
    userFactory.changeAvailability = function(userid,month,date,boolean){

        return $http.put('/api/users/'+userid+'/'+month+'/'+date+'/'+boolean);

    }
    userFactory.getMessages = function(name){

        return $http.put('/api/users/getmessages/'+name)
    }
    userFactory.changeMessageToRead = function(name,index){
        return $http.put('/api/users/changemessagetoread/'+name+"/"+index)
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