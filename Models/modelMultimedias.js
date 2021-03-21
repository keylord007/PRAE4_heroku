let mongoose = require('mongoose');

let Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let c_multimedias = new Schema({
	f_pagina: { type: Schema.Types.ObjectId, required: true, ref: 'c_paginas' },
	f_descripcion: { type: String, required: true },
	f_id_elemento: { type: String, required: false },
	f_url: { type: String, required: true },
	f_tipo_multimedia: { type: Number, required: true }, // 1 => imagen, 2 => video normal (mp4), 3 => video Youtube, 4 => PDF, 5=> PDF Enlace
	f_fecha: { type: Date, default: Date.now },
	f_nota: { type: String, required: false },
	f_cantidad_consumo: { type: Number, required: false },
	f_activo: { type: Boolean, default: true }
});
c_multimedias.static("getCamposObjectId", function () {
	return ['f_pagina']
})
c_multimedias.static("getCamposDate", function () {
	return ["f_fecha"]
})
module.exports = mongoose.model('c_multimedias', c_multimedias);
