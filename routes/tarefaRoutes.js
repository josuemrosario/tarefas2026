const express = require('express');
const tarefaController = require('../controllers/tarefaController.js');
const router = express.Router();

// rotas da aplicação
router.get("/", tarefaController.mostrarPrincipal);

module.exports = router;
