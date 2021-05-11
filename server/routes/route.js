const router = require("express").Router();
const controller = require("./../controllers/controller");

router.post('/user/login', controller.login);
router.post('/user/insert', controller.insertUsuario);
router.post('/user/insert/:name', controller.insertUsuarioPlatform);
router.get('/user/search/:name/:id', controller.searchUsuario);
router.get('/user/prefs/:id', controller.getPreferences);
router.get('/comment/:id', controller.getComentarios);
router.post('/comment/insert', controller.insertComentario);
router.delete('/comment/delete/:id', controller.deleteComentario);
router.post('/blog/insert', controller.insertBlog);
router.get('/blog/blogs', controller.getBlogs);
router.get('/blog/detalles/:id', controller.getBlogId);
router.get('/blog/blogsPublicos', controller.getBlogsPublicos);
router.put('/blog/update', controller.updateBlog);
router.delete('/blog/delete', controller.deteleBlog);
module.exports = router;