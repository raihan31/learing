'use strict';

angular.module('ctStudentDashboard')
  .controller('OnlineSkillTestQuestionCtrl', function($scope, $location, $state, onlineTestQuestionSubmission, $stateParams, $rootScope, onlineTestData, $sessionStorage, studentData) {
    $scope.questions = onlineTestData;
    $scope.studentData = studentData;


   /*$rootScope.$on('$stateChangeStart', 
    function(event, toState, toParams, fromState, fromParams){ 
	           
	          if(fromState.name == 'student.learning.onlinetests.details.start'){
	          	event.preventDefault();
	          	$state.transitionTo(toState.name);
	          }
	          
	          console.log(toState.name);
	          $state.transitionTo(toState.name);


	 });*/
  });
