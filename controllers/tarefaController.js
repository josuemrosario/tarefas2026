const TarefaModel = require('../Models/tarefaModel')

const mostrarPrincipal = (req, res) => {
    //res.send("rota raiz");
    res.render("index",{mensagem:"rota raiz", titulo:"pagina principal"})
  }

module.exports =  {
    mostrarPrincipal
};



