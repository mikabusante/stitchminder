const passport = require('passport');

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Home!!!');
  });

  app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.send('Hi!!!!!');
  });
};
