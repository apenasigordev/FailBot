const { createCanvas, loadImage } = require('canvas');
const canvas = createCanvas(1078, 243)
const ctx = canvas.getContext('2d');

module.exports = {
	name: "test",
	aliases: [],
	type: "bot",
	execute(client,message,args) {
	        let member = message.mentions.members.first().user || message.author;
	        client.db.user.findOne({_id: member.id}, function(e,d) {
	                
	        });
	}
};
