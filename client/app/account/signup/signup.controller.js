'use strict';

angular.module('ctSignupApp')
  .controller('SignupCtrl', [
    '$scope',
    '$rootScope',
    'SignupSTM',
    'localStorageService',
    '$state',
    '$window',
    'menuItems',
    'headData',
    'socialNetworkNavs',
    function ($scope, $rootScope, SignupSTM, localStorageService, $state, $window, menuItems, headData, socialNetworkNavs) {
      // var scrolling = false;
      $scope.socialNetworkNavs = socialNetworkNavs;
      $scope.menuItems = menuItems;
      $rootScope.$broadcast('head:change', headData);
      $scope.enrolled = localStorageService.get('enrolled');

      $scope.student = {
        // batch_id: localStorageService.get('batch_id'),
        // student_id: localStorageService.get('student_id'),
        // learning_center_id: localStorageService.get('learning_center_id'),
        // course_id: localStorageService.get('course_id')
      };
      if ($scope.enrolled) {
        $state.go('signup_success');
        $window.fbq('track', 'CompleteRegistration');
        $window.ga('send', 'event', 'button', 'click', localStorageService.get('student_email'), 'finished');
        // $timeout(function () {
        //   // SignupSTM.next();
        //
        //   $rootScope.$broadcast('student:enrolled');
        // }, 500);
      }
      // else if (localStorageService.get('education_model_id')) {
      //   SignupSTM.setState('payment');
      // }
      // // else if (localStorageService.get('batch_id')) {
      // //   SignupSTM.setState('select_batch');
      // // }
      // else if (localStorageService.get('course_id')) {
      //   SignupSTM.setState('select_education_model');
      // } else if (localStorageService.get('learning_center_id')) {
      //   SignupSTM.setState('select_course');
      // } else if (localStorageService.get('student_id')) {
      //   SignupSTM.setState('select_learning_center');
      // }

      $scope.showStep = function (state) {
        return SignupSTM.currentStateIndex >= SignupSTM.states.indexOf(state);
      };

      $scope.hideOldControls = function (state) {
        return SignupSTM.currentStateIndex > SignupSTM.states.indexOf(state);
      };

      $scope.$on('signup_state:updated', function () {
        $scope.$digest();
      });

      $scope.$on('learning_center_id:selected', function (obj, id) {
        localStorageService.set('learning_center_id', id);
        // localStorageService.remove('course_id');

        SignupSTM.setState('select_learning_center');
        $window.ga('send', 'event', 'button', 'click', localStorageService.get('student_email'), SignupSTM.currentState);
      });

      $scope.$on('student_id:saved', function (obj, data) {

        localStorageService.set('student_email', data.email);
        localStorageService.set('student_id', data.student_id);
        $window.ga('send', 'event', 'button', 'click', localStorageService.get('student_email'), SignupSTM.currentState);
      });

      // $scope.$on('batch_id:selected', function (obj, id) {
      //   localStorageService.set('batch_id', id);
      // });

      $scope.$on('education_model_id:selected', function (obj, id) {
        localStorageService.set('education_model_id', id);

        // SignupSTM.setState('payment');
        SignupSTM.setState('select_education_model');
        $window.ga('send', 'event', 'button', 'click', localStorageService.get('student_email'), SignupSTM.currentState);
      });

      $scope.$on('course_id:selected', function (obj, id) {
        localStorageService.set('course_id', id);
        // localStorageService.remove('education_model_id');
        SignupSTM.setState('select_course');
        $window.ga('send', 'event', 'button', 'click', localStorageService.get('student_email'), SignupSTM.currentState);
      });

      if ($state.params.source === 'landing_page') {
        SignupSTM.setState('intro');
      }

      $scope.setCurrentState = function (state) {
        $scope.currentState = state;
      };

      function scrollToState(state, mutate) {
        $('html, body').animate({
          scrollTop: $('#' + state).offset().top + 'px'
        }, 500, function () {
          if (mutate) {
            $scope.setCurrentState(state);
            $scope.$digest();
          }
        });
      }

      $('html, body').animate({
        scrollTop: $('#' + SignupSTM.currentState).offset().top
      }, 200);

      $scope.$on('signup_state:updated', function (obj, data) {
        scrollToState(data.currentState, true);
      });
    }
  ]);
