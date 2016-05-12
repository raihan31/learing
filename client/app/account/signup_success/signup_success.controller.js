'use strict';

angular.module('ctSignupApp')
  .controller('SignupSuccessCtrl', [
    '$scope',
    '$rootScope',
    'student',
    'learningCenter',
    'course',
    'educationModel',
    'menuItems',
    'headData',
    'socialNetworkNavs',
    function ($scope, $rootScope, student, learningCenter, course, educationModel, menuItems, headData, socialNetworkNavs) {
      $scope.socialNetworkNavs = socialNetworkNavs;
      $scope.menuItems = menuItems;
      $rootScope.$broadcast('head:change', headData);
      $scope.student = student;
      $scope.learningCenter = learningCenter;
      $scope.course = course;
      $scope.educationModel = educationModel;
    }]);
