const moment = require('moment');
moment.locale('es-mx');
const db = require('./../config/db');

exports.login = async (req, res) => {
    const consulta = await db.query(
        `select id, usuario from usuario where usuario=$1 and password=$2 and id_google IS NULL and id_face IS NULL;`,
        [req.body.usuario, req.body.password]
    );
    res.status(200).json(consulta.rows[0]);
}

exports.searchUsuario = async (req, res) =>{
    const { name, id } = req.params
    const consulta = await db.query(
        "select id, usuario from usuario where "+ name +"=$1",
        [id]
        );
    res.status(200).json(consulta.rows[0]);
}

exports.insertUsuario = async (req, res) => {
    try {
        const consulta = await db.query(
            `INSERT INTO usuario(usuario, correo, password) VALUES ($1, $2, $3)  RETURNING id`,
            [req.body.usuario, req.body.email, req.body.password]);

        if (req.body.hotel) await insertPrefs(consulta.rows[0].id, 1)
        if (req.body.restaurant) await insertPrefs(consulta.rows[0].id, 2)
        if (req.body.factura) await insertPrefs(consulta.rows[0].id, 3)

        res.status(200).json(consulta);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.insertUsuarioPlatform = async (req, res) => {
    const { name } = req.params
    const { usuario, email, id, hotel, restaurant, factura } = req.body
    try{
        const consulta = await db.query(
        "INSERT INTO usuario(usuario, correo, "+ name +") VALUES ($1, $2, $3)  RETURNING usuario, id",
        [usuario, email, id]);
        if(hotel) await  insertPrefs(consulta.rows[0].id, 1)
        if(restaurant) await insertPrefs(consulta.rows[0].id, 2)
        if(factura) await insertPrefs(consulta.rows[0].id, 3)

        res.status(200).json(consulta.rows[0]);
    }catch(error){
        res.status(500).json(error);
    }
}

const insertPrefs = async (idUser, idCat) =>{
    const consulta = await db.query('INSERT INTO PREFERENCIAS(ID_USU, ID_CAT) VALUES($1, $2)',[idUser, idCat]);
}

exports.getPreferences = async (req,res) =>{
    try {
        const consulta = await db.query(
            `SELECT C.NOMBRE FROM PREFERENCIAS P JOIN CATEGORIA C ON P.ID_CAT = C.ID
            WHERE ID_USU = $1`, [req.params.id]
        )
        res.status(200).json(consulta.rows);
    } catch (error) {
        console.log(error);
    }
}

exports.getComentarios = async (req, res) => {
    if (!req.params.id) {
        res.status(400).json({
            msg: 'Id no encontrado'
        });
        return;
    }
    try {
        const result = await db.query(
         "SELECT C.*, U.usuario FROM comentario C INNER JOIN usuario U ON C.id_usu = U.id WHERE C.ID_BLO =" + req.params.id + " ORDER BY C.ID DESC"
        );

        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
}

exports.insertComentario = async (req, res) => {
    try{
        const { descripcion, idUsu, idBlo } = req.body
        let fecha = moment().format('L');
        let hora = moment().format('LT'); 
        const result = await db.query(
        `INSERT INTO comentario(descripcion, fecha, hora, id_usu, id_blo) VALUES ($1, $2, $3, $4, $5)`,
        [descripcion, fecha, hora, idUsu, idBlo]);
        res.status(200).json(result.rows)
    }catch(error){
        console.log(error);
    }
}

exports.insertBlog = async (req, resp) => {
    try {
        var aux = JSON.stringify(req.body);
        console.log("Insert blog " + aux);
        var date = new Date();
        var id_cat = 0;
        if(req.body.hotel){
            id_cat = 1;
        }else if(req.body.restaurante){
            id_cat = 2;
        }else if(req.body.facturacion){
            id_cat = 3;
        }
        
        db.query(
        `INSERT INTO blog(titulo, descripcion, fecha, imagen, id_usu, id_cat) VALUES ($1, $2, $3, $4, $5, $6)`,
        [req.body.titulo,req.body.descripcion,(date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()),req.body.imagen,req.body.id_usu,id_cat]);
        
    } catch (error) {
        console.log(error);
    }
    resp.status(200).json({mensaje: "insertado"});
}

exports.deleteComentario = async (req, res) => {
    try{
        const { id } = req.params;
        const result = await db.query(
        `DELETE FROM comentario WHERE id = $1`, [id]);
        res.status(200).json(result.rows)
    }catch(error){
        console.log(error);
    }
}

exports.getBlogId = async (req, res) => {
    var id = req.params.id;
    console.log("id "+req.params.id);
    try {
        const result = await db.query(
            "SELECT g.*, u.usuario FROM blog as g INNER JOIN usuario as u ON g.id_usu = u.id WHERE g.id = $1",
            [id]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
}

exports.getBlogs = async (req, res) => {
    try {
        const result = await db.query(
            "SELECT g.*, u.usuario FROM blog as g INNER JOIN usuario as u ON g.id_usu = u.id"
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
}

exports.getBlogsPublicos = async (req, res) => {
    try {
        const result = await db.query(
            "select g.id, g.imagen, g.titulo as title, g.descripcion as description, g.fecha as date, (SELECT u.usuario from usuario as u WHERE u.id = g.id_usu ) as author, (SELECT c.nombre from categoria as c WHERE c.id = g.id_cat) as category, (select count(*) from comentario as co WHERE co.id_blo = g.id) as comments from blog as g"
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
}

exports.updateBlog = async (req, res) => {
    try {
        var id_cat = 0;
        if(req.body.hotel){
            id_cat = 1;
        }else if(req.body.restaurante){
            id_cat = 2;
        }else if(req.body.facturacion){
            id_cat = 3;
        }

        const result = await db.query(
            "UPDATE blog set titulo = $1, descripcion = $2, imagen = $3, id_cat = $4 WHERE id = $5",
            [req.body.titulo,req.body.descripcion,req.body.imagen,id_cat,req.body.id]
        );
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

exports.deteleBlog = async (req, res) => {
    try {
        const result = await db.query(
            "DELETE FROM blog WHERE id = $1",[req.body.id]
        );
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}
