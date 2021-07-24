module.exports = {
  name: "ping",
  aliases:[],
  type: "info",
  cooldown: 3,
  execute(client,message,args) {
    message.quote(`Client Ws: ${client.ws.ping} MS`);
  }
};