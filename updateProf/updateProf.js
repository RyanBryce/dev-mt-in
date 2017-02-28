angular.module('app').controller('updateCtrl', function($scope, friendService, $stateParams){

  console.log($stateParams.id);
  $scope.user = function() {
    friendService.meById($stateParams.id)
    .then(function(res) {
      console.log(res);
      $scope.person = res;
      console.log($scope.person._id);
      return $scope.person
    }).then(function(person){
      var split = person.name.split(' ');
      console.log(split);
      $scope.firstName = split[0];
      $scope.lastName = split[split.length - 1];
    })
  };
  $scope.user();
  $scope.sendData = function(name, tagline, profileUrl, bio){
    var user = {
      name: name,
      tagline: tagline,
      bio: bio,
      profileUrl: profileUrl,
      friends: []
    };

    friendService.updateProfile($stateParams.id, user)
    .success(function(response){
      $scope.person = response
      console.log( 'wtf', $scope.person);
    }, function(error){
      console.log(2222222222, error)
    })
  };


  // $scope.setData = function(name, tagline, profileUrl, bio){
  //   friendService.data.name = name;
  //   friendService.data.tagline = tagline;
  //   friendService.data.profileUrl = profileUrl;
  //   friendService.data.bio = bio;
  // };
  //
  // $scope.person = friendService.person();
  // console.log($scope.person);
  //
  // $scope.splitter = function(){
  // var nameSplit = $scope.person.name.split(' ');
  // $scope.firstName = nameSplit[0];
  // $scope.lastName = nameSplit[nameSplit.length - 1];
  // }
  // $scope.splitter();
});
