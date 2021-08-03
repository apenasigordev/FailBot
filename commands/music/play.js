module.exports = {
        name: "play",
        aliases: ["p"],
        type: "music",
        cooldown: 1,
        execute(client,message,args) {
                client.distube.play(message, args.join(" "));
        }
}