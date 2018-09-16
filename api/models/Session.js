/**
 * Session.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  attributes: {
    displayName: {
      type: 'string',
      required: true
    }
    initiatingUserId: {
      type: 'number',
      allowNull: false
    },
    invitedMembers: {
      type: 'json',
      defaultsTo: {}
    },
    activeMembers: {
      type: 'json',
      defaultsTo: {}
    },
    active: {
      type: 'boolean',
      defaultsTo: false
    },
    url: {
      type: 'string',
      required: true,

    },
    contestSettings: {
      type: 'json',
      defaultsTo: {
        noOfProblems: 0,
        difficulty: 'easy',
        timeForEachProblem: 30,
        maximumMembers: 5,

      }
    }
  },

};

