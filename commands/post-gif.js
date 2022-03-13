const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Guild, Message } = require('discord.js');
const sheets = require('E:/_George/Jimbot js/utils/sheets.js')

/* TODO: This function works, and isn't impossible to read but 
* the problem is that it combines both the async/await approach and
* a callback function in the same place. (sheets.getGif takes a callback)
* Could also implement the cooldown thing
*/
module.exports = {
    data: new SlashCommandBuilder()
        .setName(process.env.GIF_NAME)
        .setDescription(process.env.GIF_DESCRIPTION),
    async execute(interaction) {
        sheets.getGif(interaction.client.sheetsAuth, async (result) => {
            await interaction.reply(result.phrase[0])
            const message = await interaction.channel.send(result.gif[0])
            message.react('<:BlakePog:831103522229190656>')
        })
    }

}