var db = require('./config.js');

db.sync();

exports.users = db.models.users;
exports.questions = db.models.questions;
exports.userQuestionVotes = db.models.userQuestionVotes;
