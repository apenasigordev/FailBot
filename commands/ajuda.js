const {MessageEmbed} = require('discord.js');
module.exports = {
  name: "ajuda",
  aliases: ["help"],
  type: "info",
  cooldown: 3,
  execute(client,message,args) {
    client.db.user.findOne({_id: message.author.id}, (e,d) => {
this.info = "";
this.mod = "";
this.profile = ""
this.fun = "";
      const embed = new MessageEmbed()
      .setTitle("💁 • Ajuda");
      client.commands.map(cmd => {
        if(cmd.type === "info") {
        this.info += cmd.name + ", ";
        }
        if(cmd.type === "mod") {
          this.mod += cmd.name + ", ";
        }
        if(cmd.type === "fun") {
          this.fun += cmd.name + ", ";
        }
        if(cmd.type === "profile") {
        
          this.profile += cmd.name + ", ";
        }
      });
      embed.addField("ℹ️ • Info", this.info);
      embed.addField("👮 • Mod", this.mod);
      embed.addField("😂 • Fun", this.fun);
      embed.addField("👤 • Perfil", this.profile)
      .setFooter("Alguns comandos ainda não estão disponíveis publicamente.");
      message.quote({embed});
      
    });
  }
};