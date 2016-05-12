'use strict';

angular.module('ctSignupApp')
.controller('CtSignupCongratsCtrl', [
  '$scope',
  'PaymentDecorator',
  '$modalInstance',
  'localStorageService',
  'LearningCenter',
  'Course',
  'EducationModel',
  function ($scope, paymentDecorator, $modalInstance, localStorageService, LearningCenter, Course, EducationModel) {
    paymentDecorator($scope);

    $scope.learningCenter = LearningCenter.get(localStorageService.get('learning_center_id'));
    $scope.course = Course.get(localStorageService.get('learning_center_id'), localStorageService.get('course_id'));
    $scope.educationModel = EducationModel.get(localStorageService.get('learning_center_id'), localStorageService.get('course_id'), localStorageService.get('education_model_id'));

    $scope.ok = function () {
      $modalInstance.close();
    };
  }
]);
