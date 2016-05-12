'use strict';

angular.module('ctSignupApp')
  .controller('CustomerReviewCtrl', ['$scope', 'Upload', '$http', 'WEBSITE_ENDPOINT', function ($scope, Upload, $http, WEBSITE_ENDPOINT) {
    $scope.addCustomerReviewText = 'Add Customer Review';
    $scope.createReview = true;
    $scope.customerReview = {name: '', designation: '', review: ''};
    $http.get(WEBSITE_ENDPOINT + '/api/customer_reviews').success(function (res) {
      $scope.customerReviews = res;
    });

    $scope.createCustomerReview = function () {
      var dataParams = $scope.customerReview;
      if (!$scope.validate(dataParams, ['name', 'review'])) {
        return false;
      }
      $http.post(WEBSITE_ENDPOINT + '/api/customer_reviews', dataParams).success(function (res) {
        $scope.customerReviews.push(res);
        $scope.toggleNewForm();
        $scope.resetForm();
      });
    };

    $scope.removeCustomerReview = function (id) {
      if (confirm('Are you sure want to delete?')) {
        $http.delete(WEBSITE_ENDPOINT + '/api/customer_reviews/' + id).success(function (res) {
          for (var i = 0; i < $scope.customerReviews.length; i++) {
            if ($scope.customerReviews[i]._id == id) {
              if ($scope.customerReviews.length == 1) {
                $scope.customerReviews = [];
              }
              else {
                delete $scope.customerReviews[i];
              }
              break;
            }
          }
        });
      }
      console.log($scope.customerReviews);
    };

    $scope.updateCustomerReview = function (id) {
      var dataParams = $scope.customerReview;
      if (!$scope.validate(dataParams, ['name', 'review'])) {
        return false;
      }
      $http.put(WEBSITE_ENDPOINT + '/api/customer_reviews/' + id, dataParams).success(function (res) {
        for (var i = 0; i < $scope.customerReviews.length; i++) {
          if ($scope.customerReviews[i]._id == id) {
            var updateStory = $scope.customerReviews[i];
            updateStory.name = res.name;
            updateStory.designation = res.designation;
            updateStory.review = res.review;
            break;
          }
        }
        $scope.createStory = true;
        $scope.resetForm();
        $scope.toggleNewForm();
      });
    };

    $scope.editCustomerReview = function (id) {
      $http.get(WEBSITE_ENDPOINT + '/api/customer_reviews/' + id).success(function (res) {
        $scope.customerReview = res;
        $scope.newFormVisible = true;
        $scope.createReview = false;
        $scope.addCustomerReviewText = 'Cancel Update';
      });
    };

    $scope.resetForm = function () {
      $scope.customerReview = {name: '', designation: '', review: ''}
    };

    $scope.toggleNewForm = function () {
      $scope.newFormVisible = !$scope.newFormVisible;
      if ($scope.newFormVisible) {
        $scope.addCustomerReviewText = 'Cancel Customer Review';
      }
      else {
        $scope.addCustomerReviewText = 'Add Customer Review';
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
