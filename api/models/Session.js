/**
 * Session.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  autoPK: true,
  attributes: {
    initiatingUserId: {
      type: 'number',
      allowNull: false
    },
    invitedMembers: {
      type: 'json',
      allowNull: true,
      defaultsTo: {}
    },
    activeMembers: {
      type: 'json',
      allowNull: true,
      defaultsTo: {}
    },
    active: {
      type: 'boolean',
      required: true,
      defaultsTo: false
    },
    url: {
      type: 'string',
      required: true,
      size: 256
    },
    contestSettings = {
      type: 'json',
      required: true,
      defaultsTo: {
        noOfProblems: 0,
        difficulty: 'easy',
        timeForEachProblem: 30,
        maximumMembers: 5,
        
      }
    }
  },

};

