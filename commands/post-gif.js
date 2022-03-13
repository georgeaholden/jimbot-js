const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Guild } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName(process.env.GIF_NAME)
        .setDescription(process.env.GIF_DESCRIPTION),
    async execute(interaction) {
        await interaction.reply("beuge time")
        const message = await interaction.channel.send("https://imgur.com/RRI6LaF")
        message.react('<:BlakePog:831103522229190656>')
    }
}

function pickGif() {

}