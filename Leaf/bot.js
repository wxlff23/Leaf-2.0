const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
bot.login(process.env.BOT_TOKEN);

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setPresence({
        game: {
            name: `spamming for life`,
            type: "WATCHING"
        }
    })
});
bot.on("message", async message => {
    if(message.content.startsWith(`!spam`)){
        message.delete().catch()
        message.channel.send(`Running through in tall grass`)
        message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
	message.channel.send(`Running through in tall grass`)
        message.channel.send(`I am done`)
    }
});