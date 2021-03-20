var db = require('./db_conexion.js');
var Usuario = function(){
}
Usuario.getUsuarios = function(result,error){
	db.query("select * from USUARIO",
	 function(err,res){
        if(err){
            console.log("error",err);
            result(err,null);
        }else{
            result(null,res);
        }
    });
};



module.exports = Usuario;