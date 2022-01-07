const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("Bot is ready!!")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("Insane Codez Op")});
}
module.exports = keepAlive
