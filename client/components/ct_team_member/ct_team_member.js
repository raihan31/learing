'use strict';

angular.module('ctSignupApp')
  .directive('ctTeamMember', [
    function () {
      return {
        restrict: 'AE',
        templateUrl: 'components/ct_team_member/ct_team_member.html',
        scope: {
          countryMaps: '=countryMap',
          teamMembers: '@'
        },
        link: function (scope, element) {
         scope.teamMembers = scope.loadTeamMember('global'); // Default load global Team member
        },

        controller: function (ENDPOINT, $http, $scope, $element, $attrs) {
          $scope.loadMember = function (country) {
            $scope.loadTeamMember(country);
          };

          $scope.loadTeamMember = function (country) {
            $http.get(ENDPOINT + '/api/members?country=' + country).success(function (response) {
              $scope.teamMembers = JSON.parse(response.team_members);
            });
          }
        }
      };
    }
  ]);
