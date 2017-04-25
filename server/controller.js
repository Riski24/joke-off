var db = require('./database/db.js');

module.exports = {
  questions: {
    getAll: function(req, res) {
      db.questions.findAll({raw: true})
        .then(function(results) {
          //if (err) { console.error(err); }
          res.send(results);
        });
    },

    postOne: function(req, res) {
      db.questions.create({
        choice1: req.body.choice1,
        choice2: req.body.choice2
      })
      .then(function(results) {
        //if (err) { console.log(err) }
        console.log('question accepted into database');
        res.sendStatus(201);
      });
    },

    vote: function(req, res) {
      db.questions.findOne({where: {id: req.body.id}})
        .then(function(question) {
          console.log('choice', req.body.choice)
          if (req.body.choice === 1) {
            question.votes1++;
          } else if (req.body.choice === 2) {
            question.votes2++;
          }
          question.save().then(function() {
            res.sendStatus(201);
          });
        });
    }
  }
}
