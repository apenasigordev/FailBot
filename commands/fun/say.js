module.exports = {
  name: "say",
  aliases: ["falar"],
  type: "fun",
  cooldown: 3,
  execute(client,message,args) {
    message.quote(args.slice(0).join(" ") + "\n\n\n<:fb_happy:858154616053956639> • Comando executado por: " + message.author.tag + `(${message.author.id})`, {mention: true});
  }
};
