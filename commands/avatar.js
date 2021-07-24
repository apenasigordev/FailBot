module.exports = {
  name: "avatar",
  aliases: ["av"],
  type: "profile",
  cooldown: 3,
  execute(client,message,args) {
    let member = message.mentions.members.first().user || message.author;
    let avatar = member.avatarURL({size: 4096, dynamic: true});
    message.quote(avatar);
  }
};