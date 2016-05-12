'use strict';

angular.module('ctSignupApp')
  .controller('HomeCtrl', [
    '$scope',
    '$sce',
    '$http',
    '$uibModal',
    'WEBSITE_ENDPOINT',
    'Snap',
    'heroData',
    'latestLearningItems',
    'slides',
    'headData',

    function ($scope, $sce, $http, $uibModal, WEBSITE_ENDPOINT, snap, heroData, latestLearningItems, slides) {
      $scope.heroData = heroData;
      $scope.latestLearningItems = latestLearningItems;
      $scope.slides = slides;

      var svg = snap('.how-it-works svg');

      svg.attr({
        viewBox: '0 0 595 842',
        width: $('.how-it-works svg').parent().width(),
        // height: '842px'
      });

      snap.load('/assets/images/how-it-works.svg', function (r) {
        svg.append(r);
      });

      $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
      };

      function openModal(text) {
        $uibModal.open({
          animation: true,
          templateUrl: 'components/ct_modal/ct_modal.html',
          controller: 'NewsletterModalCtrl',
          resolve: {
            text: function () {
              return text;
            }
          }
        });
      }

      $scope.addSubscriber = function (form) {
        if (form.$valid) {
          $http.post(WEBSITE_ENDPOINT + '/api/subscribers', {
              email: $scope.email
            })
            .success(function () {
              openModal({
                title: 'Successfully added to our newsletter',
                body: 'Your email ' + $scope.email + ' is successfully added to our newsletter.'
              });
            })
            .catch(function (err) {
              var errors = err.data.errors,
                keys = Object.keys(errors),
                errorMessage = ['<ol>'],
                e;
              for (var n = keys.length; n--;) {
                e = errors[keys[n]];
                errorMessage.push(['<li>', e.name, ': ', e.message, '</li>'].join(''));
              }
              errorMessage.push('</ol>');
              openModal({
                title: 'Something went wrong',
                body: errorMessage.join('')
              });
            });
        }
      };


    }
  ])
  .controller('NewsletterModalCtrl', [
    '$scope',
    '$modalInstance',
    '$state',
    'text',
    function ($scope, $modalInstance, $state, text) {
      $scope.text = text;
      $scope.ok = function (v) {
        $modalInstance.close(v);
      };
    }
  ]);
