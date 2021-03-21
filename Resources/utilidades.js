let mongoose = require('mongoose');

module.exports = {
    stringToDate: function (parametros, keys) {
        keys.forEach(key => {
            if (parametros[key]) {
                if (parametros[key][0] == '{') {
                    parametros[key] = JSON.parse(parametros[key]);
                    parametros[key]['$gte'] = new Date(parametros[key]['$gte']);
                    parametros[key]['$lte'] = new Date(parametros[key]['$lte']);
                } else {
                    parametros[key] = new Date(parametros[key]);
                }
            }
        });
        return parametros;
    },
    stringToObjectIds: function (parametros, keys) {
        keys.forEach(key => {
            if (parametros[key]) {
                parametros[key] = mongoose.Types.ObjectId(parametros[key])
            }
        });
        return parametros;
    }
}