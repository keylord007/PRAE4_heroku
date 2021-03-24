const crypto = require('crypto').randomBytes(256).toString('hex');

var config = {
    production: {
       db_uri: "mongodb+srv://admink:key@praedb.drfcw.mongodb.net/praedb?retryWrites=true&w=majority",
        db_database: "praedb",
        db_secret: crypto,
    },
    default: {
        db_uri: "mongodb+srv://admink:key@praedb.drfcw.mongodb.net/praedb?retryWrites=true&w=majority",
        db_database: "praedb",
        db_secret: crypto,

      //  db_uri: "mongodb://admink:key@localhost:27017/praedb",
      //  db_database: "praedb",
      //  db_secret: crypto,
    }
}

exports.get = function get(env) {
    return config[env] || config.default;
}
