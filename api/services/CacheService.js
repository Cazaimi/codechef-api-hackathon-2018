module.exports = {
  set: async function(key, value) {
    await sails.getDatastore('cache').leaseConnection(async function during(db, proceed) {
      db.set(key, value, function(err, res) {        
        if (err) { console.log('3'); return 'error storing key in cache.'; }


        return proceed();
      });
    });
  }
}