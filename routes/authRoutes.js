const passport = require('passport');

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Home!!!');
  });

  app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.send('Logged in!!!!!!!!');
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send('Logged out');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
