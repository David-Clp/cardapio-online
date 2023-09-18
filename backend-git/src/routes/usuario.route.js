const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');
const estabelecimentoController = require('../controllers/estabelecimento.controller');
const veriftJWT = require('../middlewares/authorizator')
const usuarioValidator = require('../validators/usuario.validator');

router.post('/', usuarioValidator.create(),  usuarioController.create, estabelecimentoController.create);

router.post('/login', usuarioValidator.login(),  usuarioController.login);

router.get('/', veriftJWT, usuarioController.findAll);

router.get('/:id', veriftJWT, usuarioValidator.findById(), usuarioController.findById);

router.put('/:id', veriftJWT, usuarioValidator.update(), usuarioController.update);

router.delete('/:id', veriftJWT, usuarioValidator.deletar(), usuarioController.deletar);

module.exports = router;