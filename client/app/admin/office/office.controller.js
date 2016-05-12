'use strict';

angular.module('ctSignupApp')
  .controller('OfficeCtrl', ['$scope', '$http', 'WEBSITE_ENDPOINT', function ($scope, $http, WEBSITE_ENDPOINT) {
    $scope.addOfficeText = 'Add office';
    $scope.isEdit = false;
    $scope.office = {
      name: '',
      address: '',
      phones: [null],
      location: {
        lat: '',
        lng: ''
      }
    };

    $http.get(WEBSITE_ENDPOINT + '/api/offices').success(function (res) {
      $scope.offices = res;
    });

    $scope.createOffice = function () {
      var dataParams = $scope.office;
      if ($scope.validate(dataParams, ['name', 'address'])) {
        $http.post(WEBSITE_ENDPOINT + '/api/offices', dataParams).success(function (res) {
          $scope.offices.push(res);
          $scope.toggleNewForm();
          $scope.resetForm();
        });
      }
    };

    $scope.removeOffice = function (id) {
      if (confirm('Are you sure want to delete?')) {
        $http.delete(WEBSITE_ENDPOINT + '/api/offices/' + id).success(function (res) {
          for (var i = 0; i < $scope.offices.length; i++) {
            if ($scope.offices.hasOwnProperty(i)) {
              if ($scope.offices[i]._id == id) {
                if ($scope.offices.length == 1) {
                  $scope.offices = [];
                }
                else {
                  delete $scope.offices[i];
                }
                break;
              }
            }
          }
        });
      }
    };

    $scope.updateOffice = function (id) {
      var dataParams = $scope.office;
      if ($scope.validate(dataParams, ['name', 'description'])) {
        $http.put(WEBSITE_ENDPOINT + '/api/offices/' + id, dataParams).success(function (res) {
          $scope.updateView(id, res);
        });
      }
    };

    $scope.updateView = function (id, res) {
      for (var i = 0; i < $scope.offices.length; i++) {
        if ($scope.offices[i]._id == id) {
          $scope.offices[i] = res;
          break;
        }
      }
      $scope.isEdit = false;
      $scope.resetForm();
      $scope.toggleNewForm();
    };

    $scope.editOffice = function (id) {
      $http.get(WEBSITE_ENDPOINT + '/api/offices/' + id).success(function (res) {
        $scope.office = res;
        $scope.newFormVisible = true;
        $scope.imageFile = '';
        $scope.isEdit = true;
        $scope.addOfficeText = 'Cancel Update';
      });
    };

    $scope.resetForm = function () {
      $scope.office = {
        name: '',
        address: '',
        phones: [null],
        location: [{
          lat: '',
          lng: ''
        }]
      };
    };

    $scope.addPhone = function () {
      $scope.office.phones.push('');
    };

    $scope.removePhone = function (index) {
      $scope.office.phones.splice(index, 1);
    };

    $scope.toggleNewForm = function () {
      $scope.newFormVisible = !$scope.newFormVisible;
      if ($scope.newFormVisible) {
        $scope.addOfficeText = 'Cancel office';
      }
      else {
        $scope.addOfficeText = 'Add office';
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
    }

  }]);
