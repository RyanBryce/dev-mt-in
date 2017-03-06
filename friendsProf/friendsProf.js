angular.module('app').controller('foundCtrl', function ($scope, $rootScope, friendService, $stateParams ) {
  var user = $stateParams.name;
  console.log('this is params', user);
console.log('this is global id', $rootScope.globalUserId)
  $scope.user = function() {
    friendService.getMe($stateParams.name)
    .then(function(res) {
      console.log(res);
      $scope.person = res;
      console.log($scope.person);
      return $scope.person
    }).then(function(person){
      var split = person.name.split(' ');
      console.log(split);
      $scope.firstName = split[0];
      $scope.lastName = split[split.length - 1];
    })
  }
  $scope.user();
  $scope.addfriend = function(personId) {

    console.log('this is friend id', personId);

    friendService.addfriend($rootScope.globalUserId, personId)

  }


})
