angular.module('app').service('friendService', function($http) {

  this.data = [{
    name: 'names names',
    tagline: 'name',
    bio: '',
    profileUrl: ''
  }];
  this.person = function(){
    console.log(this.data);
    return this.data;
  };

});
