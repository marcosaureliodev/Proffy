// Criando servidor
const express = require('express')
const server = express()

// Criando a rota para apresentação das paginas no browser
server.use(express.static("public")) //Tudo que tiver .use sera conf do servidor

.get("/", (req, res) => {
  return res.sendFile(__dirname + "/views/index.html") //apresentando página
})
.get("/study", (req, res) => {
  return res.send("Study")
})
.listen(5500)



















// Registro de uma função
// function express(){
//   return {
//     name:"Marcos",
//     age: 33
//   }
// }

// chamndo a função para fazer ela ser executada
// express().age