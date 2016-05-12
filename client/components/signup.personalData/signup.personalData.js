'use strict';
angular.module('ctSignupApp')
  .directive('ctSignupPersonalData', [
    '$rootScope',
    '$window',
    'SignupSTM',
    function ($rootScope, $window, SignupSTM) {
      return {
        restrict: 'E',
        templateUrl: 'components/signup.personalData/signupPersonalData.html',
        scope: {
          student: '='
        },
        link: function ($scope) {
          $scope.tabs = [{
            active: false
          }, {
            active: false
          }, ];

          $scope.makeTabActive = function (index) {
            $scope.activeTabIndex = index;
            angular.forEach($scope.tabs, function (item, i) {
              if (i === index) {
                item.active = true;
              } else {
                item.active = false;
              }
            });
          };

          $scope.makeTabActive(0);

          $rootScope.$on('signed-up', function (e, data) {
            console.log(e, data);
            $rootScope.$broadcast('student_id:saved', data);
            $window.ga('send', 'event', 'button', 'click', data.email, SignupSTM.currentState);
            $scope.student.student_id = data.student_id;
            SignupSTM.next();
          });

          $rootScope.$on('signed-in', function (e, data) {
            console.log(e, data);
            $rootScope.$broadcast('student_id:saved', data);
            $window.ga('send', 'event', 'button', 'click', data.email, SignupSTM.currentState);
            $scope.student.student_id = data.student_id;
            SignupSTM.next();
          });
        }
      };
    }
  ]);
