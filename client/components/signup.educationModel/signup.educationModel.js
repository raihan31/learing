'use strict';
angular.module('ctSignupApp')
.directive('ctSignupSelectEducationModel', [
  'EducationModel',
  '$rootScope',
  'localStorageService',
  '$timeout',
  function (EducationModel, $rootScope, localStorageService, $timeout) {
    return {
      restrict: 'E',
      templateUrl: 'components/signup.educationModel/signupEducationModel.html',
      scope: {
        student: '='
      },
      link: function ($scope) {
        function markSelected(id) {
          angular.forEach($scope.educationModels, function (item) {
            if (item.id === id) {
              $rootScope.$broadcast('education_model_id:selected', id);
              item.selected = true;
            } else {
              item.selected = false;
            }
          });
        }

        $scope.educationModels = [];

        $scope.$on('course_id:selected', function (obj, id) {
          EducationModel.all(localStorageService.get('learning_center_id'), id).then(function (data)  {
            $scope.educationModels = data;

            var id = localStorageService.get('education_model_id');

            if (id) {
              $timeout(function () {
                markSelected(id);
              }, 100);
            }
          });
        });

        $scope.hideOldControls = $scope.$parent.hideOldControls;

        $scope.$on('education_model:selected', function (obj, id) {
          $scope.student.education_model_id = id;

          markSelected(id);

          $scope.$digest();
        });

        $scope.isSelected = function () {
          return ((typeof($scope.student.education_model_id) !== 'undefined'));
        };
      }
    };
  }
]);
