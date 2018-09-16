module.exports = {
  set: async function(key, value) {
    await sails.getDatastore('cache').leaseConnection(async function during(db, proceed) {
      db.set(key, value, function(err) {        
        if (err) { return 'error storing key in cache.'; }

        return proceed();
      });
    });
  }
}