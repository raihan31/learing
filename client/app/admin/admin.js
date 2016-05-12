'use strict';

angular.module('ctSignupApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl',
        abstract: true,
        auth: true,
        resolve: {
          menuItems: function () {
            return [{
              href: '/admin/courses',
              name: 'Courses'
            }, {
              href: '/admin/customer_reviews',
              name: 'Customer Reviews'
            }, {
              href: '/admin/mentors',
              name: 'Mentors'
            }, {
              href: '/admin/offices',
              name: 'Offices'
            }, {
              href: '/admin/portfolios',
              name: 'Portfolios'
            }, {
              href: '/admin/success_stories',
              name: 'Success story'
            }, {
              href: '/admin/teams',
              name: 'Team'
            }, {
              href: '/admin/workshops',
              name: 'Workshops'
            }, ];
          }
        }
      })
      .state('admin.index', {
        url: '/index',
        templateUrl: 'app/admin/index/index.html',
        controller: 'AdminIndexCtrl'
      })
      .state('admin.success_stories', {
        url: '/success_stories',
        templateUrl: 'app/admin/success_story/success_story.html',
        controller: 'SuccessStoryCtrl'
      })
      .state('admin.customer_reviews', {
        url: '/customer_reviews',
        templateUrl: 'app/admin/customer_review/customer_review.html',
        controller: 'CustomerReviewCtrl'
      })
      .state('admin.teams', {
        url: '/teams',
        templateUrl: 'app/admin/team/team.html',
        controller: 'TeamCtrl'
      })
      .state('admin.workshops', {
        url: '/workshops',
        templateUrl: 'app/admin/workshop/workshop.html',
        controller: 'WorkshopCtrl'
      })
      .state('admin.mentors', {
        url: '/mentors',
        templateUrl: 'app/admin/mentor/mentor.html',
        controller: 'MentorCtrl'
      })
      .state('admin.portfolios', {
        url: '/portfolios',
        templateUrl: 'app/admin/portfolio/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .state('admin.courses', {
        url: '/courses',
        templateUrl: 'app/admin/course/course.html',
        controller: 'CourseCtrl'
      })
      .state('admin.offices', {
        url: '/offices',
        templateUrl: 'app/admin/office/office.html',
        controller: 'OfficeCtrl'
      })
      .state('admin.up_work', {
        url: '/up_work',
        templateUrl: 'app/admin/up_work/upwork.html',
        controller: 'UpWorkCtrl',
        resolve: {
          profiles: function (UpWork) {
            return UpWork.all()
          }
        }
      });
  });
