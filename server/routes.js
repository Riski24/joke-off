var controller = require('./controller.js');

module.exports = function(app) {
  app.get('/api/questions', controller.questions.getAll);
  app.post('/api/create-question', controller.questions.postOne);
  app.post('/api/vote', controller.questions.vote);
  //app.get('/api/create-dummmy-data', questionController.createDummyData);
};
