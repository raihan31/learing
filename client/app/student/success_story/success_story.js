'user strict'

angular.module('ctStudentDashboard')
  .config(function($stateProvider){
      $stateProvider
        .state('successStory',{
            url:'success-stories',
            parent:'student',
            templateUrl: 'app/student/success_story/success_story.html',
            abstract: true
        })
  });
