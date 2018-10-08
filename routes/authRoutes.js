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
                failureRedirect: '/out'
        }));

    app.get('/auth/current_user', (req, res) => {
        console.log(req.user);
        res.send(req.user);
    });

    app.get(
        '/auth/logout', (req, res) => {
            req.logout();
            res.redirect('/');
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
