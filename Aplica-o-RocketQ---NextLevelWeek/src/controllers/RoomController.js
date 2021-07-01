const Database = require("../db/config")

module.exports = {

    async create(req,res){
        const db = await Database()
        let pass = req.body.password;
        let roomId;
        let isRoom = true;
        while(isRoom){
            
        for(var i = 0 ; i<6;i++ ){
            i==0 ? roomId = Math.floor(Math.random()*10).toString() : roomId += Math.floor(Math.random()*10).toString()  
        }
        const roomsExistIds = await db.all(`SELECT id FROM rooms`) //.all para retornar alguma coisa 
        isRoom = roomsExistIds.some(roomsExistId => roomsExistId === roomId )
        if(!isRoom){
            await db.run(`INSERT INTO rooms(id,pass) VALUES (${parseInt(roomId)},${pass})`)
        }
        
      }
        res.redirect(`/room/${roomId}`)
        await db.close()
    },
   async open(req,res){
        const db = await Database(); 
        const roomId = req.params.room;
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId}`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
        res.render("room",{roomId:req.params.room , questions:questions,questionsRead:questionsRead}) // na hora de renderizar passa uma variavel junto com o numero da room  
   },
   enter(req,res){
       const roomId = req.body.roomId;
       res.redirect(`/room/${roomId}`)
   }

    


}