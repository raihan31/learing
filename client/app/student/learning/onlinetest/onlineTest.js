'use strict'
angular.module('ctStudentDashboard')
  .config(function($stateProvider) {
    $stateProvider
      .state('student.learning.onlinetests', {
        url: '/online-tests',
        ncyBreadcrumb: {
          label: 'online-tests',
          parent: 'student.learning'
        },
        views: {
          '@student.learning': {
            templateUrl: 'app/student/learning/onlinetest/onlinetests.html',
            controller: 'OnlineTestsCtrl',
            resolve: {
              studentData: function(studentData) {
                return studentData;
              }
            }
          }
        },
        resolve: {
          onlineTestDatas: function($q, StudentOnlineTestsRequired) {
            var deferred = $q.defer();
            StudentOnlineTestsRequired.get({},
              function(response) {
                deferred.resolve(response);
              },
              function(response) {
                deferred.reject(response);
              });
            return deferred.promise;

          }
        }
      })
      .state('student.learning.onlinetests.details', {
        url: '/:testId',
        ncyBreadcrumb: {
          label: 'descriptions',
          parent: 'student.learning.onlinetests'
        },
        views: {
          '@student.learning': {
            templateUrl: 'app/student/learning/onlinetest/onlinetest.html',
            controller: 'OnlineSkillTestCtrl',
          }
        },
        resolve: {
          onlineTestDatas: function(onlineTestDatas) {
            return onlineTestDatas;
          }
        }
      })
      .state('student.learning.onlinetests.details.start', {
        url: '/start',
        ncyBreadcrumb: {
          label: 'start',
        },
        views: {
          '@student.learning': {
            templateUrl: 'app/student/learning/onlinetest/onlinetestStart.html',
            controller: 'OnlineSkillTestQuestionCtrl',
          }
        },
        resolve: {
          onlineTestData: function($q, $stateParams, StudentOnlineTest) {
            var deferred = $q.defer();
            StudentOnlineTest.getQuestions({
                id: $stateParams.testId
              },
              function(response) {
                console.log(response);
                deferred.resolve(response);
              },
              function(response) {
                deferred.reject(response);
              });
            return deferred.promise;
          }
        }
      })
  });
