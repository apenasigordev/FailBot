module.exports = {
  name: "verify",
  aliases: ["verificar"],
  type: "bot",
  cooldown: 3,
  execute(client,message,args) {
    let user = message.mentions.members.first();
    if(message.author.id === "714309387233263624") {
    client.db.user.findOne({_id:user.id}, function(e,d) {
      if(e) return console.error(e);
      if(!d) return message.quote("Certeza que o usuário está registrado?", {mention: true});
      if(!d.config.verified) {
      d.config.verified=true;
      d.save();
      message.reply("Usuário verificado com sucesso!");
      } else {
        d.config.verified=false;
        d.save();
        message.reply("Verificado removido com sucesso!");
      }
    });
    } else return message.quote("Você não tem permissão para usar este comando.");
  }
}
