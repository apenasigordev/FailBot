const {MessageEmbed} = require('discord.js');

module.exports = (client, message, command, aliases, example1, example2) => {
  let prefix = client.prefix;
  const embed = new MessageEmbed()
  .setTitle("ℹ️ • Exemplo")
  .setDescription("Parece que você não conseguiu usar este comando, vamos aprender!")
  .addField("💁 • Exemplo 1", `${prefix}${command} ${example1}`)
  .addField("💁‍♂️ • Exemplo 2", `${prefix}${command} ${example2}`)
  .addField("👀 • Aliases", aliases)
  .setColor("RED");
  message.reply(embed);
};