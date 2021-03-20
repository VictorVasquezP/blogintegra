const postgres = require('pg');

const connection = new postgres.Pool({
    user: "postgres",
    host: "localhost",  
    database: "blog_integra",
    password: "123",
    port: 5432
});

const getConnection = () => {
    return connection;
}

const getTable = async () => {
    try {
        const conx = await getConnection();
        const result = await conx.query(
        "SELECT * from usuario"
        );
        return result.rows;
    } catch (error) {
        console.log(error);
    }
}

const insertUsuario = async (usuario, correo, password) => {
    try{
        const conx = await getConnection();
        const consulta = await conx.query(
        `INSERT INTO usuario(usuario, correo, password) VALUES (?, ?, ?)`,
        [usuario, correo, password]);
    }catch(error){
        console.log(error);
    }
}

const login = async (correo, password) => {
    const conx = await getConnection();
    const consulta = await conx.query(
        `select count(id) as exist from usuario
            where correo='${correo}' and password='${password}';`
    );
    return parseInt(consulta.rows[0].exist) !== 0;
}

const insertComentario = async c => {
    try{
        const conx = await getConnection();
        const consulta = await conx.query(
        `INSERT INTO comentario(descripcion, fecha, hora, id_usu, id_blo) VALUES (?, ?, ?, ?, ?)`,
        [c.descripcion,c.fecha,c.hora, c.idUsu, c.idBlo]);
    }catch(error){
        console.log(error);
    }
}

exports.getComentarios = async idBlog =>{
    try {
        const conx = await getConnection();
        const result = await conx.query(
        "SELECT * FROM comentario WHERE id_blo = " + idBlog
        );
        return result.rows;
    } catch (error) {
        console.log(error);
    }
}