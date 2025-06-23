const express = require("express")
const app = express();
require('dotenv').config();
// Use process.env.DISCORD_TOKEN instead of hardcoded token

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("your code is running!");
})

const Discord = require("discord.js")

// Try this format first
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
  ]
});

  client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);

  const channelId = '1380085584394981428'; 
  // const interval = 9 * 60 * 1000; // 5 minutes in milliseconds
  const interval = 30 * 1000; // 30 sec in milliseconds
  var i = 0;

  setInterval(() => {
    const channel = client.channels.cache.get(channelId);
    if (channel) {
      i++;
      channel.send(`<@970283613818073098>`);
      channel.send(`<@998495427026493501>`);
    } else {
      console.log('Channel not found.');
    }
  }, interval);
});





client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
		await interaction.followUp('Pong again!');
	}
});

client.login(process.env.token)  
const mySecret = process.env['token']