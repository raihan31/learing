'use strict'
angular.module('ctStudentDashboard')
  .controller('StudentEducationModalCtrl', function($scope, $uibModalInstance, items, StudentEduDetailsfactory) {
    $scope.cancel = function() {
      $uibModalInstance.close();
    }

    var year = new Date().getFullYear();
    var range = [];
    range.push(year);
    for (var i = 1; i < 30; i++) {
      range.push(year - i);
    }
    $scope.years = range;

    $scope.studentEducationSave = function(form, education) {
      $scope.submitted = true;
      console.log(education);
      if (form.$valid) {
        StudentEduDetailsfactory.post({
          id: items.id
        }, education, function(response) {
          console.log(response);
          $scope.$emit('EducationSave', response);
          $uibModalInstance.close(response);
        }, function(response) {
          console.log(response);
        });
      } else {
        console.log("Check error");
        $scope.submitted = false;
      }
    }

  });
