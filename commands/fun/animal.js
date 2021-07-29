module.exports = {
  name: "animal",
  aliases: ["animals"],
  type: "fun",
  cooldown: 3,
  execute(client,message,args) {
    let api = [
      "https://no-api-key.com/api/v1/animals/dog",
      "https://no-api-key.com/api/v1/animals/cat",
      "https://no-api-key.com/api/v1/animals/panda",
      "https://no-api-key.com/api/v1/animals/bear"
      ];
      let animal = api[Math.floor(Math.random() * api.length)];
      client.fetch(animal).then(res => res.json())
      .then(async(data)=> {
        var res = await client.translate(data.fact, {to: "pt"});
        message.quote(res.text, {files: [{attachment: data.image, name: "animal.png"}]});
      });
  }
};
