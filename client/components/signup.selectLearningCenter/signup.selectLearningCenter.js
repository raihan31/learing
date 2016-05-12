'use strict';

angular.module('ctSignupApp')
.directive('ctSignupSelectLearningCenter', [
  'LearningCenter',
  '$rootScope',
  'localStorageService',
  '$timeout',
  '$uibModal',
  function (LearningCenter, $rootScope, localStorageService, $timeout, $uibModal) {
    return {
      restrict: 'E',
      templateUrl: 'components/signup.selectLearningCenter/signupSelectLearningCenter.html',
      scope: {
        student: '='
      },
      link: function ($scope) {

        function markSelected(id) {
          angular.forEach($scope.centers, function (item) {
            if (item.id === id) {
              $rootScope.$broadcast('learning_center_id:selected', id);

              item.selected = true;
            } else {
              item.selected = false;
            }
          });
        }
        $rootScope.$on('student_id:saved', function (e, data) {
          console.log(e, data);
          $scope.centers = LearningCenter.all(data.student_id).then(function (data)  {
            $scope.centers = data;

            if (!data.length) {
              var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'components/ct_modal/ct_modal.html',
                controller: 'LCNotFoundModalCtrl',
                resolve: {
                  text: function () {
                    return {
                      title: 'We are so sorry',
                      body: 'But we do not have learning centers in your country.'
                    };
                  }
                }
              });

              modalInstance.result.then(function (agreed) {
                if (agreed) {
                  $rootScope.$broadcast('application:reset');
                }
              });
            }

            var id = localStorageService.get('learning_center_id');

            if (id) {
              $timeout(function () {
                markSelected(id);
              }, 100);
            }
          });

        });
        $scope.$on('learning_center:selected', function (obj, id) {
          $scope.student.learning_center_id = id;

          markSelected(id);

          $scope.$digest();
        });

        $scope.hideOldControls = $scope.$parent.hideOldControls;

        $scope.isSelected = function () {
          return (typeof($scope.student.learning_center_id) !== 'undefined');
        };

        $scope.learningCenterImg = function (index) {
          return '/assets/images/house_' + index + '.png';
        };
      }
    };
  }
])
.controller('LCNotFoundModalCtrl', [
  '$scope',
  '$modalInstance',
  '$state',
  'text',
  function ($scope, $modalInstance, $state, text) {
    $scope.text = text;
    $scope.ok = function (v) {
      $modalInstance.close(v);
      $state.go('/');
    };
  }
]);
