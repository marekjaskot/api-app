/**
 * Created by Marek on 24.05.2016.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    oauthserver = require('oauth2-server'),
    oauth2 = require('./models/oauth2')


var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.oauth = oauthserver({
    model: oauth2,
    grants: ['password'],
    debug: true
});

app.all('/oauth/token', app.oauth.grant());

app.get('/', app.oauth.authorise(), function (req, res) {
    res.send('Secret area');
});

app.use(app.oauth.errorHandler());

app.listen(3000);