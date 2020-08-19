const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = 'Kiibot, '
const fs = require('fs')

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`)
    
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log("Hello there, Kiibot is working");
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const command = args.shift().toLowerCase();
    const args = message.content.slice(prefix.length).split(/ +/);

    if(command === 'ping'){client.commands.get('ping').execute(message, args)}

});



client.login('MzY1MzkxNjUzNjg4NTczOTU0.WdXXfg.WMKH0NmaXjYo-XT0L6U4YI1LJ7Y')