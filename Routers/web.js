module.exports = (router) => {
    
    let authController = require("../Controllers/auth.controller");
    let paginasController = require("../Controllers/paginas.controller");
    let multimediasController = require("../Controllers/multimedias.controller");
    
    router.use(authController.authorizationMiddleware); // middleware 
    
    router.get("/paginas", paginasController.getPaginasFiltro);
    router.post("/paginas/crear-pagina", paginasController.crearPagina);
    router.post("/paginas/actualizar-pagina", paginasController.actualizarPagina);
    
    router.get("/multimedias", multimediasController.getMultimediasFiltro);
    router.post("/multimedias/crear-multimedia", multimediasController.crearMultimedia);
    router.post("/multimedias/actualizar-multimedia", multimediasController.actualizarMultimedia);

	return router;
}