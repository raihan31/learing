'use strict';

angular.module('ctSignupApp')
.factory('studentMenuItems', function () {
  return [
    {
      uiSref: 'student.me.about',
      name: 'About'
    },
    {
      uiSref: 'student.me.metrics',
      name: 'Metrics'
    },
    {
      uiSref: 'student.me.referral',
      name: 'Referral'
    },
    {
      uiSref: 'student.me.subscriptions',
      name: 'Subscriptions'
    },

  ];
});
