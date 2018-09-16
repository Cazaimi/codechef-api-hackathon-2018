/**
 * ActiveSession.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
    id: {
      type: 'number',
      unique: true,
      required: true,
      allowNull: false
    },
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

