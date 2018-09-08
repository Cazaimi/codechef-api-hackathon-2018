/**
 * AuthenticateController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const request = require('request');

module.exports = {
  
  login: function(req, res) {
    let invitee = _.get(req, 'session.invitee', true);

    if (!invitee) {
      return res.renderView('/login', { some_state_values: 'placeholder' });
    } 

    return res.renderView('/login', { some_state_values: 'placeholder' });
  },

  authenticate: function(req, res) {
    res.redirect(`https://api.codechef.com/oauth/authorize?response_type=code&client_id=${sails.config.clientId}&redirect_uri=${sails.config.redirectURI}/landing&state=xyz`)
  },

  landing: function(req, res) {
    let code = _.get(req, 'query.code'),
      state = _.get(req, 'query.state'),
      options = {
        uri: 'https://api.codechef.com/oauth/token',
        method: 'POST',
        json: true,
        body: {
          grant_type: 'authorization_code',
          code: code,
          client_id: sails.config.clientId,
          client_secret: sails.config.clientSecret,
          redirect_uri: `${sails.config.redirectURI}/landing`
        }
      },
      accessToken,
      refreshToken;

    // @todo: Perform a state check (CSRF) here  
    // if()

    async.waterfall([
      function(cb) {
        request(options, function(err, res, body) {
          if (err) { return cb(err); }

          return cb(null, body);
        });
      },
      function(body, cb) {
        /**{ status: 'OK',
  result:
   { data:
      { access_token: 'aa72ffdc22a35f49289b568201edd2ccb24503de',
        expires_in: 3600,
        token_type: 'Bearer',
        scope: 'public',
        refresh_token: '33774915e69e251f0e083a3f62096d5f08ab40b2' } } } */
        accessToken = _.get(body, 'result.data.access_token');
        refreshToken = _.get(body, 'result.data.refresh_token');

        return cb(null, {accessToken, refreshToken});
      }
    ], function(err, results) {
      return res.json({ results });
    });
  }
};

