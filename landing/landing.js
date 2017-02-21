angular.module('app').controller('landingCtrl', function($scope, friendService){
  $scope.person = friendService.person();
  console.log($scope.person);

  $scope.splitter = function(){
  var nameSplit = $scope.person.name.split(' ');
  $scope.firstName = nameSplit[0];
  $scope.lastName = nameSplit[nameSplit.length - 1];
  }
  $scope.splitter();




})
