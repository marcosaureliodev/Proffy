const proffys = [
  {
    name: "Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "99982132433",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química", 
    cost: "20", 
    weekday: [0], 
    time_from:[720], 
    time_to:[1220]
  },
  {
    name: "Maik Brito", 
    avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
    whatsapp: "99982132334",
    bio: "Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.<br><br>Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: 'Aprenda a fazer dinheiro com isso!'",
    subject: "Química", 
    cost: "40", 
    weekday: [0], 
    time_from:[845], 
    time_to:[2344]
  }
]

// Funcção par chamar pagina inicial 
function pageLanding(req, res) {
  return res.render("index.html")
}

// Funcção par chamar pagina Study
function pageStudy(req, res) {
  return res.render("study.html", { proffys } )
}

// Funcção para chamar pagina Give-Classes
function pageGiveClasses(req, res) {
  return res.render("give-classes.html")
}


// Criando servidor
const express = require('express')
const server = express()

// Configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})


// Criando a rota para apresentação das paginas no browser
server
// Configurando arquivos estáticos (css, scripsts, imagens)
.use(express.static("public")) //Tudo que for .use sera configuração do servidor

//rotas da aplicação
// Apresentando inicial
.get("/", pageLanding)
// Apresentando página study
.get("/study", pageStudy)
// Apresentando página Give-classes
.get("/give-classes", pageGiveClasses)
.listen(5500)

/* Registro de uma função
function express(){
  return {
    name:"Marcos",
    age: 33
  }
} */

// chamando a função para fazer ela ser executada
// express().age

/*  para execurar o monitoramneto do servido usa-se o:

comando <node src/server.js ou <npm run dev> 

para restart o server usa-se o:
comando < rs >
*/