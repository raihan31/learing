'use strict';

angular.module('ctSignupApp')
  .controller('TeamCtrl', ['$scope', 'Upload', '$http', 'WEBSITE_ENDPOINT', function ($scope, Upload, $http, WEBSITE_ENDPOINT) {

    $scope.addTeamText = 'Add Team';
    $scope.isEditTeam = false;

    $http.get(WEBSITE_ENDPOINT + '/api/teams').success(function (res) {
      $scope.teams = res;
    });

    $scope.createTeam = function () {
      var dataParams = $scope.team;
      if ($scope.teamImageFile) {
        $scope.teamImageFile.upload = Upload.upload({
          url: WEBSITE_ENDPOINT + '/api/teams',
          data: {
            file: $scope.teamImageFile,
            team: dataParams
          }
        }).success(function (res) {
          $scope.teams.push(res);
          $scope.toggleTeamForm();
          $scope.resetTeamForm();
        });
      } else {
        alert("Team image is missing");
      }
    };

    $scope.removeTeam = function (id) {
      if (confirm('Are you sure want to delete?')) {
        $http.delete(WEBSITE_ENDPOINT + '/api/teams/' + id).success(function (res) {
          for (var i = 0; i < $scope.teams.length; i++) {
            if ($scope.teams[i]._id == id) {
              if ($scope.teams.length == 1)
                $scope.teams = [];
              else
                delete $scope.teams[i];
              break;
            }
          }
        });
      }
    };

    $scope.updateTeam = function (id) {
      if ($scope.teamImageFile) {
        $scope.teamImageFile.upload = Upload.upload({
          url: WEBSITE_ENDPOINT + '/api/teams/' + id,
          method: 'put',
          data: {
            file: $scope.teamImageFile,
            team: {
              name: $scope.team.name
            }
          }
        }).success(function (res) {
          $scope.updateTeamView(id, res);
        });
      } else {
        $http.put(WEBSITE_ENDPOINT + '/api/teams/' + id, {
          team: {
            name: $scope.team.name
          }
        }).success(function (res) {
          $scope.updateTeamView(id, res);
        });
      }
    };

    $scope.updateTeamView = function (id, res) {
      for (var i = 0; i < $scope.teams.length; i++) {
        if ($scope.teams[i]._id == id) {
          $scope.teams[i] = res;
          break;
        }
      }
      $scope.isEditTeam = false;
      $scope.toggleTeamForm();
      $scope.resetTeamForm();
    };

    $scope.editTeam = function (id) {
      $http.get(WEBSITE_ENDPOINT + '/api/teams/' + id).success(function (res) {
        $scope.team = res;
        $scope.teamFormVisible = true;
        $scope.isEditTeam = true;
        $scope.addTeamText = 'Cancel Update';
      });
    };

    $scope.resetTeamForm = function () {
      $scope.teamImageFile = '';
      $scope.team = {
        name: ''
      }
    };

    $scope.toggleTeamForm = function () {
      $scope.teamFormVisible = !$scope.teamFormVisible;
      if ($scope.teamFormVisible) {
        $scope.addTeamText = 'Cancel Team';
      } else {
        $scope.addTeamText = 'Add Team';
        $scope.resetTeamForm();
        $scope.isEditTeam = false;
      }
    };

    $scope.setTeamImage = function (file, errorFile, isTeam) {
      if (errorFile.hasOwnProperty(0)) {
        $scope.errorMsg = errorFile[0].$error + ' : ' + errorFile[0].$errorParam;
      }
      if (file) {
        $scope.errorMsg = '';
        console.log(file);
      }
      if (isTeam)
        $scope.teamImageFile = file;
      else
        $scope.memberImageFile = file;
    };

    // Add, Edit, Delete Team member

    $scope.memberFormVisible = false;
    $scope.isEditMember = false;

    $scope.toggleMemberForm = function () {
      $scope.memberFormVisible = !$scope.memberFormVisible;
    };

    $scope.toggleTeamMembers = function () {
      $scope.showTeamMember = !$scope.showTeamMember;
    };

    $scope.addTeamMember = function (teamId) {
      $scope.teamMember = {
        teamId: teamId,
        name: '',
        designation: '',
        image: '',
        socialNetworks: []
      };
      $scope.isEditMember = false;
      $scope.member_image = false;
      $scope.toggleMemberForm();
    };

    $scope.addSocialNetwork = function () {
      $scope.teamMember.socialNetworks.push($scope.newSocialNetwork());
    };

    $scope.removeSocialNetwork = function (index) {
      if (confirm('Are you sure want to remove?')) {
        $scope.teamMember.socialNetworks.splice(index, 1);
      }
    };

    $scope.newSocialNetwork = function () {
      return {
        iconClass: '',
        url: '',
        name: ''
      }
    };

    $scope.createTeamMember = function () {
      if ($scope.memberImageFile) {
        $scope.memberImageFile.upload = Upload.upload({
          url: WEBSITE_ENDPOINT + '/api/teams/member',
          data: {
            file: $scope.memberImageFile,
            teamMember: $scope.teamMember
          }
        }).success(function (res) {
          $scope.toggleMemberForm();
          $scope.updateTeamMemberView($scope.teamMember.teamId, '', res, 'add');
        });
      } else {
        alert("Team Member image is missing");
      }
    };

    $scope.editTeamMember = function (teamId, memberId) {
      $http.get(WEBSITE_ENDPOINT + '/api/teams/' + teamId).success(function (res) {
        $scope.member_image = false;
        var members = res.members;
        for (var i = 0; i < members.length; i++) {
          if (members[i]._id == memberId) {
            $scope.teamMember = members[i];
            $scope.teamMember.teamId = teamId;
            $scope.toggleMemberForm();
            $scope.isEditMember = true;
            break;
          }
        }
      });
    };

    $scope.updateTeamMember = function (memberId) {
      $scope.memberImageFile.upload = Upload.upload({
        method: 'PUT',
        url: WEBSITE_ENDPOINT + '/api/teams/member/' + memberId,
        data: {
          file: $scope.memberImageFile,
          teamMember: $scope.teamMember
        }
      }).success(function (res) {
        $scope.updateTeamMemberView($scope.teamMember.teamId, memberId, res);
        $scope.toggleMemberForm();
      });
    };

    $scope.removeTeamMember = function (teamId, memberId) {
      $http.delete(WEBSITE_ENDPOINT + '/api/teams/' + teamId + '/member/' + memberId).success(function (res) {
        $scope.updateTeamMemberView(teamId, memberId, res, 'remove');
      });
    };

    $scope.updateTeamMemberView = function (teamId, memberId, res, options) {
      for (var i = 0; i < $scope.teams.length; i++) {
        if ($scope.teams[i]._id == teamId) {
          if (options == 'add') {
            $scope.teams[i].members.push(res);
          } else {
            var members = $scope.teams[i].members;
            for (var j = 0; j < members.length; j++) {
              if (members[j] != null && members[j]._id == memberId) {
                options == 'remove' ? delete members[j] : members[j] = res;
                break;
              }
            }
          }
          break;
        }
      }
    }

  }]);
