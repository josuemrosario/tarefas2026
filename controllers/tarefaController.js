const TarefaModel = require('../Models/tarefaModel')

const mostrarPrincipal = (req, res) => {
    //res.send("rota raiz");
    dados = TarefaModel.readAllTArefas()
    res.render("index",{titulo:"pagina principal",dados:dados})
  }

module.exports =  {
    mostrarPrincipal
};



