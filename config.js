const crypto = require('crypto').randomBytes(256).toString('hex');

var config = {
    db_uri:"mongodb+srv://admink:key@cluster0.sjtj8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    db_database: "myFirstDatabase",
    db_secret: crypto,
}

exports.get = function get() {
    return config;
}
