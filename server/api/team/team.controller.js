'use strict';

var _ = require('lodash');
var Team = require('./team.model');

function handleError(res, err) {
  return res.status(500).send(err);
}

function uploadImage(req, res, modelObject, cb) {
  if (req.files) {
    modelObject.attach('image', req.files.file, function (err) {
      if (err) return console.log(err);

      cb();
    });
  } else {
    if (cb) {
      cb();
    }
  }
}
// Get list of teams
exports.index = function (req, res) {
  Team.find(function (err, teams) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(200).json(teams);
  });
};

// Get a single team
exports.show = function (req, res) {
  Team.findById(req.params.id, function (err, team) {
    if (err) {
      return handleError(res, err);
    }
    if (!team) {
      return res.status(404).send('Not Found');
    }
    return res.json(team);
  });
};

// Creates a new team in the DB.
exports.create = function (req, res) {
  var team = new Team(req.body.team);

  uploadImage(req, res, team, function () {
    team.save(function (err, team) {
      if (err) {
        return handleError(res, err);
      }
      res.json(team);
    });
  });
};

exports.upload = function (req, res) {
  var file = req.files.file;
  var tmp_path = file.path;
  var fs = require('fs.extra');
  var hash = require('crypto').randomBytes(16).toString('hex');
  var target_path = 'client/uploads/team/' + hash + '_' + file.name;
  fs.move(tmp_path, target_path, function (err) {
    if (err) throw err;
    var upload_image = {
      path: '/uploads/team/' + hash + '_' + file.name
    };
    return res.status(201).json(upload_image);
  });
};

// Updates an existing team in the DB.
exports.update = function (req, res) {
  Team.findById(req.params.id, function (err, team) {
    if (err) {
      return handleError(res, err);
    }
    if (!team) {
      return res.status(404).send('Not Found');
    }
    var updated = _.merge(team, req.body.team);

    uploadImage(req, res, team, function () {
      updated.save(function (err) {
        if (err) {
          return handleError(res, err);
        }
        res.json(team);
      });
    });
  });
};

// Deletes a team from the DB.
exports.destroy = function (req, res) {
  Team.findById(req.params.id, function (err, team) {
    if (err) {
      return handleError(res, err);
    }
    if (!team) {
      return res.status(404).send('Not Found');
    }
    team.remove(function (err) {
      if (err) {
        return handleError(res, err);
      }
      return res.status(204).send('No Content');
    });
  });
};

exports.createTeamMember = function (req, res) {
  var paramsTeamMember = req.body.teamMember;
  Team.findById(paramsTeamMember.teamId, function (err, team) {
    if (err) return handleError(res, err);
    team.members.push(paramsTeamMember);
    var memberId = team.members[team.members.length - 1]._id;
    var teamMember = team.members.id(memberId);




    uploadImage(req, res, teamMember, function () {
      team.save(function (err, team) {
        if (err) handleError(res, err);

        res.json(teamMember);
      });
    });
  });
};

exports.updateTeamMember = function (req, res) {
  var paramsTeamMember = req.body.teamMember;
  if (paramsTeamMember._id) {
    delete req.body._id;
  }
  if (paramsTeamMember.socialNetworks && paramsTeamMember.socialNetworks) {
    paramsTeamMember.socialNetworks.forEach(function (network, index) {
      if (network.hasOwnProperty('_id'))
        delete network._id;
    });
  }

  Team.findById(paramsTeamMember.teamId, function (err, team) {
    if (err) handleError(res, err);
    var member = team.members.id(req.params.id);
    member.name = paramsTeamMember.name;
    member.designation = paramsTeamMember.designation;
    member.socialNetworks = paramsTeamMember.socialNetworks;

    uploadImage(req, res, member, function () {
      team.save(function (err, team) {
        if (err) handleError(res, err);

        res.json(member);
      });
    });

  });
};

exports.removeTeamMember = function (req, res) {
  Team.findById(req.params.teamId, function (err, team) {
    if (err) handleError(res, err);
    var member = team.members.id(req.params.id);
    member.remove(function (err) {
      if (err) handleError(res, err);
      team.save(function (err) {
        if (err) handleError(res, err);
        res.status(204).send('No content');
      });
    });
  });
};
