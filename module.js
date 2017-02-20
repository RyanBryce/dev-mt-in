angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
   $stateProvider
     .state('/', {
       url: '/',
       templateUrl: 'initial/initial.html',
       controller: 'initialCtrl'
     })
     .state('landing', {
       url: '/landing',
       templateUrl: 'landing/landingPage.html',
       controller: 'landingCtrl'
     })
     .state('Update', {
       url: '/update_Profile',
       templateUrl: 'updateProf/updateProfile.html',
       controller: 'updateCtrl'
     })
     .state('Find', {
       url: '/find_Friends',
       templateUrl: 'friendsSearch/friendsSearch.html',
       controller: 'findCtrl'
     })
     .state('View', {
       url: '/view_Friends',
       templateUrl: 'friendView/friendView.html',
       controller: 'viewCtrl'
     })
});
