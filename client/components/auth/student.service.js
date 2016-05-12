'use strict';

angular.module('ctSignupApp')
  .factory('Student', function ($resource, STUDENT_API) {
    return $resource(STUDENT_API + '/api/students/:id/:controller', {
      id: '@_id'
    }, {
      resendConfiramtionEmail: {
        method: 'POST',
        params: {
          id: 'confirmation'
        }
      },
      resetPassword: {
        method: 'PUT',
        params: {
          id: 'password'
        }
      },
      resetPasswordRequest: {
        method: 'POST',
        params: {
          id: 'password'
        }
      },
      changePassword: {
        method: 'PUT',
        params: {
          controller: 'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id: 'me'
        }
      }
    });
  });
