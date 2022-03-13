const { SlashCommandBuilder } = require('@discordjs/builders');
const mcStatus = require('minecraft-server-util');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mc')
        .setDescription('Checks the status of the mc server'),
    async execute(interaction) {
        serverStatus = await mcStatus.queryFull('mc.slimjims.life');
        response = formattedResponse(serverStatus);
        await interaction.reply(response);
    },
}

const formattedResponse = function(serverStatus) {
    result = 'The mc Server lives!\n';
    numPlayers = serverStatus.players.online;
    if (numPlayers > 0) {
        result += `There are ${numPlayers} players currently online:\n`;
        for (player of serverStatus.players.list) {
            result += player + '\n'
        }
    } else {
        result += "Nobody is currently online :'(";
    }
    return result;
}