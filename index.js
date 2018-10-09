const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

//adding temp self-generated certificate before mnoving to prod
app.get('/.well-known/acme-challenge/:content', function(req, res) {
    res.send('6tVoHnZ7xnilFnCHAm36TSpwdBto2wgSHCalOWTJ5ZY.6-FYcwu-egvHx29MGtnWxsaJ1EWfHSD1byL-jGjSdi8')
  })

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);