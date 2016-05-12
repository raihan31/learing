'use strict'

angular.module('ctStudentDashboard')
	.factory('onlineTestQuestionSubmission', ['$resource','ENDPOINT', function($resource,ENDPOINT){
		return $resource(ENDPOINT+'/api/online_tests/:id/submit',
			{
				id:'@id'
			},
			{
				examSubmit:{
					method: 'POST'
				}
			});
	}]);