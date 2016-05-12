'use strict';

angular.module('ctSignupApp')
.controller('LearningCtrl', [
  '$scope',
  '$timeout',
  '$window',
  'ctWebpagesConfigDecorator',
  'heroData',
  'tabsData',
  'portfolioData',
  'mentorsData',
  'workshopsData',
  function ($scope, $timeout, $window, ctWebpagesConfigDecorator, heroData, tabsData, portfolioData, mentorsData, workshopsData) {
    $scope.title = '';

    $scope.heroData = heroData;

    // angular.forEach(mentorsData, function (mentor) {
    //
    // });

    $scope.tabs = tabsData;
    console.log(tabsData);
    $scope.tabs[0].active = true;
    $scope.activeTab = 0;
    $scope.portfolios = portfolioData;
    $scope.mentors = mentorsData;
    $scope.workshops = workshopsData;

    $scope.countOffset = function (length) {
      return ((length % 4) * 3 / 2).toString().replace(/\./, '');
    };

    $scope.isOffset = function (length, index) {
      return (length % 4) === (length - (index)) && (index !== 0);
    };

    $scope.isActive = function (index) {
        return $scope.activeTab === index;
    };

    $scope.showTab = function (index) {
      angular.forEach($scope.tabs, function (item) {
        item.active = false;
      });
      $scope.activeTab = index;
      $scope.tabs[index].active = true;
      $timeout(function () {
        $('.multiple-items-slider').slick('setPosition');
      }, 200);
    };

    $timeout(function () {
      // $('.row-learning').height($('.row-learning').height());
      ctWebpagesConfigDecorator();
      // console.log($('.js-lazyYT'));
      $('.js-lazyYT').lazyYT({
          loading_text: '...'
      });
    }, 200);
  }
]);
