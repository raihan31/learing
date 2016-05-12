'use strict';

angular.module('ctStudentDashboard')
  .config(function($stateProvider) {
    $stateProvider
      .state('student.learning', {
        url: '/learning',
        abstract: true,
        templateUrl: 'app/student/learning/learning.html',
        controller: 'StudentLearningCtrl',
        resolve: {
          studentData: function(AuthStudent) {
            return AuthStudent.getCurrentUser();
          }
        }
      })
      .state('student.learning.courses', {
        url: '',
        controller: 'StudentCoursesCtrl',
        templateUrl: 'app/student/learning/courses/courses.html',
        ncyBreadcrumb: {
          label: 'Courses',
        },
        resolve: {
          coursesData: function($q, StudentCourses) {
            var deferred = $q.defer();
            StudentCourses.getAllCourses({}, function(response) {
              deferred.resolve(response);
            }, function(response) {
              deferred.reject(response);
            })
            return deferred.promise;
          }
        }
      })
      .state('student.learning.course', {
        url: '/:id/view',
        views: {
          '': {
            controller: 'StudentCourseCtrl',
            templateUrl: 'app/student/learning/course/course.html',
          },
          'courseContentView@student.learning.course': {
            controller: 'StudentCourseContentCtrl',
            templateUrl: 'components/ct_student_course_lesson/ct_student_course.html',
          }

        },
        ncyBreadcrumb: {
          label: '{{course.name}}',
          parent: 'student.learning.courses'
        },
        resolve: {
          courseData: function($q, $stateParams, StudentCourses) {
            var deferred = $q.defer();
            StudentCourses.getCourseById({
              id: $stateParams.id
            }, function(data) {
              deferred.resolve(data);
              console.log(data);
            }, function(err) {
              deferred.reject(err);
            });
            return deferred.promise;
          },
          lessonContentDescriptionData: function($stateParams, courseData) {
            return courseData;
          },
          studentData: function(studentData) {
            return studentData;
          }
        }
      })

    .state('student.learning.course.skill', {
        url: '/skills/:skillId',
        views: {
          'courseContentView@student.learning.course': {
            controller: 'StudentCourseContentCtrl',
            templateUrl: 'components/ct_student_course_lesson/ct_student_course_skill.html',
          }

        },
        resolve: {
          lessonContentDescriptionData: function($stateParams, ENDPOINT, $http, $q) {
            console.log($stateParams);
            var deferred = $q.defer();
            $http.get(ENDPOINT + '/api/skills/' + $stateParams.skillId)
              .then(function(response) {
                deferred.resolve(response.data);
              }, function(response) {
                deferred.resolve(response);
              });
            return deferred.promise;
          }
        },
        ncyBreadcrumb: {
          label: '{{course.name}}',
          parent: 'student.learning.courses'
        }
      })
      .state('student.learning.course.skill.topic', {
        url: '/topics/:topicId',
        views: {
          'courseContentView@student.learning.course': {
            controller: 'StudentCourseContentCtrl',
            templateUrl: 'components/ct_student_course_lesson/ct_student_course_skill_topic.html',
          }
        },
        resolve: {
          lessonContentDescriptionData: function($stateParams, ENDPOINT, $http, $q) {
            console.log($stateParams);
            var deferred = $q.defer();
            $http.get(ENDPOINT + '/api/skills/' + $stateParams.skillId + '/topics/' + $stateParams.topicId)
              .then(function(response) {
                deferred.resolve(response.data);
              }, function(response) {
                deferred.resolve(response);
              });
            return deferred.promise;
          }
        },
        ncyBreadcrumb: {
          label: '{{course.name}}',
          parent: 'student.learning.courses'
        }
      })
      .state('student.learning.course.skill.topic.lesson', {
        url: '/lessons/:lessonId',
        ncyBreadcrumb: {
          label: '{{course.name}}',
          parent: 'student.learning.courses'
        },
        views: {
          'courseContentView@student.learning.course': {
            controller: 'StudentCourseContentCtrl',
            templateUrl: 'components/ct_student_course_lesson/ct_student_course_skill_topic_lesson.html',
          }

        },
        resolve: {
          lessonContentDescriptionData: function($stateParams, StudentCourseLessonFactory, $q) {
            console.log($stateParams);
            var deferred = $q.defer();
            StudentCourseLessonFactory.getLessonData({
              skill_id: $stateParams.skillId,
              topic_id: $stateParams.topicId,
              id: $stateParams.lessonId
            }, {}, function(response) {
              deferred.resolve(response);
            }, function(response) {
              deferred.reject(response.data);
            });
            return deferred.promise;
          }
        }

      })

    ;
  });
