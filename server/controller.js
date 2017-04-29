var db = require('./database/db.js');

module.exports = {
  Bracket: {
    createBracket: function(req, res) {
      var adminUrl = 'PLACEHOLDER';
      var userUrl = 'PLACEHOLDER';
      db.Bracket.create({
        adminUrl: adminUrl,
        userUrl: userUrl
      })
      .then(function(newBracket) {
        res.status(201).send(newBracket);
      })
      .catch(function(err) {
        console.error(err);
        res.status(500).send();
      });
    },
    findBracket: function(req, res) {
      // Check if user url
      db.Bracket.findOne({where: {userUrl: req.query.url}})
      .then(function(bracket) {
        if (!bracket) {
          // If bracket isnt found check if admin url
          db.Bracket.findOne({where: {adminUrl: req.query.url}})
          .then(function(bracket) {
            res.status(200).send({bracket: bracket, admin: true});
          })
          .catch(function(err) {
            console.error(err);
            res.status(500).send();
          });
        } else {
          res.status(200).send({bracket: bracket, admin: false});
        }
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
