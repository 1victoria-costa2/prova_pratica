const { Router, response } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 3333
//Importar o módulo conn para as operações com o banco

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Middleware para arquivos estáticos

app.get('/', (request, response)=>{
  return response.render('home')
})

app.get('/cadastro-produto', (request, response) =>{
  response.sendFile(__dirname + '/cadastro-produto-html');
});
app.post('cadastro-produto', (request, response) =>{
  const nomeProduto = request.body.nome;

  response.send('produto cadastrado: Nome - ${nomeProduto}')
});
const produtos = [
      {id: 1,nome: 'Produto 1'},
      {id: 2,nome: 'Produto 2'},
      {id: 3,nome: 'Produto 3'},
];
app.get('/lista-produtos', (request, response) =>{
  response.render('lista-produtos', {produtos});
});

app.listen(PORT, ()=>{
  console.log(`Servidor rodando na porta ${PORT}`)
})













//Deletar
//app.delete('/', function (req, res) {
 // res.send('DELETE request to homepage')
//})


