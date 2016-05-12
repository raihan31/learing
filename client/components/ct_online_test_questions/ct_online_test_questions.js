'use strict';

angular.module('ctStudentDashboard')
  .directive('ctOnlineTestQuestions',
    function($sessionStorage, $timeout, onlineTestQuestionSubmission,$stateParams) {
      return {
        restrict: 'AE',
        templateUrl: 'components/ct_online_test_questions/ct_online_test_questions.html',
        transclude: true,
        scope: {
          questions: '=questionsData',
          studentData: '=studentData'
        },
        link: function($scope, element, attribute) {

          $scope.parseInt = parseInt;
          $scope.submissionButtonDisabled = false;
          $scope.noOfQuestions = 0;




          if($sessionStorage.noOfQuestions != null){
            console.log("che");
            $scope.noOfQuestions = $sessionStorage.noOfQuestions;
            $scope.submissionData = $sessionStorage.submissionData;
            $scope.max = $sessionStorage.maxTime;
            $scope.current = $sessionStorage.currentTime;
            timerProgress();
          }
          else{
            console.log("chekc");
            $scope.noOfQuestions = 0;
            $sessionStorage.noOfQuestions = $scope.noOfQuestions;           
            $scope.max = 3000;
            $scope.current = 0;
            $sessionStorage.maxTime = $scope.max;
            $sessionStorage.currentTime = $scope.current;
            $sessionStorage.submissionData = {
                                              id: $stateParams.testId,
                                              student_id: $scope.studentData.id,
                                              submission:[]
                                            };
            timerProgress();
          }



          function timerProgress()
          {
            if($sessionStorage.currentTime < $sessionStorage.maxTime){
              $sessionStorage.currentTime = $sessionStorage.currentTime + 1;
              $scope.current = $sessionStorage.currentTime;
              $scope.estimatedTime = $sessionStorage.maxTime -$sessionStorage.currentTime;
            }
            else{
              console.log($sessionStorage.currentTime);
                onlineTestQuestionSubmission.examSubmit({id: $stateParams.testId},
                    $sessionStorage.submissionData,onSubmisionSuccess);
              return 0;
            }
            $scope.timer = $timeout(timerProgress,1000);
          }
          

          function submissionButtonCheck(){
            if($scope.noOfQuestions == $scope.questions.length-1){
              $scope.buttonText = "Submit";
            }
            else{
              $scope.buttonText = "Next";
            }
          }
          
          submissionButtonCheck();

          $scope.answerCheck = function(answerId){
              $scope.answerOfQuestion = answerId;
              $scope.submissionButtonDisabled = true;
              console.log(answerId);
          }

          var onSubmisionSuccess = function(response){
              console.log(response);
              delete $sessionStorage.noOfQuestions;
              delete $sessionStorage.submissionData;
              delete $sessionStorage.currentTime;
              delete $sessionStorage.maxTime;
          }

          var onSubmisionFailure = function(response){
              console.log(response);
              delete $sessionStorage.noOfQuestions;
              delete $sessionStorage.submissionData;
              delete $sessionStorage.currentTime;
              delete $sessionStorage.maxTime;
          }

          $scope.questionsSubmission =function(questionsData){
              console.log(questionsData);
              if($scope.noOfQuestions == $scope.questions.length-1){
                  onlineTestQuestionSubmission.examSubmit({id: $stateParams.testId},
                    $sessionStorage.submissionData,onSubmisionSuccess,onSubmisionFailure);
              }
              else{
                $scope.noOfQuestions = $scope.noOfQuestions +1;
                $sessionStorage.noOfQuestions = $scope.noOfQuestions;
                submissionButtonCheck();
                $sessionStorage.submissionData.submission.push({question_id:questionsData.id,answer_ids:$scope.answerOfQuestion});
                $scope.submissionButtonDisabled = false;
              }
              
          }
        }
      }
    });
