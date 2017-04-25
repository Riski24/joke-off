var db = require('./config.js');

users.sync();
questions.sync({force: true})
.then(function() {
/////////////////////////////////////////////////////////////////
////////////////////////// SAMPLE DATA //////////////////////////
  var sampleData = [
    {choice1: 'Always be late', choice2: 'Always be unprepared'},
    {choice1: 'Be a carrot', choice2: 'Be a cucumber'},
    {choice1: 'Always be naked', choice2: 'Always be itchy'},
    {choice1: 'Have no thumbs', choice2: 'Have only thumbs'},
    {choice1: 'Never read another book', choice2: 'Never hear another song'}
  ];

  for (var i = 0; i < sampleData.length; i++) {
    (function(i) {
      questions.create({
        choice1: sampleData[i].choice1,
        choice2: sampleData[i].choice2
      });
    })(i)
  }
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
});
userQuestionVotes.sync();
