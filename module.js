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
});
