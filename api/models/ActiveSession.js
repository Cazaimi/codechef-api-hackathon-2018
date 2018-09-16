/**
 * ActiveSession.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  autoPK: true,
  schema: true,
  attributes: {
    sessionId: {
      type: 'number',
      required: true,
      unique: true
    },
    currentProblemId: {
      type: 'number',
      required: true
    },
    currentActiveMembers: {
      type: 'number',
      required: true
    },
    scores: {
      type: 'json',
      required: true,
      allowNull: false
    },
  },

};
