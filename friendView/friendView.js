angular.module('app').controller('viewCtrl', function($scope, friendService, $rootScope, $stateParams){
  $rootScope.globalUserId = $stateParams.id;
  console.log('this is global id', $rootScope.globalUserId)
  $scope.user = function() {
      friendService.meById($stateParams.id)
          .then(function(res) {
              $scope.person = res;
              console.log($scope.person._id);
              return $scope.person
          }).then(function(person) {
              var split = person.name.split(' ');
              console.log(split);
              $scope.firstName = split[0];
              $scope.lastName = split[split.length - 1];
          })
  };
  $scope.user();

  $scope.myFriends = function(){
    friendService.myFriends($stateParams.id)
    .then(function(res){
      console.log(res);
      $scope.people = res;
    })
  }
  $scope.myFriends()
})
