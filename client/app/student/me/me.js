'use strict';

angular.module('ctStudentDashboard')
  .config(function($stateProvider) {
    $stateProvider.state('student.me', {
        url: '/me',
        abstract: true,
        templateUrl: 'app/student/me/me.html',
        controller: 'StudentMeCtrl',
        ncyBreadcrumb: {
          label: 'My Profile',
        },
        resolve: {
          headData: function() {
            return {
              title: 'Me at Coderstrust',
            };
          },
          studentData: function(AuthStudent) {
            return AuthStudent.getCurrentUser();
          }
        }
      })
      .state('student.me.about', {
        url: '',
        authenticateStudent: true,
        controller: 'StudentAboutCtrl',
        templateUrl: 'app/student/me/about/about.html',
        ncyBreadcrumb: {
          label: 'My Profile'
        },
        resolve: {
          personalInfoData: function($http, WEBSITE_ENDPOINT, $q, studentData, ENDPOINT) {
            var deferred = $q.defer();
            studentData.$promise
              .then(function(res) {
                $http.get(ENDPOINT + '/api/students/' + res.id + '/personal')
                  .then(function(response) {
                    deferred.resolve(response.data);
                  }, function(response) {
                    deferred.reject(response);
                  });
              });
            return deferred.promise;
          },
          courseRelatedData: function($q, StudentOnlineTestsRequired) {
            var deferred = $q.defer();
            StudentOnlineTestsRequired
              .get({},
                function(response) {
                  deferred.resolve(response);
                },
                function(response) {
                  deferred.reject(response);
                });
            return deferred.promise;

          },
          authenticateProviders: function(ENDPOINT) {
            return [{
              name: 'github',
              iconClass: 'fa fa-github-square',
              url: '',
              authenticated: false
            }, {
              name: 'facebook',
              iconClass: 'fa fa-facebook-square',
              url: '',
              authenticated: true
            }, {
              name: 'upwork',
              iconClass: 'fa fa-square',
              url: '',
              authenticated: true
            }, {
              name: 'google',
              iconClass: 'fa fa-google-plus-square',
              url: '',
              authenticated: true
            }, {
              name: 'linkedin',
              iconClass: 'fa fa-linkedin-square',
              url: '',
              authenticated: true
            }, {
              name: 'twitter',
              iconClass: 'fa fa-twitter-square',
              url: '',
              authenticated: true
            }, {
              name: 'payoneer',
              iconClass: 'fa fa-cc-mastercard',
              url: ENDPOINT + '/payoneer/api/student/:id/payoneers/registration',
              authenticated: true
            }];
          }
        }
      })
      .state('student.me.subscriptions', {
        url: '/subscriptions',
        controller: 'StudentSubscriptionsCtrl',
        templateUrl: 'app/student/me/subscriptions/subscriptions.html',
        ncyBreadcrumb: {
          label: 'Subscriptions',
          parent: 'student.me.about'
        },
        resolve: {
          subscriptionsData: function($q, ENDPOINT, StudentSubscriptions) {
            var deferred = $q.defer();
            StudentSubscriptions.getAllSubscriptions().$promise.then(
              function(result) {
                deferred.resolve(result);
              },
              function(result) {
                deferred.reject(result);
              });

            return deferred.promise;
          }
        }
      })
      .state('student.me.subscription', {
        url: '/subscription/:id',
        controller: 'StudentSubscriptionCtrl',
        templateUrl: 'app/student/me/subscription/subscription.html',
        ncyBreadcrumb: {
          label: 'Subscription',
          parent: 'student.me.subscriptions'
        },
        resolve: {
          subscriptionData: function($q, StudentSubscriptions, $stateParams) {
            var deferred = $q.defer();
            StudentSubscriptions.getSubscriptionById({
                id: $stateParams.id
              },
              function(result) {
                deferred.resolve(result);
              },
              function(result) {
                deferred.reject(result);
              });
            return deferred.promise;
          }
        }
      })
      .state('student.me.subscription.payment', {
        url: '/pay',
        views: {
          '@student.me': {
            controller: 'StudentPayCtrl',
            templateUrl: 'app/student/me/pay/pay.html',
          }
        },
        ncyBreadcrumb: {
          label: 'Payment',
          parent: 'student.me.subscription({id: subscription.id})'
        },
        resolve: {
          subscriptionData: function(subscriptionData) {
            return subscriptionData;
          }
        }
      })
      .state('student.me.referral', {
        url: '/referral',
        controller: 'StudentReferralCtrl',
        templateUrl: 'app/student/me/referral/referral.html',
        ncyBreadcrumb: {
          label: 'Referral program',
          parent: 'student.me.about'
        },
        resolve: {
          invitedFriendsData: function(ENDPOINT, $http, $q, studentData) {
            var deferred = $q.defer();
            studentData.$promise.then(function(res) {
              $http.get(ENDPOINT + '/api/students/' + res.id + '/invite_friends ')
                .then(function(response) {
                  deferred.resolve(response.data);
                }, function(response) {
                  deferred.reject(response);
                });
            });
            return deferred.promise;
          }
        }
      })
      .state('student.me.about.addEducation', {
        url: '/{id}/add-education',
        onEnter: ['$uibModal', '$stateParams', '$state', function($uibModal, $stateParams, $state) {
          $uibModal.open({
              animation: true,
              templateUrl: 'components/ct_student_education_modal/ct_student_education.html',
              controller: 'StudentEducationModalCtrl',
              size: 'md',
              resolve: {
                items: function() {
                  return {
                    id: $stateParams.id,
                    headerText: 'Authentication Confirmation',
                    text: 'Are sure to add this authenticaton??'
                  };
                }
              }
            })
            .result
            .then(function(response) {
              $state.go('student.me.about', {}, {
                reload: true
              });
            }, function(response) {
              $state.go('student.me.about', {}, {
                reload: true
              });
            });
        }]
      });
  });
