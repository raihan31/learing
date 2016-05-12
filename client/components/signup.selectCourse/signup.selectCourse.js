'use strict';
angular.module('ctSignupApp')
.directive('ctSignupSelectCourse', [
  'Course',
  '$rootScope',
  'localStorageService',
  '$timeout',
  function (Course, $rootScope, localStorageService, $timeout) {
    return {
      restrict: 'E',
      templateUrl: 'components/signup.selectCourse/signupSelectCourse.html',
      scope: {
        student: '='
      },
      link: function ($scope) {
        function markSelected(id) {
          angular.forEach($scope.courses, function (item) {
            if (item.id === id) {
              $rootScope.$broadcast('course_id:selected', id);
              item.selected = true;
            } else {
              item.selected = false;
            }
          });
        }

        $scope.courses = [];

        $scope.$on('learning_center_id:selected', function (obj, id) {
          Course.all(id).then(function (data)  {
            angular.forEach(data, function (item) {
              if (item.svg) {
                item.icon = item.svg;
                console.log(item);
                item.description = item.short_description;
                item.features = item.features.arr;
              }
            });
            $scope.courses = data;

            var id = localStorageService.get('course_id');

            if (id) {
              $timeout(function () {
                markSelected(id);
              }, 100);
            }
          });

        });

        $scope.hideOldControls = $scope.$parent.hideOldControls;

        $scope.$on('course:selected', function (obj, id) {
          $scope.student.course_id = id;
          markSelected(id);

          $scope.$digest();
        });

        $scope.isSelected = function () {
          return (typeof($scope.student.course_id) !== 'undefined');
        };
      }
    };
  }
]);
