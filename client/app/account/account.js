'use strict';

angular.module('ctSignupApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signin', {
        url: '/signin',
        templateUrl: 'app/account/signin/signin.html',
        controller: 'SigninCtrl',
        resolve: {
          socialNetworkNavs: function (socialNetworksPages) {
            return socialNetworksPages;
          },
          menuItems: function (websiteMenuItems) {
            return websiteMenuItems;
          }
        }
      })
      .state('signup_iframe', {
        url: '/signup/embedded?source',
        templateUrl: 'app/account/signup_iframe/signup_iframe.html',
        controller: 'SignupIframeCtrl'
      })
      .state('signup_success_iframe', {
        url: '/signup/success/embedded',
        templateUrl: 'app/account/signup_success_iframe/signup_success_iframe.html'
      })
      .state('signup', {
        url: '/signup?source',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl',
        resolve: {
          headData: function () {
            return {
              title: 'Register - Coderstrust',
              description: 'Be a member with Coderstrust or being skilled talent register in coderstrust.',
              keywords: 'Sign Up, Coderstrust, Registration, User registration, Student sign up, Register'
            };
          },
          socialNetworkNavs: function (socialNetworksPages) {
            return socialNetworksPages;
          },
          menuItems: function (websiteMenuItems) {
            return websiteMenuItems;
          }
        }
      })
      .state('signup_success', {
        url: '/signup/success',
        templateUrl: 'app/account/signup_success/signup_success.html',
        controller: 'SignupSuccessCtrl',
        resolve: {

          headData: function () {
            return {
              title: 'Register - Coderstrust',
              description: 'Be a member with Coderstrust or being skilled talent register in coderstrust.',
              keywords: 'Sign Up, Coderstrust, Registration, User registration, Student sign up, Register'
            };
          },
          socialNetworkNavs: function (socialNetworksPages) {
            return socialNetworksPages;
          },
          menuItems: function (websiteMenuItems) {
            return websiteMenuItems;
          },
          student: function (localStorageService) {
            return {
              batch_id: localStorageService.get('batch_id'),
              student_id: localStorageService.get('student_id'),
              learning_center_id: localStorageService.get('learning_center_id'),
              course_id: localStorageService.get('course_id')
            };
          },
          learningCenter: function (localStorageService, LearningCenter, $q) {
            var deferred = $q.defer();

            LearningCenter.all().then(function () {
              deferred.resolve(LearningCenter.get(localStorageService.get('learning_center_id')));
            });

            return deferred.promise;
          },
          course: function (localStorageService, Course, $q) {
            var deferred = $q.defer();

            Course.all(localStorageService.get('learning_center_id')).then(function () {
              deferred.resolve(Course.get(localStorageService.get('learning_center_id'), localStorageService.get('course_id')));
            });

            return deferred.promise;
          },
          educationModel: function (localStorageService, EducationModel, $q) {
            var deferred = $q.defer();

            EducationModel.all(localStorageService.get('learning_center_id'), localStorageService.get('course_id')).then(function () {
              deferred.resolve(EducationModel.get(localStorageService.get('learning_center_id'), localStorageService.get('course_id'), localStorageService.get('education_model_id')));
            });

            return deferred.promise;
          },

        }
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
  });
