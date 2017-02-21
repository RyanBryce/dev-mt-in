angular.module('app').controller('initialCtrl', function($scope, friendService){


  $scope.setData = function(name, tagline, profileUrl, bio){
    friendService.data.name = name;
    friendService.data.tagline = tagline;
    friendService.data.profileUrl = profileUrl;
    friendService.data.bio = bio;
  };



});
