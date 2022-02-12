const express = require('express');
const router = express.Router();
const {home,procesarRegistro,user,reset} = require('../controllers/indexControllers');
const registerValidator = require('../validations/registerValidator');


router.get('/',home);
router.post('/',registerValidator,procesarRegistro);
router.get('/user',user);
router.get('/user/reset',reset);


module.exports = router;