'use strict';

angular.module('ctSignupApp')
.directive('ctReferralLink', [
  function () {
    return {
      restrict: 'E',
      templateUrl: 'components/ct_referral_link/ct_referral_link.html',
      scope: {
        url: '=referralUrl'
      },
      link: function ($scope, element) {
        element.bind('click', function () {
          $('input', element).focus();
          var range = document.createRange();

          range.selectNode($('input', element)[0]);
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(range);
          var successful = document.execCommand('copy');

          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Copying text command was ' + msg);
          window.getSelection().removeAllRanges();
        });
      }
    };
  }
]);
