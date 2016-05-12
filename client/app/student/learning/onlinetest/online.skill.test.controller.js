'use strict';

angular.module('ctStudentDashboard')
  .controller('OnlineSkillTestCtrl', function($scope, onlineTestDatas, $stateParams, studentData) {
    console.log(onlineTestDatas);
    $scope.onlineTestsdata = onlineTestDatas;
    angular.forEach($scope.onlineTestsdata, function(testsdata) {
      angular.forEach(testsdata.tests, function(data) {
        if (data.id == $stateParams.testId) {
          $scope.test = data;
          console.log('skill test data',data);
        }
      });
    });
    $scope.studentProfile = studentData;
  });
