let mongoose = require('mongoose');

let Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let c_paginas = new Schema({
	f_descripcion: { type: String, required: true },
	f_slug: { type: String, required: true },
	f_fecha: { type: Date, default: Date.now },
	f_nota: { type: String, required: false },
	f_activo: { type: Boolean, default: true }
});
c_paginas.static("getCamposObjectId", function () {
	return []
})
c_paginas.static("getCamposDate", function () {
	return ["f_fecha"]
})

module.exports = mongoose.model('c_paginas', c_paginas);
