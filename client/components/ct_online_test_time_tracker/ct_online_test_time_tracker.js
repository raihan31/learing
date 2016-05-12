'use strict'

angular.module('ctStudentDashboard')
	.directive('ctOnlineTestTimeTracker',
		function($sessionStorage){
			return {
				restrict: 'EA',
				templateUrl: "components/ct_online_test_time_tracker/ct_online_test_time_tracker.html",
				link: function($scope,element,attribute){
					console.log(attribute.times);
					var timeLimit = attribute.times;
					if ($sessionStorage.timeLimit) {
				    	var time = new Date();
				    	if($sessionStorage.timeLimit < time.getTime()){
							delete $sessionStorage.timeLimit;
				    	}
				    	else{
								$scope.counter = $sessionStorage.timeLimit;
				    	}
				    	
				    }
				    else{
							var time = new Date();
				    	$sessionStorage.timeLimit = time.getTime()+timeLimit;
				    	
				    }	
				}
			}
		});