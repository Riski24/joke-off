var Sequelize = require('sequelize');
var db = null;
if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL);
} else {
  db = new Sequelize('joke-off-local', 'root', '');
}

var Bracket = db.define('brackets', {
  adminUrl: {type: Sequelize.STRING, allowNull: false, unique: true},
  userUrl: {type: Sequelize.STRING, allowNull: false, unique: true}
});

var Competitor = db.define('competitors', {
  name: Sequelize.STRING
});

var Round = db.define('rounds', {
  competitor1: Sequelize.INTEGER,
  competitor2: Sequelize.INTEGER,
  winner: Sequelize.INTEGER
});

Competitor.belongsTo(Bracket, {as: 'bracket'});
Round.belongsTo(Bracket, {as: 'bracket'});

module.exports = db;
