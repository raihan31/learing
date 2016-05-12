'use strict';

angular.module('ctSignupApp')
  .factory('AuthStudent', [
    '$location',
    '$rootScope',
    '$http',
    'Student',
    '$cookieStore',
    '$q',
    'STUDENT_API',
    function AuthStudent($location, $rootScope, $http, Student, $cookieStore, $q, STUDENT_API) {
      var currentUser = {};
      if ($cookieStore.get('studentToken')) {
        currentUser = Student.get();
      }

      return {

        /**
         * Authenticate user and save token
         *
         * @param  {Object}   user     - login info
         * @param  {Function} callback - optional
         * @return {Promise}
         */
        login: function(user, callback) {
          var cb = callback || angular.noop;
          var deferred = $q.defer();

          $http.post(STUDENT_API + '/api/students/authenticate', {
            email: user.email,
            password: user.password,
            remember: user.remember
          }).
          success(function(data) {
            if (data.error) {
              deferred.reject(data.error);
              return;
            }

            $cookieStore.put('studentToken', data.auth_token);
            currentUser = Student.get();
            deferred.resolve(data);
            return cb();
          }).
          error(function(err) {
            this.logout();
            deferred.reject(err);
            return cb(err);
          }.bind(this));

          return deferred.promise;
        },

        /**
         * Delete access token and user info
         *
         * @param  {Function}
         */
        logout: function() {
          $cookieStore.remove('studentToken');
          currentUser = {};
        },
        /**
         * Reset password request
         *
         * @param {String} student email
         */
        resetPasswordRequest: function(email, callback) {
          var cb = callback || angular.noop;

          return Student.resetPasswordRequest({}, {
            email: email
          }, function(user) {
            return cb(user);
          }, function(err) {
            return cb(err);
          }).$promise;
        },

        /**
         * Resend confirmation email
         *
         * @param {String} student email
         */
        resendConfiramtionEmail: function(email, callback) {
          var cb = callback || angular.noop;

          return Student.resendConfiramtionEmail({}, {
            email: email
          }, function(user) {
            return cb(user);
          }, function(err) {
            return cb(err);
          }).$promise;
        },



        /**
         * Change password
         *
         * @param  {String}   password
         * @param  {String}   passwordConfirmation
         * @param  {String}   resetPasswordToken
         * @param  {Function} callback    - optional
         * @return {Promise}
         */
        resetPassword: function(password, passwordConfirmation, resetPasswordToken, callback) {
          var cb = callback || angular.noop;

          return Student.resetPassword({}, {
            password: password,
            password_confirmation: passwordConfirmation,
            reset_password_token: resetPasswordToken
          }, function(user) {
            return cb(user);
          }, function(err) {
            return cb(err);
          }).$promise;
        },

        /**
         * Gets all available info on authenticated user
         *
         * @return {Object} user
         */
        getCurrentUser: function() {
          return currentUser;
        },

        /**
         * Check if a user is logged in
         *
         * @return {Boolean}
         */
        isLoggedIn: function() {
          return currentUser.hasOwnProperty('role');
        },

        isLoggedInAsync: function(cb) {
          if (currentUser.hasOwnProperty('$promise')) {
            currentUser.$promise.then(function() {
              cb(true);
            }).catch(function() {
              cb(false);
            });
          } else if (currentUser.hasOwnProperty('role')) {
            cb(true);
          } else {
            cb(false);
          }
        },

        /**
         * Get auth token
         */
        getToken: function() {
          return $cookieStore.get('studentToken');
        }
      };
    }
  ]);
