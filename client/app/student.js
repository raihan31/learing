'use strict';

angular.module('ctStudentDashboard', [
    'ui.router',
    'ngAnimate',
    'ngStorage',
    'angular-svg-round-progress',
    'ctSignupApp'
  ])
  .config(function($stateProvider) {
    $stateProvider
      .state('student', {
        url: '/students',
        templateUrl: 'app/student/student.html',
        controller: 'StudentCtrl',
        abstract: true,
        resolve: {
          headData: function() {
            return {
              title: 'Coderstrust',
              description: 'CodersTrust is an initiative backed by the development fund Danida, or Danish International Development Agency, to provide microfinance and education for students in emerging nations who want to upgrade their programming skills. The hope of founder, Copenhagen-born entrepreneur Ferdinand Kjærulff, is that these students are empowered to sell their work internationally via freelance portals such as Upwork. The team is currently operating in Dhaka, Bangladesh, where it collaborates with Grameen Bank, which is renowned for its part in revolutionising the microfinance industry. Skype seed funder Morten Lund invested in the company in March 2014, describing it as a "profitable charity"',
              keywords: 'Home, Coderstrust, Micro credit, Frontend development, Backend Development, Freelancing, Online marketplace, Code you later, CT'
            };
          },
          socialNetworkNavs: function(socialNetworksPages) {
            return socialNetworksPages;
          },
          websiteMenuItems: function(websiteMenuItems) {
            return websiteMenuItems;
          },
          studentMenuItems: function(studentMenuItems) {
            return studentMenuItems;
          },
          menuItemsData: function() {
            return [
              {
                iconClass: 'fa fa-graduation-cap',
                href: '/students/learning',
                name: 'Learning Center',
                uiSref: 'student.learning.courses'
              },
              {
                iconClass: 'fa fa-user',
                href: '/students/me',
                name: 'My Profile',
                uiSref: 'student.me.about'
              }
            ];
          }
        }
      })
      .state('student.login', {
        url: '/login?reset_password_token',
        templateUrl: 'app/student/login/login.html',
        controller: 'StudentLoginCtrl',
        resolve: {
          resetPassword: function($stateParams, $uibModal) {
            if ($stateParams.reset_password_token != undefined) {
              $uibModal.open({
                templateUrl: 'app/student/login/reset_password/reset_password.html',
                controller: 'ResetStudentPasswordCtrl',
                resolve: {
                  passwordToken: function() {
                    return $stateParams.reset_password_token;
                  }
                }
              });
            }
          }
        }
      })
      .state('student.logout', {
        url: '/logout',
        controller: function(AuthStudent, $state) {
          AuthStudent.logout();
          $state.go('student.login');

          return true;
        }
      })
      .state('student.login.callback', {
        url: '/callback?'
      });
  });
