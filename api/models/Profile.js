/**
 * Profile.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

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

