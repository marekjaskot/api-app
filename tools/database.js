/**
 * Created by Marek on 25.05.2016.
 */
var User = require('./../models/user');
var OauthClient = require('./../models/oauth_client');

var config = require('./../config');
var mongoose = require('mongoose');

mongoose.connect(config.db, {});
User.create({
    email: 'marekjaskot@gmail.com',
    password: '$2a$10$aZB36UooZpL.fAgbQVN/j.pfZVVvkHxEnj7vfkVSqwBOBZbB/IAAK'
}, function(err,data) {
    console.log(3333333)
    console.log(err,data)
    OauthClient.create({
        clientId: '1',
        clientSecret: '123',
        redirectUri: '/oauth/redirect'
    }, function(err,data) {
        if(err) console.log(err);
        console.log(data)
        process.exit();
    });
});
