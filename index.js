const fs = require('fs');
const { Client, Collection, Intents} = require('discord.js');
require('dotenv').config();
const sheets = require('E:/_George/Jimbot js/utils/sheets.js')
const token = process.env.BOT_TOKEN

const botIntents = new Intents();
botIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES)
const client = new Client({intents: botIntents}); // Like bot class
client.commands = new Collection(); // Attribute containing all command functions so I can access anywhere
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); // All the .js files in the commands folder
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

// Sets the command collection to command name, exported module pairs
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

sheets.init((auth) => { 
    client.sheetsAuth = auth
    console.log('Connected to Google Sheets')} );
client.login(token);
