module.exports = {
  name: "convite",
  aliases: ["invite"],
  mod: "info",
  cooldown: 3,
 execute(client,message,args) {
   let invite = `https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`;
   message.quote(invite, {quote: true});
 }
};
