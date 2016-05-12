'use strict';

angular.module('ctSignupApp')
.directive('ctProjectListItem', [
  function () {
    return {
      restrict: 'EA',
      templateUrl: 'components/ct_project_list_item/ct_project_list_item.html',
      // transclude: true,
      scope: {
        project: '=projectData'
      },
      link: function ($scope) {
      }
    };
  }
]);
