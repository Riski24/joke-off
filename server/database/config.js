var Sequelize = require('sequelize');
var db = null;
if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL);
} else {
  db = new Sequelize('joke_off_local', 'root', '');
}

var Bracket = db.define('brackets', {
	name: Sequelize.STRING,
  adminUrl: {type: Sequelize.STRING, allowNull: false, unique: true},
  userUrl: {type: Sequelize.STRING, allowNull: false, unique: true}
});

var Competitor = db.define('competitors', {
	bracketId: {type: Sequelize.INTEGER, allowNull: false},
  name: Sequelize.STRING
});

var Round = db.define('rounds', {
	bracketId: {type: Sequelize.INTEGER, allowNull: false},
  competitor1: Sequelize.INTEGER,
  competitor2: Sequelize.INTEGER,
  winner: Sequelize.INTEGER
});

Competitor.belongsTo(Bracket, {foreignKey: 'bracketId'});
Round.belongsTo(Bracket, {foreignKey: 'bracketId'});

module.exports = db;
