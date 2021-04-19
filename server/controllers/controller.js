const db = require('./../config/db');

exports.login = async (req, res) => {
    const consulta = await db.query(
        `select id, usuario from usuario where usuario=$1 and password=$2;`,
        [req.body.usuario, req.body.password]
    );
    res.status(200).json(consulta.rows[0]);
}

exports.insertUsuario = async (req, res) => {
    try{
        const consulta = await db.query(
        `INSERT INTO usuario(usuario, correo, password) VALUES ($1, $2, $3)  RETURNING id`,
        [req.body.usuario, req.body.email, req.body.password]);
        
        if(req.body.hotel) await  insertPrefs(consulta.rows[0].id, 1)
        if(req.body.restaurant) await insertPrefs(consulta.rows[0].id, 2)
        if(req.body.factura) await insertPrefs(consulta.rows[0].id, 3)

        res.status(200).json(consulta);
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
            WHERE ID_USU = $1`,[req.params.id]
        )
        res.status(200).json(consulta.rows);
    } catch (error) {
        console.log(error);
    }
}

exports.getComentarios = async (req,res) =>{
    if(!req.params.id){
        res.status(400).json({
            msg: 'Id no encontrado'
        });
        return;
    }
    try {
        const result = await db.query(
        "SELECT * FROM comentario WHERE id_blo = " + req.params.id
        );

        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
}

exports.insertComentario = async c => {
    try{
        const conx = await getConnection();
        const consulta = await conx.query(
        `INSERT INTO comentario(descripcion, fecha, hora, id_usu, id_blo) VALUES (?, ?, ?, ?, ?)`,
        [c.descripcion,c.fecha,c.hora, c.idUsu, c.idBlo]);
    }catch(error){
        console.log(error);
    }
}
