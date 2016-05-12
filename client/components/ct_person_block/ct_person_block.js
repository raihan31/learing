'use strict';

angular.module('ctSignupApp')
.directive('ctPersonBlock', [
  function () {
    return {
      restrict: 'EA',
      templateUrl: 'components/ct_person_block/ct_person_block.html',
      scope: {
        member: '=memberData'
      }
    };
  }
]);
