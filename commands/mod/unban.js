module.exports = {
  name: "unban",
  aliases: ["desbanir"],
  type: "mod",
  cooldown: 3,
  execute(client,message,args) {
    const member = message.mentions.members.first();
   let reason = args.slice(1).join(" ");
    if(!member) return client.example(client, message, "unban", "[desbanir]", "829348146462326866", "<@829348146462326866> Aprendeu a seguir as regras");
    if(!reason) reason="Argumento inválido";
  member.unban({reason: "Usuário desbanido por - " + message.author.tag+ " - Motivo: " + reason}).then(() => {
    message.quote(":<:fb_happy:858154616053956639> • Usuário desbanido com sucesso!");
  });
  }
};
