const express = require('express');
const router = express.Router();
const estabelecimentoController = require('../controllers/estabelecimento.controller');
const estabelecimentoValidator = require('../validators/estabelecimento.validator');
const veriftJWT = require('../middlewares/authorizator')

router.post('/', veriftJWT, estabelecimentoController.create);

router.get('/', veriftJWT, estabelecimentoController.findAll);

router.get('/user/', veriftJWT, estabelecimentoController.findByUserId);

router.get('/geral/:id', veriftJWT, estabelecimentoValidator.findById(), estabelecimentoController.findById);

router.put('/:id', veriftJWT, estabelecimentoValidator.update(), estabelecimentoController.update);

router.delete('/:id', veriftJWT, estabelecimentoValidator.deletar(), estabelecimentoController.deletar);

module.exports = router;