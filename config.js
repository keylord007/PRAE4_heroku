const crypto = require('crypto').randomBytes(256).toString('hex');

var config = {
    db_uri:"mongodb://admink:key@praedb-shard-00-02.drfcw.mongodb.net:27017/praedb",
    db_database: "praedb",
    db_secret: crypto,
}

exports.get = function get() {
    return config;
}
