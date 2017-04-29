var db = require('./config.js');

db.sync();

exports.Bracket = db.models.Bracket;
exports.Competitor = db.models.Competitor;
