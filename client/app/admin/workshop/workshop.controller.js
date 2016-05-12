'use strict';

angular.module('ctSignupApp')
  .controller('WorkshopCtrl', ['$scope', 'Upload', '$http', 'WEBSITE_ENDPOINT', function ($scope, Upload, $http, WEBSITE_ENDPOINT) {
    $scope.addWorkshopText = 'Add Workshop';
    $scope.isEdit = false;
    $scope.workshop = {
      name: '',
      description: ''
    };

    $http.get(WEBSITE_ENDPOINT + '/api/workshops').success(function (res) {
      $scope.workshops = res;
    });

    $scope.setWorkshopImage = function (file, errorFile) {
      if (errorFile.hasOwnProperty(0)) {
        $scope.errorMsg = errorFile[0].$error + ' : ' + errorFile[0].$errorParam;
      }
      if (file) {
        $scope.errorMsg = '';
      }
      $scope.imageFile = file;
    };

    $scope.createWorkshop = function () {
      var dataParams = $scope.workshop;
      if (!$scope.validate(dataParams, ['name', 'description'])) {
        return false;
      }
      if ($scope.imageFile) {
        $scope.imageFile.upload = Upload.upload({
          url: WEBSITE_ENDPOINT + '/api/workshops',
          data: {file: $scope.imageFile, workshop: dataParams}
        }).success(function (res) {
          $scope.workshops.push(res);
          $scope.toggleNewForm();
          $scope.resetForm();
        });
      }
      else {
        alert("Image is missing");
      }
    };

    $scope.removeWorkshop = function (id) {
      if (confirm('Are you sure want to delete?')) {
        $http.delete(WEBSITE_ENDPOINT + '/api/workshops/' + id).success(function (res) {
          for (var i = 0; i < $scope.workshops.length; i++) {
            if ($scope.workshops.hasOwnProperty(i)) {
              if ($scope.workshops[i]._id == id) {
                if ($scope.workshops.length == 1) {
                  $scope.workshops = [];
                }
                else {
                  delete $scope.workshops[i];
                }
                break;
              }
            }
          }
        });
      }
    };

    $scope.updateWorkshop = function (id) {
      var dataParams = $scope.workshop;
      if (!$scope.validate(dataParams, ['name', 'description'])) {
        return false;
      }

      if ($scope.imageFile) {
        $scope.imageFile.upload = Upload.upload({
          url: WEBSITE_ENDPOINT + '/api/workshops/' + id,
          method: 'put',
          data: {file: $scope.imageFile, workshop: dataParams}
        }).success(function (res) {
          $scope.updateView(id, res);
        });
      }
      else {
        $http.put(WEBSITE_ENDPOINT + '/api/workshops/' + id, {workshop: dataParams}).success(function (res) {
          $scope.updateView(id, res);
        });
      }
    };

    $scope.updateView = function (id, res) {
      for (var i = 0; i < $scope.workshops.length; i++) {
        if ($scope.workshops[i]._id == id) {
          $scope.workshops[i] = res;
          break;
        }
      }
      $scope.isEdit = false;
      $scope.resetForm();
      $scope.toggleNewForm();
    };

    $scope.editWorkshop = function (id) {
      $http.get(WEBSITE_ENDPOINT + '/api/workshops/' + id).success(function (res) {
        $scope.workshop = res;
        $scope.newFormVisible = true;
        $scope.imageFile = '';
        $scope.isEdit = true;
        $scope.addWorkshopText = 'Cancel Update';
      });
    };

    $scope.resetForm = function () {
      $scope.workshop = {name: '', description: '', image: ''};
      $scope.imageFile = '';
      $scope.errorMsg = '';
      $scope.workshop_image = false;
    };

    $scope.toggleNewForm = function () {
      $scope.newFormVisible = !$scope.newFormVisible;
      if ($scope.newFormVisible) {
        $scope.addWorkshopText = 'Cancel Workshop';
      }
      else {
        $scope.addWorkshopText = 'Add Workshop';
        $scope.resetForm();
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
