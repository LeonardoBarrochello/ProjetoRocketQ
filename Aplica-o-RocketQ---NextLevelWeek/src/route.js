const Questioncontroller = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')
const express = require('express')
const { resolveInclude } = require('ejs')
const route = express.Router()  //gerenciador de rotas do express

route.get('/',(req,res)=>res.render("index",{page:"enter-room"}))  //seta as rotas quando for home
route.get('/room/:room',RoomController.open)  //seta as rotas
route.get('/create-pass',(req,res)=>res.render("index",{page:"create-pass"}))  //seta as rotas e cria uma variavel page que esta sendo renderizado atraves do include


route.post("/enter-room",RoomController.enter)
route.post("/question/create/:room",Questioncontroller.create)
route.post("/question/:room/:question/:action",Questioncontroller.index)
route.post("/create-room",RoomController.create)
module.exports = route  


//ola


