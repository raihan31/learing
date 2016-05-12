'use strict';

angular.module('ctSignupApp').directive('focusInputOn', function ($timeout) {
  return {
    restrict: 'A',
    link: function focusInputOnPostLink(scope, elem, attrs) {
      attrs.$observe('focusInputOn', function () {
        $timeout(function () {
          var el = elem[0];
          el.focus();
          el.selectionStart = el.selectionEnd = el.value.length;
        });
      });
    }
  };
});
