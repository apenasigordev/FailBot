module.exports = {
  name: "kick",
  aliases: ["expulsar"],
  type: "mod",
  cooldown: 3,
  execute(client,message,args) {
    const member = message.mentions.members.first();
   let reason = args.slice(1).join(" ");
    if(!member) return client.example(client, message, "kick", "[expulsar]", "829348146462326866", "<@829348146462326866> Bot não utilizável.");
    if(!reason) reason="Argumento inválido";
  member.kick({reason: "Usuário expulso por - " + message.author.tag+ " - Motivo: " + reason}).then(() => {
    message.quote("<:fb_angry:858153269922889758> • Usuário expulso com sucesso!");
  });
  }
};
