'use strict'
/**
 * Created by Marek on 25.05.2016.
 */
var mongoose = require('mongoose'),
    crypto = require('crypto'),
    bcrypt = require('bcrypt'),
    Schema = mongoose.Schema,
    userSchema =  require('./schemas').User

var OAuthUsersSchema  = new Schema(userSchema);


/**
 * rejestrowanie u¿ytkownika
 */
OAuthUsersSchema.static('register', function(fields, next) {
    let user;
    let salt = bcrypt.genSaltSync(10);

    fields.hashed_password = bcrypt.hashSync(fields.password, salt);
    delete fields.password;

    user = new OAuthUsersModel(fields);
    user.save(next);
});

/**
 * autoryzacja uzytkownika
 */
OAuthUsersSchema.static.('getUser',function(email, password, next){
    OAuthUsersModel.authenticate(email, password, function(err, user) {
        if (err || !user) return next(err);
        next(null, user.email);
    });
});

OAuthUsersSchema.static('authenticate', function(email, password, next) {
    this.findOne({ email: email }, function(err, user) {
        if (err || !user) return next(err);
        next(null, bcrypt.compareSync(password, user.hashed_password) ? user : null);
    });
});

mongoose.model('users', OAuthUsersSchema);

var OAuthUsersModel = mongoose.model('users');
module.exports = OAuthUsersModel;