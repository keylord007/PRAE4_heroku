let utilidades = require("../Resources/utilidades");
let Paginas = require("../models/modelPaginas.js");
let mongoose = require('mongoose');

async function getPaginasFiltro(req, res, next) {
    let params = req.query;
    params = utilidades.stringToObjectIds(params, Paginas.getCamposObjectId())
    params = utilidades.stringToDate(params, Paginas.getCamposDate())
    let paginas = await Paginas.find({ $and: [params] }).populate(Paginas.getCamposObjectId().join(' '));
    return res.json({ status: 200, success: true, mensaje: "Paginas", paginas });
}

async function actualizarPagina(req, res, next) {
    let requestParametros = req.body;
    if (requestParametros._id) {
        let idPagina = mongoose.Types.ObjectId(requestParametros._id)
        let pagina = await Paginas.findOne({ _id: idPagina }).populate(Paginas.getCamposObjectId().join(' '));

        Object.keys(requestParametros).forEach(parametro => {
            if (parametro == '_id') {
                return
            }
            pagina[parametro] = requestParametros[parametro]
        });
        pagina = await pagina.save();

        return res.json({ status: 200, success: true, mensaje: "Pagina Actualizada", pagina });
    } else {
        res.send({ status: 400, error: 'Faltan Campos Requeridos' });
    }
}

async function crearPagina(req, res, next) {
    let requestParametros = req.body;
    if (requestParametros.f_descripcion) {
        let pagina = new Paginas(requestParametros)
        pagina = await pagina.save();
        return res.json({ status: 200, success: true, mensaje: "Pagina Creada", pagina });

    } else {
        res.send({ status: 400, error: 'Faltan Campos Requeridos' });
    }
}
exports.getPaginasFiltro = getPaginasFiltro;
exports.crearPagina = crearPagina;
exports.actualizarPagina = actualizarPagina;
