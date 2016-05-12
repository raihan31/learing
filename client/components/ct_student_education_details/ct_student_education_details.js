'use strict';

angular.module('ctStudentDashboard')
  .directive('ctStudentEducationDetails',
    function($q, StudentEduDetailsfactory, StudentEduDetailsDelete, $state) {
      return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'components/ct_student_education_details/ct_student_education_details.html',
        scope: {
          data: '=personalInfo',
        },
        link: function($scope) {
          var deferred = $q.defer();
          console.log($scope.data);

          StudentEduDetailsfactory.get({
              id: $scope.data.id
            }, function(response) {
              deferred.resolve(response);
              console.log(response);
              $scope.studentEducations = response;
              console.log('data come',response)
            },
            function(response) {
              deferred.reject(response);
              console.log(response);
            });


          $scope.EducationDelete = function(education_id) {
            StudentEduDetailsDelete.drop({
              id: $scope.data.id,
              edu_id: education_id
            }, function(response) {
              console.log(response);
              $state.go('student.me.about', {}, {
                reload: true
              });
            }, function(response) {
              console.log(response);
              $state.go('student.me.about', {}, {
                reload: true
              });
            });
            //slowAlert('EducationDelete');
          }
        }

      }
    }
  );
