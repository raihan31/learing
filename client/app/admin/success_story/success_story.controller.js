'use strict';

angular.module('ctSignupApp')
  .controller('SuccessStoryCtrl', ['$scope', 'Upload', '$http', 'WEBSITE_ENDPOINT', function ($scope, Upload, $http, WEBSITE_ENDPOINT) {
    $scope.addSuccessStoryText = 'Add Success Story';
    $scope.createStory = true;
    $scope.successStory = {
      name: '',
      story: '',
      earning: '',
      socialNetworks: []
    };

    $http.get(WEBSITE_ENDPOINT + '/api/success_stories').success(function (res) {
      $scope.successStories = res;
    });

    $scope.setFile = function (file, errorFile) {
      if (errorFile.hasOwnProperty(0)) {
        $scope.errorMsg = errorFile[0].$error + ' : ' + errorFile[0].$errorParam;
      }
      if (file) {
        $scope.errorMsg = '';
        console.log(file);
      }
      $scope.imageFile = file;
    };

    $scope.createSuccessStory = function () {
      var dataParams = $scope.successStory;
      if (!$scope.validate(dataParams, ['name', 'story'])) {
        return false;
      }
      if ($scope.imageFile) {
        $scope.imageFile.upload = Upload.upload({
          url: WEBSITE_ENDPOINT + '/api/success_stories',
          data: {file: $scope.imageFile, successStory: dataParams}
        }).success(function (res) {
          $scope.successStories.push(res);
          $scope.toggleNewForm();
          $scope.resetForm();
        });
      }
      else {
        alert("Image is missing");
      }
    };

    $scope.addSocialNetwork = function () {
      var newSocialNetwork = {
        iconClass: '',
        url: '',
        name: ''
      };
      $scope.successStory.socialNetworks.push(newSocialNetwork);
    };

    $scope.removeSocialNetwork = function (index) {
      if (confirm('Are you sure want to remove?')) {
        $scope.successStory.socialNetworks.splice(index, 1);
      }
    };

    $scope.removeSuccessStory = function (id) {
      if (confirm('Are you sure want to delete?')) {
        $http.delete(WEBSITE_ENDPOINT + '/api/success_stories/' + id).success(function (res) {
          for (var i = 0; i < $scope.successStories.length; i++) {
            if ($scope.successStories.hasOwnProperty(i)) {
              if ($scope.successStories[i]._id == id) {
                if ($scope.successStories.length == 1) {
                  $scope.successStories = [];
                }
                else {
                  delete $scope.successStories[i];
                }
                break;
              }
            }
          }
        });
      }
    };

    $scope.updateSuccessStory = function (id) {
      var dataParams = $scope.successStory;
      if (!$scope.validate(dataParams, ['name', 'story'])) {
        return false;
      }
      if ($scope.imageFile) {
        $scope.imageFile.upload = Upload.upload({
          url: WEBSITE_ENDPOINT + '/api/success_stories/' + id,
          method: 'put',
          data: {file: $scope.imageFile, successStory: dataParams}
        }).success(function(res) {
          $scope.updateView(id, res);
        });
      }
      else {
        $http.put(WEBSITE_ENDPOINT + '/api/success_stories/' + id, {successStory: dataParams}).success(function (res) {
          $scope.updateView(id, res);
        });
      }
    };

    $scope.updateView = function (id, res) {
      for (var i = 0; i < $scope.successStories.length; i++) {
        if ($scope.successStories[i]._id == id) {
          var updateStory = $scope.successStories[i];
          updateStory.name = res.name;
          updateStory.story = res.story;
          updateStory.earning = res.earning;
          updateStory.image = res.image;
          updateStory.socialNetworks = res.socialNetworks;
          break;
        }
      }
      $scope.createStory = true;
      $scope.resetForm();
      $scope.toggleNewForm();
    };

    $scope.editSuccessStory = function (id) {
      $http.get(WEBSITE_ENDPOINT + '/api/success_stories/' + id).success(function (res) {
        $scope.successStory = res;
        $scope.newFormVisible = true;
        $scope.createStory = false;
        $scope.addSuccessStoryText = 'Cancel Update';
      });
    };

    $scope.resetForm = function () {
      $scope.successStory = {name: '', story: '', earning: '', avatar: '', socialNetworks: []}
    };

    $scope.toggleNewForm = function () {
      $scope.newFormVisible = !$scope.newFormVisible;
      if ($scope.newFormVisible) {
        $scope.addSuccessStoryText = 'Cancel Success Story';
      }
      else {
        $scope.addSuccessStoryText = 'Add Success Story';
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
