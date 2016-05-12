'use strict';

angular.module('ctStudentDashboard')
  .factory('StudentCourseLessonFactory', ['$resource', 'ENDPOINT', function($resource, ENDPOINT) {
    return $resource(ENDPOINT + '/api/skills/:skill_id/topics/:topic_id/lessons/:id', {
      skillId: '@skill_id',
      topicId: '@topic_id',
      lessonId: '@id'
    }, {
      getLessonData: {
        method: 'GET'
      }
    });
  }]);
