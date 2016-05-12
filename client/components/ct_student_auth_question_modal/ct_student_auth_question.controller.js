angular.module('ctStudentDashboard')
  .controller('StudentAuthModalCtrl', [
    '$scope',
    'items',
    '$uibModalInstance',
    'StudentAuthenticationsProvider',
    '$q',
    '$window',
    function($scope, items, $uibModalInstance, StudentAuthenticationsProvider, $q, $window) {
      var deferred = $q.defer();
      $scope.text = items;


      $scope.confirm = function() {
        StudentAuthenticationsProvider
          .getUrl($scope.text.url)
          .get({
              id: $scope.text.id
            }, function(response) {
              console.log(response.registration_url);
              $window.open(response.registration_url, '_blank');
              deferred.resolve(response);
              $uibModalInstance.close();
            },
            function(response) {
              deferred.reject(response);
            });
      }

      $scope.cancel = function() {
        $uibModalInstance.close();

      }




    }
  ]);
