let jwt = require("jsonwebtoken");
let User = require("../Models/modelUsuarios");
const { db_secret } = require("../config.js").get();


async function login(req, res, next) {
    let params = req.body;
    if (params.f_username && params.f_password) {
        let user = await User.findOne({ f_username: params.f_username.toLowerCase() })
            .populate({ path: "f_roles", populate: { path: "" } })
        if (user && user.f_isActivo) {
            let validPassword = user.comparePassword(params.f_password);
            if (validPassword) {
                let token = jwt.sign({ userId: user._id }, db_secret, { "expiresIn": "24h" });
                return res.json({ status: 200, success: true, mensaje: "Login Exito", login: { user, token: token } });
            } else {
                return responseErrorGeneric(res, 401, "Contraseña incorrecta")
            }
        } else {
            return responseErrorGeneric(res, 401, "Usuario no disponible")
        }
    } else {
        return responseErrorGeneric(res, 404, "Faltan parametros")
    }
}

function authorizationMiddleware(req, res, next) {
    let token = req.headers['authorization'];
    if (token) {
        jwt.verify(token, db_secret, (err, decoded) => {
            if (!err) {
                req.decoded = decoded;
                next();
            } else {
                res.send({ status: 401, error: 'Token no Autorizado' });
            }
        })
    } else {
        res.send({ status: 401, error: 'Token no Encontrado' });
    }
}


function responseErrorGeneric(response, status, mensaje = '', datosExtras = {}) {
    return response.send({ status, success: false, mensaje, datosExtras });
}
exports.authorizationMiddleware = authorizationMiddleware;
exports.login = login;
