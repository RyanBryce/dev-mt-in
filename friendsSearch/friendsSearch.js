angular.module('app').controller('findCtrl', function($scope, friendService) {

 friendService.getUsers()
 .then(function(res){
   $scope.people = res;
 })

});
