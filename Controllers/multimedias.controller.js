let utilidades = require("../Resources/utilidades");
let Multimedias = require("../models/modelMultimedias");
let Paginas = require("../models/modelPaginas");
let mongoose = require('mongoose');

async function getMultimediasFiltro(req, res, next) {
    let params = req.query;
    params = utilidades.stringToObjectIds(params, Multimedias.getCamposObjectId())
    params = utilidades.stringToDate(params, Multimedias.getCamposDate())
    let multimedias = await Multimedias.find({ $and: [params] }).populate(Multimedias.getCamposObjectId().join(' '));
    return res.json({ status: 200, success: true, mensaje: "Multimedias", multimedias });
}

async function actualizarMultimedia(req, res, next) {
    let requestParametros = req.body;
    if (requestParametros._id) {
        let idMultimedia = mongoose.Types.ObjectId(requestParametros._id)
        let multimedia = await Multimedias.findOne({ _id: idMultimedia });

        Object.keys(requestParametros).forEach(parametro => {
            if (parametro == '_id') {
                return
            }
            multimedia[parametro] = requestParametros[parametro]
        });
        multimedia = await multimedia.save();
        multimedia = await multimedia.populate(Multimedias.getCamposObjectId().join(' ')).execPopulate();
        return res.json({ status: 200, success: true, mensaje: "Multimedia Actualizada", multimedia });
    } else {
        res.send({ status: 400, error: 'Faltan Campos Requeridos' });
    }
}

async function contarConsumoMultimedia(req, res, next) {
    let requestParametros = req.params;
    if(requestParametros.pagina && requestParametros.idElemento) {
        let idPagina = mongoose.Types.ObjectId(requestParametros.pagina)
       let multimedia = await Multimedias.findOne({f_pagina: idPagina, f_id_elemento: requestParametros.idElemento})
        multimedia.f_cantidad_consumo = multimedia.f_cantidad_consumo ? ++multimedia.f_cantidad_consumo : 1
        multimedia.save();
       return res.json({ status: 200, success: true, mensaje: "Consumo contado", multimedia });
    } else {
        res.send({ status: 400, error: 'Faltan Campos Requeridos' });
    }
}

async function getMultimediaByPaginas(req, res, next) {
    let requestParametros = req.params;
    if (requestParametros.pagina) {
       let pagina = await Paginas.findOne({f_slug: requestParametros.pagina})
       let multimedias = await Multimedias.find({f_pagina: pagina._id})
       return res.json({ status: 200, success: true, mensaje: "Multimedia", multimedias });
    } else {
        res.send({ status: 400, error: 'Faltan Campos Requeridos' });
    }
}

async function crearMultimedia(req, res, next) {
    let requestParametros = req.body;
    if (requestParametros.f_descripcion) {
        let multimedia = new Multimedias(requestParametros)
        multimedia = await multimedia.save();
        return res.json({ status: 200, success: true, mensaje: "Multimedia Creada", multimedia });

    } else {
        res.send({ status: 400, error: 'Faltan Campos Requeridos' });
    }
}
exports.getMultimediasFiltro = getMultimediasFiltro;
exports.crearMultimedia = crearMultimedia;
exports.actualizarMultimedia = actualizarMultimedia;
exports.getMultimediaByPaginas = getMultimediaByPaginas;
exports.contarConsumoMultimedia = contarConsumoMultimedia;
