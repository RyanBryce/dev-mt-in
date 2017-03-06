angular.module('app').controller('landingCtrl', function($scope, friendService, $stateParams, $state, $rootScope) {
    var user = $stateParams.name;
    console.log('this is params', user);

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
    console.log('this is global id', $rootScope.globalUserId);




    // $scope.splitter = function(){
    // var nameSplit = $scope.user().split(' ');
    // $scope.firstName = nameSplit[0];
    // $scope.lastName = nameSplit[nameSplit.length - 1];
    // }
    // $scope.splitter();




})
