'use strict';
angular.module('ctSignupApp')
.directive('ctSignupSelectBatch', [
  'Batch',
  '$rootScope',
  'localStorageService',
  '$timeout',
  function (Batch, $rootScope, localStorageService, $timeout) {
    return {
      restrict: 'E',
      templateUrl: 'components/signup.selectBatch/signupSelectBatch.html',
      scope: {
        student: '='
      },
      link: function ($scope) {
        function markSelected(id) {
          angular.forEach($scope.batches, function (item) {
            if (item.id === id) {
              $rootScope.$broadcast('batch_id:selected', id);
              item.selected = true;
            } else {
              item.selected = false;
            }
          });
        }

        $scope.batches = [];

        $scope.$on('learning_center_id:selected', function (obj, id) {
          Batch.all(id).then(function (data)  {
            $scope.batches = data;

            var id = localStorageService.get('batch_id');

            if (id) {
              $timeout(function () {
                markSelected(id);
              }, 100);
            }
          });
        });

        $scope.hideOldControls = $scope.$parent.hideOldControls;

        $scope.$on('text-pane:selected', function (obj, id) {
          $scope.student.student_batch_id = id;

          markSelected(id);

          $scope.$digest();
        });

        $scope.isSelected = function () {
          return ((typeof($scope.student.student_batch_id) !== 'undefined'));
        };
      }
    };
  }
]);
