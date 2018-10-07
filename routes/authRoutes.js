const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/facebook',
        passport.authenticate('facebook')
    );

    app.get(
        '/auth/facebook/callback',
        passport.authenticate('facebook', { 
                successRedirect: '/success',
                failureRedirect: '/'
        }));

    app.get(
        '/auth/logout', (req, res) => {
            req.logout();
            res.redirect('/out');
        });

    app.get(
        '/success', (req, res) => {
            res.send({'done': 'success!'});
        });

    app.get(
        '/out', (req, res) => {
            res.send({'logged': 'out'});
        });
}
