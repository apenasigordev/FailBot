const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const fs = require('fs');
const db = require('quick.db');
const Canvas = require('canvas');

module.exports = {
  name: "eval",
  aliases: ["e"],
  type: "bot",
  
  execute(client,message,args) {
    if(message.author.id === "407859300527243275" || message.author.id === "714309387233263624") {
        function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"js"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
    }
      }
  }
};