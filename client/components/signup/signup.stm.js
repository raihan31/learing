'use strict';

angular.module('ctSignupApp')
.factory('SignupSTM', [
  '$rootScope',
  '$timeout',
  'localStorageService',
  function ($rootScope, $timeout, localStorageService) {
    var API = {
      currentStateIndex: 0,
      currentState: '',
      states: [
        'intro',
        'personal_data',
        'select_learning_center',
        'select_course',
        'select_education_model'
        // 'select_batch',
        // 'payment'

      ],
      setState: function (stateName) {
        var index = API.states.indexOf(stateName);

        API.currentStateIndex = ((index + 1) < API.states.length) ? index + 1 : index;
        API.currentState = API.states[API.currentStateIndex];

        $timeout(function () {
          $rootScope.$broadcast('signup_state:updated', API);
        }, 500);
      },
      next: function () {
        if (API.currentStateIndex < (API.states.length - 1)) {
          API.currentStateIndex += 1;
          API.currentState = API.states[API.currentStateIndex];

          $rootScope.$broadcast('signup_state:updated', API);
        }
        return API.currentState;
      },
      getNextState: function (state) {
        var stateIndex = API.states.indexOf(state) + 1;

        if (stateIndex < (API.states.length - 1)) {
          return API.states[stateIndex];
        } else {
          return state;
        }
      },
      getPrevState: function (state) {
        var stateIndex = API.states.indexOf(state) - 1;
        if (stateIndex >= 0) {
          return API.states[stateIndex];
        } else {
          return API.states[0];
        }
      }
    };

    // if (localStorageService.get('enrolled')) {
    //     API.states.splice(0, API.states.length - 1);
    //     API.states.push('congratulations');
    // }

    API.currentState = API.states[API.currentStateIndex];

    return API;
  }
]);
