'use strict';

angular.module('ctStudentDashboard')
  .controller('StudentCourseContentCtrl', function($scope, lessonContentDescriptionData, $sce) {
    $scope.lessonContent = lessonContentDescriptionData;
    console.log('lesson content',lessonContentDescriptionData);
  });
