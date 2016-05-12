'use strict';

angular.module('ctSignupApp')
.controller('HOCEventsCtrl', [
  '$scope',
  'eventsData',
  function ($scope, eventsData) {
    $scope.events = eventsData;
  }
]);
