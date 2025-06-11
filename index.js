require('dotenv').config();
// Use process.env.DISCORD_TOKEN instead of hardcoded token
const express = require("express")
const app = express();

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
client.on("messageCreate", message => {
  console.log("=== MESSAGE DETECTED ===");
  console.log("Author:", message.author.username);
  console.log("Content:", message.content);
  console.log("Is bot:", message.author.bot);
  console.log("========================");
  
  if (message.author.bot) return;
  
  if (message.content.toLowerCase() === "-- wes --") {
    message.channel.send("receive signal from wes!");
  }
})


  client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);

  const channelId = '1380085584394981428'; // change this
  // const interval = 10 * 60 * 1000; // 10 minutes in milliseconds
  // const interval = 5 * 60 * 1000; // 5 minutes in milliseconds
  const interval = 15* 1000; // 5 sec in milliseconds
  var i = 0;

  setInterval(() => {
    const channel = client.channels.cache.get(channelId);
    if (channel) {
      i++;
      channel.send(`-- monika --`);
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