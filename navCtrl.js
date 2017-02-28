angular.module('app').controller('navCtrl',function($scope, $location, $stateParams){
  // console.log('this is location', $location.path())
  // console.log('this is', $stateParams.id);
  $scope.personsId = $stateParams.id
  // console.log($scope.personsId);

  $scope.isActive = function(viewLocation) {
    return viewLocation == $location.path();

  };

  $scope.classActive = function( viewLocation ) {
    // console.log(viewLocation);
    if( $scope.isActive(viewLocation) ) {
      return 'loaded';
    }
    else {
      return false;
    }
  }
});


  //var pages = ['view', 'find', 'update'];
   //
  //  $scope.activeNav = function (clickedNavView) {
  //    pages.forEach(function(page) {
  //           if (page === clickedNavView) {
  //               $scope[page] = true;
  //           } else {
  //               $scope[page] = false;
  //           }
  //     })
  //   }
