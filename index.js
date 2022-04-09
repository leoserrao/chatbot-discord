const Discord = require('discord.js');

const client = new Discord.Client();

const TOKEN = 'OTYyMzk4NjAxMTk0MTMxNTU4.YlG9iw.9fa6b9cXdS9SM3AbqpwgB3p7yB0';

client.on("ready", () => {
    console.log('Bot online!');
});

client.on("message", (msg) => {
    if (msg.content === 'Olá') {
        msg.reply('Olá');
    }
    if (msg.content === 'oi') {
        msg.channel.send('Olá ' + msg.author.username);
    }
});

client.login(TOKEN);