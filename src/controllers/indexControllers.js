const { validationResult } = require("express-validator");

module.exports = {
    home : (req,res) => {
        return res.render('index')
    },
    procesarRegistro : (req,res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let {nombre,colorFondo,email,edad} = req.body;
            let on = req.body.recordar;
            if (on) {
              res.cookie("color", req.body.colorFondo,{maxAge:120000});
              res.cookie("nombre", req.body.nombre,{maxAge:120000});
            }
            req.session.user = {
                colorFondo,
                nombre
              };
            res.render('index',{nombre,colorFondo,email,edad})
        } else {
            res.render('index',{errors:errors.mapped(),old:req.body})
        }

    },
    user:(req,res)=>{
        res.render('user',{
            colorFondo: req.session.user.colorFondo,
            nombre: req.session.user.nombre,
        })        
    },
    reset:(req,res)=>{
        req.session.destroy();
        res.clearCookie('nombre');
        res.clearCookie('colorFondo');
        res.redirect("/");
    }
}