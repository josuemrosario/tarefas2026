// importações de bibliotecas e configurações básicas
const http = require("http");
const morgan = require("morgan");
const porta = 3000;
const express = require("express");
const app = express();

const tarefaRoutes = require('./routes/tarefaRoutes'); 

// configurações iniciais
app.use(morgan("dev"));
app.set("views", "./views"); //adicionado
app.set("view engine", "ejs"); //adicionado
app.use(express.static('./public'));

app.use("/",tarefaRoutes)

app.use((req, res) => {
  //res.status(404).send("Página não encontrada!");
  res.status(404).render("erro404",{titulo:"erro 404"})
});

// Coloca o servidor no ar
app.listen(porta, () => {
  console.log("Servidor rodando");
  console.log("Endereco: http://localhost:" + porta);
});
