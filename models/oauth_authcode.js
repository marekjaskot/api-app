var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    OauthCodeSchema =  require('./schemas').OauthCode

var OAuthAuthCodeSchema = new Schema(OauthCodeSchema);

mongoose.model('oauth_authcodes', OAuthAuthCodeSchema);

var OAuthAuthCodeModel = mongoose.model('oauth_authcodes');

module.exports.getAuthCode = function(authCode, callback) {
  OAuthAuthCodeModel.findOne({ authCode: authCode }, callback);
};

module.exports.saveAuthCode = function(code, clientId, expires, userId, callback) {
  var fields = {
    clientId: clientId,
    userId: userId,
    expires: expires
  };

  OAuthAuthCodeModel.update({ authCode: code }, fields, { upsert: true }, function(err) {
    if (err) {
      console.error(err);
    }

    callback(err);
  });
};
