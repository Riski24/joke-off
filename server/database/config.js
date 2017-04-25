var Sequelize = require('sequelize');
var db = null;
if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL);
} else {
  db = new Sequelize('wur_local', 'root', '');
}

var users = db.define('users', {
  username: {type: Sequelize.STRING, allowNull: false, unique: true}
  //password: {type: Sequelize.STRING, allowNull: false}
});

var questions = db.define('questions', {
  choice1: {type: Sequelize.STRING, allowNull: false},
  choice2: {type: Sequelize.STRING, allowNull: false},
  votes1: {type: Sequelize.INTEGER, defaultValue: 0},
  votes2: {type: Sequelize.INTEGER, defaultValue: 0}
});

var userQuestionVotes = db.define('user_question_votes', {
  userid: {type: Sequelize.INTEGER, allowNull: false},
  questionid: {type: Sequelize.INTEGER, allowNull: false},
  choice: {type: Sequelize.INTEGER, allowNull: false}
});

// users.belongsToMany(questions, {through: 'user_question_vote'});
// questions.belongsToMany(users, {through: 'user_question_vote'});

module.exports = db;
// exports.users = users;
// exports.questions = questions;
// exports.userQuestionVotes = userQuestionVotes;
