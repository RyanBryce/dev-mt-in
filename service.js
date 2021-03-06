angular.module('app').service('friendService', function($http, $q) {

    this.getUsers = function() {
        return $http.get('http://connections.devmounta.in/api/profiles')
            .then(function(results) {
                return results.data;
            })
    };
    //
    //landing
    //
    this.sendData = function(user) {
        return $http({
            url: 'http://connections.devmounta.in/api/profiles',
            method: "POST",
            data: user
        })
    }


    this.getMe = function(user) {
        var promise = $http.get('http://connections.devmounta.in/api/profiles?name=' + user)
            .then(function(response) {
                return response
            })
            .then(function(data) {
                var peep = data.data;

                for (var i = 0; i < peep.length; i++) {
                    if (peep[i].name == user) {
                        return peep[i];
                    };
                };
            });
        return promise
    };
    //
    // update profile
    //
    this.meById = function(id) {
        return $http.get('http://connections.devmounta.in/api/profiles/' + id)
            .then(function(results) {
                return results.data;
            })
    };

    this.updateProfile = function(id, user) {
        return $http.put('http://connections.devmounta.in/api/profiles/' + id, user)
            .then(function(results) {
                console.log('this is our put', results, user);
            })
    };
    //
    //search for friendService
    //
    this.getFriendsByName = function(user) {
        var promise = $http.get('http://connections.devmounta.in/api/profiles?name=' + user)
            .then(function(response) {
                return response.data
            })
        return promise
    };
    //
    //addfriends
    //
    this.addfriend = function(myId, friendId){
      $http.put('http://connections.devmounta.in/api/profiles/' + myId + '/friends/' + friendId)

    }
    //
    // myFriendsView
    //
    this.myFriends = function(myId){
      return $http.get('http://connections.devmounta.in/api/profiles/' + myId)
      .then(function(res){
        return res.data.friends
      })
    }
});


//
// this.data = [{
//   name: 'names names',
//   tagline: 'name',
//   bio: '',
//   profileUrl: ''
// }];
// this.person = function(){
//   console.log(this.data);
//   return this.data;
// };
