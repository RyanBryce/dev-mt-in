angular.module('app').controller('updateCtrl', function($scope, friendService){
  $scope.setData = function(name, tagline, profileUrl, bio){
    friendService.data.name = name;
    friendService.data.tagline = tagline;
    friendService.data.profileUrl = profileUrl;
    friendService.data.bio = bio;
  };
  
  $scope.person = friendService.person();
  console.log($scope.person);

  $scope.splitter = function(){
  var nameSplit = $scope.person.name.split(' ');
  $scope.firstName = nameSplit[0];
  $scope.lastName = nameSplit[nameSplit.length - 1];
  }
  $scope.splitter();
});
