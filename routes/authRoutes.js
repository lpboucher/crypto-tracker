const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/facebook',
        passport.authenticate('facebook')
    );
}
