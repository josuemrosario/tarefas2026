// importações de bibliotecas e configurações básicas
const http = require("http");
const morgan = require("morgan");
const porta = 3000;
const express = require("express");
const app = express();

// configurações iniciais
app.use(morgan("dev"));
app.set("views", "./views"); //adicionado
app.set("view engine", "ejs"); //adicionado

// rotas da aplicação
app.get("/", (req, res) => {
  //res.send("rota raiz");
  res.render("index",{mensagem:"rota raiz", titulo:"pagina principal"})
});

app.get("/qualquercoisa", (req, res) => {
  //res.send("rota qualquer coisa");
  res.render("index",{mensagem:"Rota qualquer coisa", titulo:"qualquer coisa"})
});

app.get("/contato", (req, res) => {
  //res.send("rota contato");
  res.render("index",{mensagem:"rota contato", titulo:"contato"})
});

app.get("/sobre", (req, res) => {
  //res.send("rota sobre");
  res.render("index",{mensagem:"rota sobre", titulo:"sobre"})
});

app.use((req, res) => {
  //res.status(404).send("Página não encontrada!");
  res.status(404).render("erro404",{titulo:"erro 404"})
});

// Coloca o servidor no ar
app.listen(porta, () => {
  console.log("Servidor rodando");
  console.log("Endereco: http://localhost:" + porta);
});
