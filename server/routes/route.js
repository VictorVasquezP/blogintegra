const router = require("express").Router();
const controller = require("./../controllers/controller");

router.post('/user/login', controller.login);
router.post('/user/insert', controller.insertUsuario);
router.get('/user/prefs/:id', controller.getPreferences);
router.get('/comment/:id', controller.getComentarios);
router.post('/comment/insert', controller.insertComentario);
module.exports = router;