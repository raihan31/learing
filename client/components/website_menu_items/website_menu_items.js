'use strict';

angular.module('ctSignupApp')
  .factory('websiteMenuItems', function () {
    return [{
      // href: '/how-it-works',
      name: 'How it Works',
      subMenu: [{
        name: 'How it Works',
        link: '/how-it-works',
        target: ''
      }, {
        name: 'TrustScore',
        target: '_blank',
        link: 'http://join.coderstrust.com/coderstrust-score/'
      }]
    }, {
      name: 'Learn',
      subMenu: [{
        id: 4,
        name: 'Online learning',
        link: 'http://join.coderstrust.com/online-learning/',
        target: '_blank'
      }, {
        id: 1,
        name: 'Classroom training',
        link: '/learning',
        target: ''
      }, {
        id: 2,
        name: 'Live Classes',
        link: 'http://join.coderstrust.com/coderstrust-live-classes/',
        target: '_blank'
      }, {
        id: 3,
        name: 'Mentorship',
        link: 'http://join.coderstrust.com/coderstrust-general-mentor/',
        target: '_blank'
      }]
    }, {
      name: 'Earn',
      subMenu: [{
        id: 1,
        name: 'Leaderboards',
        link: 'http://join.coderstrust.com/earning-leaderboard/',
        target: '_blank'
      }, {
        name: 'Earn',
        link: '/earn'
      }]
    }, {
      href: 'http://coderstrust.tumblr.com/',
      name: 'Blog',
      target: '_blank'
    }, {
      href: '/about',
      name: 'About Us'
    }, ];
  });
