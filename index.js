const Discord = require('discord.js')
const client = new Discord.Client()
const keepAlive = require('./server.js')

keepAlive();
client.login("your bot token")
