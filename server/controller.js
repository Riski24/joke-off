var db = require('./database/db.js');
var utils = require('./lib/utils.js');

module.exports = {
  Bracket: {
    createBracket: function(req, res) {
      var adminUrl = utils.generateAdminUrl();
      var userUrl = utils.generateUserUrl();
      db.Bracket.create({
        name: req.body.name,
        adminUrl: utils.generateAdminUrl(),
        userUrl: utils.generateUserUrl()
      })
      .then(function(newBracket) {
        res.status(201).send(newBracket);
      })
      .catch(function(err) {
        console.error(err);
        res.status(500).send();
      });
    },
    findAdminBracket: function(req, res) {
      db.Bracket.findOne({where: {adminUrl: req.query.url}})
      .then(function(bracket) {
        console.log(bracket)
        res.status(200).send(bracket);
      })
      .catch(function(err) {
        console.error(err);
        res.status(500).send();
      });
    },
    findUserBracket: function(req, res) {
      console.log(req.query.url)
      db.Bracket.findOne({where: {userUrl: req.query.url}})
      .then(function(bracket) {
        console.log(bracket)
        res.status(200).send(bracket);
      })
      .catch(function(err) {
        console.error(err);
        res.status(500).send();
      });
    }
  },
  Competitor: {
    createCompetitor: function(req, res) {
      db.Competitor.create({
        bracketId: req.body.bracketId,
        name: req.body.name
      })
      .then(function(newCompetitor) {
        res.status(201).send(newCompetitor);
      })
      .catch(function(err) {
        console.error(err);
        res.status(500).send();
      });
    },
    findCompetitor: function(req, res) {
      db.Competitor.findOne({where: {id: req.query.id}})
      .then(function(competitor) {
        res.status(200).send(competitor);
      })
      .catch(function(err) {
        console.error(err);
        res.status(500).send();
      });
    }
  },
  Round: {
    createRound: function(req, res) {
      db.Round.create({
        bracketId: req.body.bracketId,
        competitor1: req.body.competitor1,
        competitor2: req.body.competitor2
      })
    },
    findRound: function(req, res) {
      db.Round.findOne({where: {id: req.query.id}})
      .then(function(round) {
        res.status(200).send(round);
      })
      .catch(function(err) {
        console.error(err);
        res.status(500).send();
      });
    }
  }
};
