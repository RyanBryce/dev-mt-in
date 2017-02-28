angular.module('app').controller('initialCtrl', function($scope, friendService){


  $scope.sendData = function(name, tagline, profileUrl, bio){
    var user = {
      name: name,
      tagline: tagline,
      bio: bio,
      profileUrl: profileUrl,
      friends: []
    };

    friendService.sendData(user)
    .success(function(response){
      $scope.person = response
      console.log( 'wtf', $scope.person);
    }, function(error){
      console.log(2222222222, error)
    })
  };
});
