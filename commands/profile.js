const Discord = require('discord.js');
module.exports = {
  name: "profile",
  aliases: ["perfil"],
  type: "profile",
  cooldown: 5,
  execute(client,message,args) 
  {
    let member = message.mentions.members.first() || message.member;
    let av = member.user.avatarURL({size: 4096, format: "png"});
 
    if(!member) return message.quote("❌ • Não consegui encontrar este usuário.", {quote: true});
    client.db.user.findOne({_id: member.id}, async function(e,d) {
    
      if(!d) return message.quote("ℹ️ • Usuário não registrado");
      let verifie = d.config.verified;
    const background = await client.jimp.read("./profile.png")
    const mask = await client.jimp.read("./mask.png")
    const verified = await client.jimp.read("./verified.png")
    const avatar = await client.jimp.read(av);
   const lilita = await(client.jimp.loadFont("./font.fnt"));
    avatar.resize(100,100);
    mask.resize(100,100);
    verified.resize(30,29);
    avatar.mask(mask);
    background.composite(avatar, 47, 25);
    const modbadge = await(client.jimp.read("https://media.discordapp.net/attachments/853003246842675211/861411744412467240/New_Element_B727ADC.png"));
    modbadge.resize(41,41);
    if(verifie === true) {
    background.composite(verified, 170,60);
    }
//onst badges = [""];


    background.print(lilita, 216, 53, member.user.username);
    background.print(lilita, 750, 75, d.economy.coins);
 
        background.print(lilita, 910, 75, d.economy.gems);
       background.print(lilita, 82, 172, d.config.about);
       
    var image = new Discord.MessageAttachment(await background.getBufferAsync(client.jimp.MIME_PNG));
message.reply(image)
  });
  }
};