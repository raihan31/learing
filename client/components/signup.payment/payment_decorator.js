'use strict';

angular.module('ctSignupApp')
.factory('PaymentDecorator', [
  'localStorageService',
  'EducationModel',
  'Batch',
  'Course',
  'LearningCenter',
  '$timeout',
  function (localStorageService, EducationModel, Batch, Course, LearningCenter, $timeout) {
    return function ($scope) {
      $scope.$on('learning_center_id:selected', function (obj, id) {
        if (!$scope.learningCenter || ($scope.learningCenter.id !== id)) {
          $scope.learningCenter = LearningCenter.get(id);
        }
      });

      $scope.$on('batch_id:selected', function (obj, id) {
        $scope.batch = Batch.get($scope.learningCenter.id, id);
      });

      $scope.$on('education_model_id:selected', function (obj, id) {
        $scope.educationModel = EducationModel.get($scope.learningCenter.id, $scope.course.id, id);

        $timeout(function () {
          $scope.$digest();
        }, 200);
      });

      $scope.$on('course_id:selected', function (obj, id) {
        $scope.course = Course.get($scope.learningCenter.id, id);
      });

      $scope.showPrice = function () {
        if ($scope.educationModel) {
          return $scope.educationModel.course_fee ? $scope.educationModel.course_fee : $scope.educationModel.security_deposit;
        }
      };

      $scope.showPriceName = function () {
        if ($scope.educationModel) {
          return $scope.educationModel.course_fee ? 'enrollment fee' : 'security deposit';
        }
      };
    }
  }
])
