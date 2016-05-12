'use strict';

angular.module('ctSignupApp')
  .controller('MentorCtrl', ['$scope', 'Upload', '$http', 'WEBSITE_ENDPOINT', function ($scope, Upload, $http, WEBSITE_ENDPOINT) {
    $scope.addMentorText = 'Add mentor';
    $scope.isEdit = false;
    $scope.mentor = {
      name: '',
      position: '',
      shortDescription: '',
      skills: []
    };

    $http.get(WEBSITE_ENDPOINT + '/api/mentors').success(function (res) {
      $scope.mentors = res;
    });

    $scope.setMentorImage = function (file, errorFile) {
      if (errorFile.hasOwnProperty(0)) {
        $scope.errorMsg = errorFile[0].$error + ' : ' + errorFile[0].$errorParam;
      }
      if (file) {
        $scope.errorMsg = '';
      }
      $scope.imageFile = file;
    };

    $scope.createMentor = function () {
      var dataParams = $scope.mentor;
      if (!$scope.validate(dataParams, ['name', 'position'])) {
        return false;
      }
      if ($scope.imageFile) {
        $scope.imageFile.upload = Upload.upload({
          url: WEBSITE_ENDPOINT + '/api/mentors',
          data: {file: $scope.imageFile, mentor: dataParams}
        }).success(function (res) {
          $scope.mentors.push(res);
          $scope.toggleNewForm();
          $scope.resetForm();
        });
      }
      else {
        alert("Mentor image is missing");
      }
    };

    $scope.removeMentor = function (id) {
      if (confirm('Are you sure want to delete?')) {
        $http.delete(WEBSITE_ENDPOINT + '/api/mentors/' + id).success(function (res) {
          for (var i = 0; i < $scope.mentors.length; i++) {
            if ($scope.mentors.hasOwnProperty(i)) {
              if ($scope.mentors[i]._id == id) {
                if ($scope.mentors.length == 1) {
                  $scope.mentors = [];
                }
                else {
                  delete $scope.mentors[i];
                }
                break;
              }
            }
          }
        });
      }
    };

    $scope.updateMentor = function (id) {
      var dataParams = $scope.mentor;
      if (!$scope.validate(dataParams, ['name', 'position'])) {
        return false;
      }
      if ($scope.imageFile) {
        $scope.imageFile.upload = Upload.upload({
          url: WEBSITE_ENDPOINT + '/api/mentors/' + id,
          method: 'put',
          data: {file: $scope.imageFile, mentor: dataParams}
        }).success(function (res) {
          $scope.updateView(id, res);
        });
      }
      else {
        $http.put(WEBSITE_ENDPOINT + '/api/mentors/' + id, {mentor: dataParams}).success(function (res) {
          $scope.updateView(id, res);
        });
      }
    };

    $scope.updateView = function (id, res) {
      for (var i = 0; i < $scope.mentors.length; i++) {
        if ($scope.mentors[i]._id == id) {
          $scope.mentors[i] = res;
          break;
        }
      }
      $scope.isEdit = false;
      $scope.resetForm();
      $scope.toggleNewForm();
    };

    $scope.editMentor = function (id) {
      $http.get(WEBSITE_ENDPOINT + '/api/mentors/' + id).success(function (res) {
        $scope.mentor = res;
        $scope.newFormVisible = true;
        $scope.imageFile = '';
        $scope.isEdit = true;
        $scope.addMentorText = 'Cancel Update';
      });
    };

    $scope.resetForm = function () {
      $scope.imageFile = '';
      $scope.errorMsg = '';
      $scope.mentor_image = false;
    };

    $scope.toggleNewForm = function () {
      $scope.newFormVisible = !$scope.newFormVisible;
      if ($scope.newFormVisible) {
        $scope.mentor = {
          name: '',
          position: '',
          shortDescription: '',
          skills: []
        };
        $scope.addMentorText = 'Cancel mentor';
      }
      else {
        $scope.addMentorText = 'Add mentor';
        $scope.resetForm();
      }
    };

    $scope.addSkill = function () {
      var newSkill = {
        name: ''
      };
      $scope.mentor.skills.push(newSkill);
    };

    $scope.removeSkill = function (index) {
      if (confirm('Are you sure want to remove?')) {
        $scope.mentor.skills.splice(index, 1);
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
    };

  }]);
