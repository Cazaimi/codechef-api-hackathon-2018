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
    res.redirect(`https://api.codechef.com/oauth/authorize?response_type=code&client_id=${sails.config.clientId}&redirect_uri=${sails.config.redirectURI}&state=xyz`)
  },

  landing: async function(req, res) {
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
          redirect_uri: sails.config.redirectURI
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
        accessToken = _.get(body, 'result.data.access_token');
        refreshToken = _.get(body, 'result.data.refresh_token');

        return cb(null, accessToken, refreshToken);
      }
    ], function(err, accessToken, refreshToken) {
      if (err) { return res.serverError('Something went wrong. Please try again later.')}

      async.waterfall([
        async function(cb) {
          var record = await User.create({ accessToken, refreshToken }).fetch();

          return cb(null, record);
        }
      ], function(err, results) {
        console.log(results);
        return res.redirect(`/home?userId=${results.id}`);
      })


      
    });
  }
};

