const { SlashCommandBuilder } = require('@discordjs/builders');
const mcStatus = require('minecraft-server-util');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mc')
        .setDescription('Checks the status of the mc server'),
    async execute(interaction) {
        let serverStatus = await mcStatus.queryFull('mc.slimjims.life');
        let response = formattedResponse(serverStatus);
        const message = await interaction.reply({content: response, fetchReply: true});
        if (serverStatus.players.online == 0) {
            message.react('<:Smodge:893005673888096286>');
        } else {
            message.react('<:HyperS:698500153342033930>');
        }
    },
};

const formattedResponse = function(serverStatus) {
    let result = 'The mc Server lives!\n';
    let numPlayers = serverStatus.players.online;
    if (numPlayers > 1) {
        result += `There are ${numPlayers} players currently online:\n`;
        for (let player of serverStatus.players.list) {
            result += player + '\n';
        }
    } else if (numPlayers == 1) {
        result += 'There is 1 player currently online:\n';
        result += serverStatus.players.list[0] + '\n';
    } else {
        result += 'Nobody is currently online :\'(';
    }
    return result;
};