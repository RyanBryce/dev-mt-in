angular.module('app').controller('findCtrl', function($scope, friendService, $stateParams, $rootScope) {

    // friendService.getUsers()
    //   .then(function(res) {
    //       $scope.people = res;
    //   });
    $scope.searchBox = "";

    $scope.$watch('searchBox', function(){
      friendService.getFriendsByName($scope.searchBox)
        .then(function(res) {
          console.log(res);
          if (res.name = $scope.searchBox) {
            $scope.people = res;
          }
        });
    })

    $rootScope.globalUserId = $stateParams.id;
    console.log('this is global id', $rootScope.globalUserId);


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

});
