/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  attributes: {
    userId: {
      type: 'number',
      unique: true,
      allowNull: false,
      primaryKey: true
    },
    accessToken: {
      type: 'string',
      size: 256,
      unique: true
    },
    refreshToken: {
      type: 'string',
      size: 256,
      unique: true
    }
  }
};

