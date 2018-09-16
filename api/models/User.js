/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  attributes: {
    userName: {
      type: 'string',
      unique: true,
      required: true
    },
    accessToken: {
      type: 'string',
      unique: true,
      required: true
    },
    refreshToken: {
      type: 'string',
      unique: true,
      required: true
    },
    roomInvites: {
      type: json
    }
  }
};

