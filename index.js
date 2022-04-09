const Discord = require('discord.js');

const client = new Discord.Client();

const TOKEN = 'token aqui';

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
