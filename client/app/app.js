'use strict';

angular.module('ctSignupApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'LocalStorageModule',
  'ngAnimate',
  'ngMap',
  'ngFileUpload',
  'timer',
  'angular-svg-round-progress',
  'ncy-angular-breadcrumb',
  'ctStudentDashboard',
  'config',
  'satellizer',
  'angulike',
  'ngStorage',
  'angular-svg-round-progress'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, localStorageServiceProvider, $breadcrumbProvider, $authProvider, FACEBOOK, GOOGLE) {

    //$locationProvider.html5Mode(true).hashPrefix('!');

    $authProvider.facebook({
      clientId: FACEBOOK.id,
      redirectUri: FACEBOOK.redirectUri,
      url: 'http://localhost:3000/api/students/auth/facebook'
      //url: 'http://192.168.10.92:3000/api/students/auth/facebook'
    });

    $authProvider.google({
      clientId: GOOGLE.id,
      redirectUri: GOOGLE.redirectUri,
      url: 'http://localhost:3000/api/students/auth/google'
      //url: 'http://192.168.10.92:3000/api/students/auth/google'
    });

    // $authProvider.github({
    //   clientId: GITHUB.id,
    //   redirectUri: ''
    // });

    // $authProvider.linkedin({
    //   clientId: LINKEDIN.id,
    //   redirectUri: ''
    // });

    $breadcrumbProvider.setOptions({
      templateUrl: 'components/breadcrumb/breadcrumb.html'
    });
    localStorageServiceProvider
      .setPrefix('coderstrust_com');
    $urlRouterProvider
      .otherwise('/how-it-works');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })
  //
  //.factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
  //  return {
  //    // Add authorization token to headers
  //    request: function (config) {
  //      config.headers = config.headers || {};
  //      if ($cookieStore.get('token')) {
  //        config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
  //      }
  //      return config;
  //    },
  //
  //    // Intercept 401s and redirect you to login
  //    responseError: function (response) {
  //      if (response.status === 401) {
  //        $location.path('/login');
  //        // remove any stale tokens
  //        $cookieStore.remove('token');
  //        return $q.reject(response);
  //      } else {
  //        return $q.reject(response);
  //      }
  //    }
  //  };
  //})




.factory('authInterceptor', function($rootScope, $q, $cookieStore, $location) {
  return {
    // Add authorization token to headers
    request: function(config) {
      config.headers = config.headers || {};
      if ($cookieStore.get('studentToken')) {
        config.headers.Authorization = 'Bearer ' + $cookieStore.get('studentToken');
      }

      return config;
    },

    // Intercept 401s and redirect you to login
    responseError: function(response) {
      if (response.status === 401) {
        $location.path('/students/login');
        // remove any stale tokens
        $cookieStore.remove('studentToken');
        return $q.reject(response);
      } else {
        return $q.reject(response);
      }
    }
  };
})


.run(function ($rootScope, $location, Auth, AuthStudent, localStorageService,$cookieStore) {
  // localStorageService.clearAll();
  // Redirect to login if route requires auth and you're not logged in
  $rootScope.$on('application:reset', function () {
    localStorageService.clearAll();
    window.location.href = '/';
  });


  $rootScope.$on('error', function (event, error) {
    console.log(error);
  });

  $rootScope.$on('$stateChangeStart', function (event, next) {
    Auth.isLoggedInAsync(function (loggedIn) {
      if (next.authenticateAdmin && !loggedIn) {
        $cookieStore.remove('token');
        $location.path('/login');
      }
    });


    AuthStudent.isLoggedInAsync(function (loggedIn) {
      if (next.authenticateStudent && !loggedIn) {
        event.preventDefault();
        $cookieStore.remove('studentToken');
        $location.path('/students/login');
      }
    });
  });
  $rootScope.$on('$stateChangeSuccess', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 200);
  });
});
