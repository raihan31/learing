'use strict';

angular.module('ctSignupApp')
  .directive('ctSignupForm', [
    '$rootScope',
    'ENDPOINT',
    '$timeout',
    '$http',
    function($rootScope, ENDPOINT, $timeout, $http) {
      return {
        restrict: 'E',
        templateUrl: 'components/ct_signup/ct_signup.html',
        scope: {
          student: '='
        },
        link: function ($scope, el, attrs) {
          $http.get(ENDPOINT+'/api/countries.json')
          .then(function(response){
            $scope.countries = response.data;
          });
          $scope.student_form = {};
          $scope.student_form.source = $scope.student.source;

          if (typeof(attrs.fullWidth) !== 'undefined' && parseInt(attrs.fullWidth)) {
            $scope.fullWidth = true;
          }
          
          $scope.signUp = function(form) {
            $scope.submitted = true;
            if (form.$valid) {
              delete $scope.errors;
              $scope.student_form.country_id = $scope.country_check.id;
              $http.post(ENDPOINT + '/api/students.json', {
                  student: $scope.student_form
                })
                .then(function(data) {
                  data = data.data;
                  if (!data.errors) {
                    $timeout(function() {
                      $rootScope.$broadcast('signed-up', data);
                    }, 200);
                  } else {
                    for (var n in data.errors) {
                      data.errors[n] = data.errors[n].join('. ');
                    }

                    $scope.errors = data.errors;
                  }
                });
            }
          };
        }
      };
    }
  ]);
