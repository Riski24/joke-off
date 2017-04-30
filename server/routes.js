var controller = require('./controller.js');

module.exports = function(app) {
	app.post('/api/Bracket', controller.Bracket.createBracket);
	app.get('/api/Bracket', controller.Bracket.findBracket);

	app.post('/api/Competitor', controller.Competitor.createCompetitor);
	app.get('/api/Competitor', controller.Competitor.findCompetitor);

	app.post('/api/Round', controller.Round.createRound);
	app.get('/api/Round', controller.Round.findRound);
};
