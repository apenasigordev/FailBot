module.exports = {
	name: "sobre",
	aliases: ["about"],
	type: "profile",
	execute(client,message,args) {
		client.db.user.findOne({_id: message.author.id}, function(e,d) {
		d.config.about = args.slice(0).join(" ");
		message.quote("Seu about me foi alterado.");
	        d.save();
		});
	}
};