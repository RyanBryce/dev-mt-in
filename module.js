angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
   $stateProvider
     .state('/', {
       url: '/',
       templateUrl: 'initial/initial.html',
       controller: 'initialCtrl'
     })
     .state('landing', {
       url: '/landing/:name',
       templateUrl: 'landing/landingPage.html',
       controller: 'landingCtrl'
     })
     .state('Update', {
       url: '/update_Profile/:id',
       templateUrl: 'updateProf/updateProfile.html',
       controller: 'updateCtrl'
     })
     .state('Find', {
       url: '/find_Friends/:id',
       templateUrl: 'friendsSearch/friendsSearch.html',
       controller: 'findCtrl'
     })
     .state('FoundFriend', {
       url: '/found_Friend/:name',
       templateUrl: 'friendsProf/friendsProf.html',
       controller: 'foundCtrl'
     })
     .state('View', {
       url: '/view_Friends/:id',
       templateUrl: 'friendView/friendView.html',
       controller: 'viewCtrl'
     })
});
