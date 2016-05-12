'use strict';

angular.module('ctStudentDashboard')
  .controller('StudentAboutCtrl', [
    '$scope',
    'personalInfoData',
    'authenticateProviders',
    '$http',
    '$q',
    'ENDPOINT',
    '$window',
    '$uibModal',
    'StudentPersonalInfo',
    'courseRelatedData',
    function($scope, personalInfoData, authenticateProviders, $http, $q, ENDPOINT, $window, $uibModal, StudentPersonalInfo, courseRelatedData) {

      //$scope.format = 'yyyy/MM/dd';
      //$scope.date = new Date();

      var deferred = $q.defer();
      $scope.editMode = false;

      $scope.personalInfo = personalInfoData;
      $scope.tempPersonalInfo = personalInfoData;
      console.log($scope.personalInfo);
      $scope.authProviders = authenticateProviders;
      $scope.courses = courseRelatedData;

      $scope.calendar = {
        opened: {},
        dateFormat: 'yyyy-MM-dd',
        dateOptions: {
          formatYear: 'yy',
          startingDay: 1
        },
        open: function($event, which) {
          $event.preventDefault();
          $event.stopPropagation();
          $scope.calendar.opened[which] = true;
        }
      };

      $scope.personalInfoEditSave = function() {
        delete $scope.personalInfo.age;
        console.log($scope.personalInfo);
        StudentPersonalInfo.update(
          $scope.personalInfo,
          function(response) {
            deferred.resolve(response);
            console.log(response);
            $scope.personalInfo = response;
            $scope.editMode = !$scope.editMode;

          },
          function(response) {
            deferred.reject(response);
          });

      }

      $scope.personalInfoEditCancel = function() {
        $scope.personalInfo = personalInfoData;
        $scope.editMode = !$scope.editMode;
      }

      $scope.authenticationCheck = function(Url) {
        $uibModal.open({
            animation: true,
            templateUrl: 'components/ct_student_auth_question_modal/ct_student_auth_question.html',
            controller: 'StudentAuthModalCtrl',
            size: 'md',
            resolve: {
              items: function() {
                return {
                  url: Url,
                  id: $scope.personalInfo.id,
                  headerText: 'Authentication Confirmation',
                  text: 'Are sure to add this authenticaton??'
                };
              }
            }
          })
          .result
          .then(function(res) {

          }, function(res) {});
      }
    }
  ]);
