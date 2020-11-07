// importando lib
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

// iniciando o express
const server = express();
server

  // utilizar body do req
  .use(express.urlencoded({ extended: true }))

  // utilizando arquivos estáticos
  .use(express.static("public"))

  // configurar template engine

  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // rotas da aplicação
  .get("/", pages.index)
  .get("/day-care-center", pages.dayCareCenter)
  .get("/day-care-centers", pages.dayCareCenters)
  .get("/create-day-care-center", pages.createDayCareCenter)
  .post("/save-day-care-center", pages.saveDayCareCenter);

// ligar o servidor
server.listen(5500);
