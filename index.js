// importações de bibliotecas e configurações básicas
const http = require("http");
const morgan = require("morgan");
const porta = 3000;
const express = require("express");
const app = express();

// configurações iniciais
app.use(morgan("dev"));

// rotas da aplicação
app.get("/", (req, res) => {
  res.send("rota raiz");
});

app.get("/qualquercoisa", (req, res) => {
  res.send("rota qualquer coisa");
});

app.get("/contato", (req, res) => {
  res.send("rota contato");
});

app.get("/sobre", (req, res) => {
  res.send("rota sobre");
});

app.use((req, res) => {
  res.status(404).send("Página não encontrada!");
});

// Coloca o servidor no ar
app.listen(porta, () => {
  console.log("Servidor rodando");
  console.log("Endereco: http://localhost:" + porta);
});
