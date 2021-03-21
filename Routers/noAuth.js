module.exports = (router) =>{
	let authController = require("../Controllers/auth.controller");
    let multimediasController = require("../Controllers/multimedias.controller");
	
	router.post("/authentication/login", authController.login);
	
    router.get("/multimedias/contar-consumo-multimedia/:pagina/:idElemento", multimediasController.contarConsumoMultimedia);
    router.get("/multimedias/multimedias-by-pagina/:pagina", multimediasController.getMultimediaByPaginas);

	return router;
}