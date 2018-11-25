const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    const { email } = req.user;
    console.log('userEmail :', email);

    if (email === 'invalid') {
      console.log('invalid email');
      req.logout();
      res.redirect('/unauthorized');
    } else {
      res.redirect('/');
    }
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
