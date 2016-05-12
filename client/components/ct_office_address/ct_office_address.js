'use strict';

angular.module('ctSignupApp')
  .directive('ctOfficeAddress', [
    function () {
      return {
        restrict: 'AE',
        //transclude: true,
        templateUrl: 'components/ct_office_address/ct_office_address.html',
        scope: {
          officeAddress: '=officeData'
        },
        link: function ($scope) {

        }
      };
    }
  ]);
