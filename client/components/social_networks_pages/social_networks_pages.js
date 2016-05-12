'use strict';

angular.module('ctSignupApp')
.factory('socialNetworksPages', function () {
  return [
    {
      url: 'https://www.facebook.com/Coderstrust',
      name: 'Facebook',
      iconClass: 'fa fa-facebook'
    },
    {
      url: 'https://twitter.com/coderstrust',
      name: 'Twitter',
      iconClass: 'fa fa-twitter'
    }
  ];
});
