'use strict';

angular.module('ctStudentDashboard')
  .factory('loginDecorator', [
    'AuthStudent',
    'FACEBOOK',
    'GOOGLE',
    'STUDENT_API',
    '$http',
    '$rootScope',
    '$state',
    function(AuthStudent, FACEBOOK, GOOGLE, STUDENT_API, $http, $rootScope, $state) {
      return function($scope) {
        $scope.authLocal = function(form) {
          $scope.submitted = true;

          if (form.$valid) {
            AuthStudent
              .login($scope.student)
              .then(function(data) {
                $state.go('student.me.about')
              })
              .catch(function(err) {
                if (err) {
                  $rootScope.$broadcast('error', err);
                  return;
                }
              });
          }
        };

        $scope.authGoogle = function() {
          var redirectUri = 'http://localhost:9000/callback';
          var cliendId = '608577910207.apps.googleusercontent.com';
          var url = 'http://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile&redirect_uri=' + redirectUri + '&response_type=token&client_id=' + cliendId;
          var browserRef = window.open(url, 'Facebook Ouath', 'width=480, height=320');
          var pollTimer = window.setInterval(function() {
            if ((browserRef.document.URL).indexOf(redirectUri) === 0) {
              clearInterval(pollTimer);
              var callbackResponse = (browserRef.document.URL).split('#')[1];
              var responseParameters = (callbackResponse).split('&');
              var parameterMap = [];

              for (var i = 0; i < responseParameters.length; i++) {
                parameterMap[responseParameters[i].split('=')[0]] = responseParameters[i].split('=')[1];
              }

              if (parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
                browserRef.close();
              } else {
                browserRef.close();
              }
            }
          });
        };

        $scope.authFacebook = function() {
          var appScope = ['email'];
          var url = 'https://www.facebook.com/v2.0/dialog/oauth?client_id=' + FACEBOOK.id + '&redirect_uri=' + FACEBOOK.redirectUri + '&response_type=token&scope=' + appScope.join(',');
          var browserRef = window.open(url, 'Facebook Ouath', 'width=480, height=320');
          var pollTimer = window.setInterval(function() {
            if ((browserRef.document.URL).indexOf(FACEBOOK.redirectUri) === 0) {
              clearInterval(pollTimer);
              var callbackResponse = (browserRef.document.URL).split('#')[1];
              var responseParameters = (callbackResponse).split('&');
              var parameterMap = [];

              for (var i = 0; i < responseParameters.length; i++) {
                parameterMap[responseParameters[i].split('=')[0]] = responseParameters[i].split('=')[1];
              }

              if (parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
                $http.post(STUDENT_API + '/api/students/auth/token/facebook', {}, {
                  params: parameterMap
                }).then(function(data) {
                  console.log(data);
                  browserRef.close();
                });

              } else {
                browserRef.close();
              }
            }
          }, 100);
        };
      };
    }
  ]);
