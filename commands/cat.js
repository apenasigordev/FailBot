module.exports = {
  name: "cat",
  aliases: ["gato", "cats", "gatos"],
  type:"fun",
  cooldown: 3,
 async execute(client,message,args) {
    let cat = await client.image.cats();
    console.log(cat.url);
    message.quote(cat.url)
  }
}