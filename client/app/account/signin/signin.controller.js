 'use strict';
 angular.module('ctSignupApp')
   .controller('SigninCtrl', [
     '$scope',
     '$rootScope',
     'menuItems',
     'socialNetworkNavs',
     function ($scope, $rootScope, menuItems, socialNetworkNavs) {
       $scope.student = {
         hideSingUpNav: true
       };

       $rootScope.$on('signed-in', function (e, data) {
         window.location = 'http://www.coderstrust.com/students/' + data.student_id;
       });

       $scope.menuItems = menuItems;
       $scope.socialNetworkNavs = socialNetworkNavs;
     }
   ]);
