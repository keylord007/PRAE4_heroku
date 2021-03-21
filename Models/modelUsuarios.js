let mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

let Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let c_usuarios = new Schema({
	f_email: { type: String, required: true, unique: true, lowercase: true },
	f_username: { type: String, required: true, lowercase: true },
	f_password: { type: String, required: true },
	f_fecha: { type: Date, default: Date.now },
	f_isActivo: { type: Boolean, default: false },
	f_roles: [{ type: Schema.Types.ObjectId, required: false }]
});

c_usuarios.static("getCamposObjectId", function () {
	return []
})
c_usuarios.pre("save", function (next) {
	if (!this.isModified("f_password")) {
		return next();
	}

	bcrypt.hash(this.f_password, null, null, (err, hash) => {
		if (err)
			next(err);
		this.f_password = hash;
		next();
	});
})

c_usuarios.methods.comparePassword = function (password) {
	return bcrypt.compareSync(password, this.f_password);
}

module.exports = mongoose.model('c_usuarios', c_usuarios);
