'use strict'
/**
 * Created by Marek on 24.05.2016
*/
var User = require('./user'),
    AuthCode = require('./oauth_authcode');


var oauth2 = {
    getAuthCode : AuthCode.getAuthCode,
    saveAuthCode : AuthCode.saveAuthCode,
    getUser: User.getUser
}

module.export = oauth2