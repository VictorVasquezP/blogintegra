
const pg = require('pg');

const connection = new pg.Pool({
    user: "postgres",
    host: "localhost",  
    database: "blog_integra",
    password: "123",
    port: 5432
});

const getConnection = () => {
    return connection;
}

export const getTable = async () => {
    console.log("function getTable");
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

export const insertUsuario = async (usuario: string, correo: string, password: string) => {
    try{
        const conx = await getConnection();
        const consulta = await conx.query(
        `INSERT INTO usuario(usuario, correo, password) VALUES (?, ?, ?)`,
        [usuario, correo, password]);
    }catch(error){
        console.log(error);
    }
}

export const login = async (correo: string , password: string) => {
    const conx = await getConnection();
    const consulta = await conx.query(
        `select count(id) as exist from usuario
            where correo='${correo}' and password='${password}';`
    );
    return parseInt(consulta.rows[0].exist) !== 0;
}

export const insertComentario = async (c: any) => {
    try{
        const conx = await getConnection();
        const consulta = await conx.query(
        `INSERT INTO comentario(descripcion, fecha, hora, id_usu, id_blo) VALUES (?, ?, ?, ?, ?)`,
        [c.descripcion,c.fecha,c.hora, c.idUsu, c.idBlo]);
    }catch(error){
        console.log(error);
    }
}

export const getComentarios = async (idBlog: number)=>{
    try {
        const conx = getConnection();
        const result = conx.query(
        "SELECT * FROM comentario WHERE id_blo = " + idBlog
        );
        return (await result).rows;
    } catch (error) {
        console.log(error);
    }
}