module.exports = app => {
    var express = require('express');
    var router = express.Router();

    var usuarioModel = require('../models/usuario');
    /* GET home page. */
    router.get('/',function(req,res){
        res.json({ message: "Bienvenidos, aplicación iniciadaaaaaaaaaaa" });
    })

    router.get('/a',function(req,res,next){
        usuarioModel.getUsuarios(function(err,result){
            console.log('/usuarios');
            if(err)//{
                res.json(
                    {
                        "response": "Error",
                        "msg": err
                    }
                );
                console.log('res ',result);
                res.json(
                    {
                        "response": result,
                        "msg": "200"
                    }
                );
            //}
        });
    });
    app.use('/usuarios',router);
};