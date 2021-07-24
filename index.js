const Discord = require('discord.js');
const myIntents = new Discord.Intents(Discord.Intents.ALL);
//myIntents.add('GUILD_PRESENCES', 'GUILD_MEMBERS');
const client = new Discord.Client({ws: {intents: myIntents}});
const fs = require('fs');
let prefix = "#";
const nonimageapi = require('nonimageapi');
client.db = require('./db.js');
client.prefix = "#";
client.image = new nonimageapi();
client.config = require('./config.json');
const Canvas = require('canvas');
client.canvas = Canvas;
client.jimp = require('jimp');
client.fetch = require('node-fetch');
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.cooldowns = new Discord.Collection();
//const fs = require("fs");

const express = require('express');
const { APIMessage, Message } = require('discord.js');
const app = express();
client.example = require('./modules/exampleModule.js');
client.translate = require('@vitalets/google-translate-api');
/**
* @param {StringResolvable|APIMessage} [content='']
* @param {MessageOptions|MessageAdditions} [options={}]
* @param {string} [options?.messageID] - o ID da mensagem que será citada
* @param {boolean} [options?.mention] - caso deva mencionar o autor da mensagem
*/

Message.prototype.quote = async function (content, options) {
  const message_reference = {
    message_id: (
      !!content && !options
        ? typeof content === 'object' && content.messageID
        : options && options.messageID
    ) || this.id,
    message_channel: this.channel.id
  }

  const allowed_mentions = {
    parse: ['users', 'roles', 'everyone'],
    replied_user: typeof content === 'object' ? content && +content.mention : options && +options.mention
  }

  const { data: parsed, files } = await APIMessage
    .create(this, content, options)
    .resolveData()
    .resolveFiles()

  this.client.api.channels[this.channel.id].messages.post({
    data: { ...parsed, message_reference, allowed_mentions },
    files
  })
}

app.get("/", (req,res) => {
  res.sendStatus(200);
});

app.listen(process.env.PORT)
fs.readdir("./commands/", (err, files) => {
    if (err) return console.log("Could not find any commands!")
    const jsFiles = files.filter(f => f.split(".").pop() === "js")
    if (jsFiles.length <= 0) return console.log("Could not find any commands!")
    jsFiles.forEach(file => {
        const cmd = require(`./commands/${file}`)
        console.log(`Loaded ${file}`)
        client.commands.set(cmd.name, cmd)
        if (cmd.aliases) cmd.aliases.forEach(alias => client.aliases.set(alias, cmd.name))
    })
})
client.on("message", msg => {
  client.db.user.findOne({_id: msg.author.id}, function(e,d) {
  let message = msg;
if(msg.author.bot && !msg.guild) return;
if(msg.content === "<@"+client.user.id+">") {
 msg.reply("Prefix: #");
}

    if (msg.content.startsWith(prefix)) {
        const args = msg.content.slice(prefix.length).split(" ");
        const cmds = args.shift().toLowerCase()
    const cmd = client.commands.get(cmds) || client.commands.get(client.aliases.get(cmds))
        if(!cmd) return;
    if(!d) {
new client.db.user({
  _id: message.author.id,
  config: {banner: "https://tenor.com/view/nervous-sweating-wet-gif-7398449", about: "Uau sou uma borboleta!", verified: false},
  banned: false,
  economy: {
    gems: 0,
    coins: 0
  }
  }).save();
  message.quote("Execute de novo o comando.")
}
let command = cmd;
let cooldowns = client.cooldowns;
if (!cooldowns.has(command.name)) {
	cooldowns.set(command.name, new Discord.Collection());
}

const now = Date.now();
const timestamps = cooldowns.get(command.name);
const cooldownAmount = (command.cooldown || 3) * 1000;

if (timestamps.has(message.author.id)) {
	const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

	if (now < expirationTime) {
		const timeLeft = (expirationTime - now) / 1000;
		return message.reply(`Aguarde ${timeLeft.toFixed(1)} segundo(s) antes de reutilizar o comando \`${command.name}\`.`);
	}
}
console.log(cooldownAmount);
timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    
    try {
        cmd.execute(client, message, args)
    } catch (e) {
        console.error(e)
        message.channel.stopTyping();
        message.reply(`Error: ${e.stack}`)
    }
    }
    })
  })
client.login(process.env.token);