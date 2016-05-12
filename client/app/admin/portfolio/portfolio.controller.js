'use strict';

angular.module('ctSignupApp')
  .controller('PortfolioCtrl', ['$scope', 'Upload', '$http', 'WEBSITE_ENDPOINT', function ($scope, Upload, $http, WEBSITE_ENDPOINT) {
    $scope.addPortfolioText = 'Add portfolio';
    $scope.isEdit = false;
    $scope.portfolio = {
      name: '',
      subName: '',
      url: ''
    };

    $http.get(WEBSITE_ENDPOINT + '/api/portfolios').success(function (res) {
      $scope.portfolios = res;
    });

    $scope.setPortfolioImage = function (file, errorFile) {
      if (errorFile.hasOwnProperty(0)) {
        $scope.errorMsg = errorFile[0].$error + ' : ' + errorFile[0].$errorParam;
      }
      if (file) {
        $scope.errorMsg = '';
      }
      $scope.imageFile = file;
    };

    $scope.createPortfolio = function () {
      var dataParams = $scope.portfolio;
      if (!$scope.validate(dataParams, ['name', 'url'])) {
        return false;
      }
      if ($scope.imageFile) {
        $scope.imageFile.upload = Upload.upload({
          url: WEBSITE_ENDPOINT + '/api/portfolios',
          data: {file: $scope.imageFile, portfolio: dataParams}
        }).success(function (res) {
          $scope.portfolios.push(res);
          $scope.toggleNewForm();
          $scope.resetForm();
        });
      }
      else {
        alert("Image is missing");
      }
    };

    $scope.removePortfolio = function (id) {
      if (confirm('Are you sure want to delete?')) {
        $http.delete(WEBSITE_ENDPOINT + '/api/portfolios/' + id).success(function (res) {
          for (var i = 0; i < $scope.portfolios.length; i++) {
            if ($scope.portfolios.hasOwnProperty(i)) {
              if ($scope.portfolios[i]._id == id) {
                if ($scope.portfolios.length == 1) {
                  $scope.portfolios = [];
                }
                else {
                  delete $scope.portfolios[i];
                }
                break;
              }
            }
          }
        });
      }
    };

    $scope.updatePortfolio = function (id) {
      var dataParams = $scope.portfolio;
      if (!$scope.validate(dataParams, ['name', 'url'])) {
        return false;
      }
      if ($scope.imageFile) {
        $scope.imageFile.upload = Upload.upload({
          url: WEBSITE_ENDPOINT + '/api/portfolios/' + id,
          method: 'put',
          data: {file: $scope.imageFile, portfolio: dataParams}
        }).success(function (res) {
          $scope.updateView(id, res);
        });
      }
      else {
        $http.put(WEBSITE_ENDPOINT + '/api/portfolios/' + id, {portfolio: dataParams}).success(function (res) {
          $scope.updateView(id, res);
        });
      }
    };

    $scope.updateView = function (id, res) {
      for (var i = 0; i < $scope.portfolios.length; i++) {
        if ($scope.portfolios[i]._id == id) {
          $scope.portfolios[i] = res;
          break;
        }
      }
      $scope.isEdit = false;
      $scope.resetForm();
      $scope.toggleNewForm();
    };

    $scope.editPortfolio = function (id) {
      $http.get(WEBSITE_ENDPOINT + '/api/portfolios/' + id).success(function (res) {
        $scope.portfolio = res;
        $scope.newFormVisible = true;
        $scope.imageFile = '';
        $scope.isEdit = true;
        $scope.addPortfolioText = 'Cancel Update';
      });
    };

    $scope.resetForm = function () {
      $scope.portfolio = {name: '', subName: '', url: '', image: ''};
      $scope.imageFile = '';
      $scope.errorMsg = '';
      $scope.portfolio_image = false;
    };

    $scope.toggleNewForm = function () {
      $scope.newFormVisible = !$scope.newFormVisible;
      if ($scope.newFormVisible) {
        $scope.addPortfolioText = 'Cancel portfolio';
      }
      else {
        $scope.addPortfolioText = 'Add portfolio';
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
