'use strict';

angular.module('ctSignupApp')
  .controller('CourseCtrl', ['$scope', 'Upload', '$http', 'WEBSITE_ENDPOINT', function ($scope, Upload, $http, WEBSITE_ENDPOINT) {
    $scope.addCourseText = 'Add course';
    $scope.isEdit = false;
    $scope.course = {
      name: '',
      description: '',
      features: []
    };

    $http.get(WEBSITE_ENDPOINT + '/api/courses').success(function (res) {
      $scope.courses = res;
    });

    $scope.createCourse = function () {
      var dataParams = $scope.course;
      if ($scope.validate(dataParams, ['name', 'descriptiodn'])) {
        $http.post(WEBSITE_ENDPOINT + '/api/courses', dataParams).success(function (res) {
          $scope.courses.push(res);
          $scope.toggleNewForm();
          $scope.resetForm();
        });
      }
    };

    $scope.removeCourse = function (id) {
      if (confirm('Are you sure want to delete?')) {
        $http.delete(WEBSITE_ENDPOINT + '/api/courses/' + id).success(function (res) {
          for (var i = 0; i < $scope.courses.length; i++) {
            if ($scope.courses.hasOwnProperty(i)) {
              if ($scope.courses[i]._id == id) {
                if ($scope.courses.length == 1) {
                  $scope.courses = [];
                }
                else {
                  delete $scope.courses[i];
                }
                break;
              }
            }
          }
        });
      }
    };

    $scope.updateCourse = function (id) {
      var dataParams = $scope.course;
      if ($scope.validate(dataParams, ['name', 'description'])) {
        $http.put(WEBSITE_ENDPOINT + '/api/courses/' + id, dataParams).success(function (res) {
          $scope.updateView(id, res);
        });
      }
    };

    $scope.updateView = function (id, res) {
      for (var i = 0; i < $scope.courses.length; i++) {
        if ($scope.courses[i]._id == id) {
          $scope.courses[i] = res;
          break;
        }
      }
      $scope.isEdit = false;
      $scope.resetForm();
      $scope.toggleNewForm();
    };

    $scope.editCourse = function (id) {
      $http.get(WEBSITE_ENDPOINT + '/api/courses/' + id).success(function (res) {
        $scope.course = res;
        $scope.newFormVisible = true;
        $scope.imageFile = '';
        $scope.isEdit = true;
        $scope.addCourseText = 'Cancel Update';
      });
    };

    $scope.resetForm = function () {
      $scope.imageFile = '';
      $scope.errorMsg = '';
      $scope.course_image = false;
    };

    $scope.toggleNewForm = function () {
      $scope.newFormVisible = !$scope.newFormVisible;
      if ($scope.newFormVisible) {
        $scope.course = {
          name: '',
          description: '',
          features: []
        };
        $scope.addCourseText = 'Cancel course';
      }
      else {
        $scope.addCourseText = 'Add course';
        $scope.resetForm();
      }
    };

    $scope.addFeature = function () {
      var newFeature = {
        name: '',
        value: ''
      };
      $scope.course.features.push(newFeature);
    };

    $scope.removeFeature = function (index) {
      if (confirm('Are you sure want to remove?')) {
        $scope.course.features.splice(index, 1);
      }
    };

    $scope.validate = function (obj, fields) {
      console.log(obj);
      for (var i = 0; i <= fields.length; i++) {
        var field = fields[i];
        if (obj.hasOwnProperty(field) && (obj[field] == '' || typeof obj[field] == 'undefined')) {
          alert(field + ' is required');
          return false;
        }
      }
      return true;
    }

  }]);
