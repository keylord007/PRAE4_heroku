const crypto = require('crypto').randomBytes(256).toString('hex');

var config = {
    db_uri:"mongodb://admink:key@localhost:27017/praedb",
    db_database: "praedb",
    db_secret: crypto,
}

exports.get = function get() {
    return config;
}