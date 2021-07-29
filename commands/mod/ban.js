module.exports = {
  name: "ban",
  aliases: ["banir"],
  type: "mod",
  cooldown: 1,
  execute(client,message,args) {
    const member = message.mentions.members.first();
   let reason = args.slice(1).join(" ");
    if(!member) return client.example(client, message, "ban", "[banir]", "829348146462326866", "<@829348146462326866> Não seguir as regras.");
    if(!reason) reason="Argumento inválido";
  member.ban({reason: "Usuário banido por - " + message.author.tag+ " - Motivo: " + reason}).then(() => {
    message.quote("<:fb_angry:858153269922889758> • Usuário banido com sucesso!");
  });
  }
};
