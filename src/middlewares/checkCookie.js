function checkCookie(req,res,next) {
     res.locals.isLogged = false
    
     let colorFromCookie = req.cookies.color;
     let nombreFromCookie = req.cookies.nombre;
    
    if (colorFromCookie) {
         req.session.user = {
             colorFondo : colorFromCookie,
             nombre : nombreFromCookie
         }
    }
 
    if (req.session.user) {
          res.locals.isLogged= true;
          res.locals.user = req.session.user
    }
    next()
}

module.exports= checkCookie;