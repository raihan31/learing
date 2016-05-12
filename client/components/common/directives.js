'use strict';

angular.module('ctSignupApp')
.directive('validPasswordC', function() {
  return {
    require: 'ngModel',
    scope: {
      reference: '=validPasswordC'
    },
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function (viewValue) {
        var valid = (viewValue === scope.reference);
        ctrl.$setValidity('noMatch', valid);

        return valid ? viewValue : undefined;
      });

      scope.$watch('reference', function (value) {
        ctrl.$setValidity('noMatch', value === ctrl.$viewValue);
      });
    }
  };
});
