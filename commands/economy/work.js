module.exports = {
  name: "work",
  aliases: ["trabalhar"],
  type: "economy",
  cooldown: 60,
  execute(client,message,args) {
    client.db.user.findOne({_id: message.author.id}, function(e,d) {
      if(!d) {
        message.quote("Como assim você não é registrado? Que história é essa? 🤔🤔");
      }
      let coinsRandom = Math.floor(Math.random() * 9999);
      let gemsRandom = Math.floor(Math.random() * 100);
      d.economy.coins +=coinsRandom;
      d.economy.gems +=gemsRandom;
      d.save();
      message.quote(`:tada: - Parabéns, você ganhou <:coins:864305311690915891>${coinsRandom} e <:gems:864307266026995713>${gemsRandom}!`);
    });
  }
};
