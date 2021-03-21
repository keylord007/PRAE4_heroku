const crypto = require('crypto').randomBytes(256).toString('hex');

var config = {
    db_uri:"mongodb+srv://admink:key@praedb.drfcw.mongodb.net/praedb?retryWrites=true&w=majority",
    db_database: "praedb",
    db_secret: crypto,
}

exports.get = function get() {
    return config;
}
