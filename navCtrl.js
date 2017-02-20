angular.module('app').controller('navCtrl',function($scope){
    var pages = ['view', 'find', 'update'];

   $scope.activeNav = function (clickedNavView) {
     pages.forEach(function(page) {
            if (page === clickedNavView) {
                $scope[page] = true;
            } else {
                $scope[page] = false;
            }
      })
    }



});
