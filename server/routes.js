var controller = require('./controller.js');

module.exports = function(app) {
	app.post('/api/createBracket', controller.Bracket.createBracket);
	app.get('/api/findBracket', controller.Bracket.findBracket);

	app.post('/api/createCompetitor', controller.Competitor.createCompetitor);
	app.get('/api/findCompetitor', controller.Competitor.findCompetitor);

	app.post('/api/createRound', controller.Round.createRound);
	app.get('/api/findRound', controller.Round.findRound);
};
