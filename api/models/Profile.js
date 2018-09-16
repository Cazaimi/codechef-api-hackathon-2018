/**
 * Profile.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'number',
      unique: true,
      required: true,
      allowNull: false
    },
    userId: {
      type: 'number',
      required: true,
      unique: true
    },
    questionsSolvedTotal: {
      type: 'number'
    },
    questionsAttemptedTotal: {
      type: 'number'
    },
    questionsSolvedCurrent: {
      type: 'number'
    },
    questionsAttemptedCurrent: {
      type: 'number'
    }
  }
};

