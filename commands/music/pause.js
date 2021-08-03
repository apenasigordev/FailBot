module.exports = {
        name: "pause",
        aliases: ["pause"],
        type: "music",
        cooldown: 1,
        execute(client,message,args) {
                client.distube.pause(message);
        }
}