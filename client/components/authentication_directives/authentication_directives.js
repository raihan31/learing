'use strict'
angular.module('ctSignupApp')
  .directive('isStudentLogin',
   function(AuthStudent,$cookieStore){
     return{
       restrict: 'EA',
       link:function($scope, element , attribute){
            $scope.$watch(function(){
              return $cookieStore.get('studentToken');
            },function(val){
              if(val){
                element.show();
              }else{
                element.hide();
              }

            });
       }
     }
   });
