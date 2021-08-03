module.exports = {
        name: "registerDB",
        aliases: [],
        type:"bot",
        execute(client,message,args) {
                if(message.author.id === "714309387233263624") {
                client.db.user.findOne({_id: args[0]}, function(e,d) {

                        if(!d) {
                        new client.db.user({
  _id:args[0],
  config: {banner: "https://tenor.com/view/nervous-sweating-wet-gif-7398449", about: "Uau sou uma borboleta!", verified: false},
  banned: false,
  economy: {
    gems: 0,
    coins: 0
  }
  }).save();
  message.reply("Usuário registrado.");
                        } else {
                                message.reply("Usuário já é registrado, não faz sentido você registrar-lo novamente.")
                        }
   
                });
                }
        }
}