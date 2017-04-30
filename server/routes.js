var controller = require('./controller.js');

module.exports = function(app) {
	app.post('/api/Bracket', controller.Bracket.createBracket);
	app.get('/api/userBracket', controller.Bracket.findUserBracket);
	app.get('/api/adminBracket', controller.Bracket.findAdminBracket);

	app.post('/api/Competitor', controller.Competitor.createCompetitor);
	app.get('/api/Competitor', controller.Competitor.findCompetitor);
	app.get('/api/Competitors', controller.Competitor.findBracketCompetitors);

	app.post('/api/Round', controller.Round.createRound);
	app.get('/api/Round', controller.Round.findRound);
};
