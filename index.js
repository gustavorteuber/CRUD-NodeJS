const express = require("express");

const server = express();

server.use(express.json());

const cursos = ["NodeJS", "ReactJS", "React Native"];
// retornar curso unico
server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index]);
});
//retornar todos
server.get("/cursos", (req, res) => {
  return res.json(cursos);
});
//post curso novo
server.post("/cursos", (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});
//put alterar curso
server.put("/cursos/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});
//delete curso
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;
  cursos.splice(index, 1);
  return res.json;
});
server.listen(3000);
