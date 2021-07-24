const Discord = require('discord.js')
module.exports = {
        name: "amogus",
        aliases: [],
        type: "bot",
        cooldown: 5,
        async execute(client,message,args) {
        let member = message.mentions.members.first() || message.member;
        if(!member) return message.quote("❌ • Usuário não encontrado!");
        const avatar = await client.jimp.read(member.user.avatarURL({size: 4096,format: "png"}));
        const amogus = await client.jimp.read("./amogus.png")
        const amog = await client.jimp.read("./1.png");
        const mask = await client.jimp.read("./amogusmask.png");
        const us = await client.jimp.read("./2.png");
        amog.resize(93,50);
        mask.resize(70,70)
        us.resize(93,50);
        avatar.resize(70,70);
        
       avatar.mask(mask);
        amog.opacity(0.5)
        us.opacity(1);
        amogus.composite(amog, 510,238);
        amogus.composite(avatar, 510, 238)
        amogus.composite(us, 508, 244)
        amogus.getBuffer(client.jimp.MIME_PNG, (err, buffer) => {
                const attachment = new Discord.MessageAttachment(buffer, 'amogus.png')
                message.channel.send(attachment)
        });
        }
};