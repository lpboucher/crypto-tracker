const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/success');
        }
    );

    app.get('/auth/current_user', (req, res) => {
        console.log(req.user);
        res.send(req.user);
    });

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
