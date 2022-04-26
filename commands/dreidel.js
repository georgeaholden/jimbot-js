const { SlashCommandBuilder } = require('@discordjs/builders');
const { randInt } = require('../utils/random');

const MESSAGES = [
    '------------------------------ SHIN ------------------------------',
    '----------------------------- GIMEL ------------------------------',
    '------------------------------- HE -------------------------------',
    '------------------------------ NUN -------------------------------'
];

// TODO: Upload and edit gifs
const GIFS = [
    'https://imgur.com/a/xqcNyhS',
    'gimel gif',
    'he gif',
    'nun gif'
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dreidel')
        .setDescription('Spin a dreidel'),

    /**
     * Generates an appropriate message and gif using spinDreidel before posting both in
     * the same channel as the interaction was triggered. Message post is delayed in an attempt
     * to with the reveal of outcome in the gif.
     * @param {Interaction} interaction 
     */
    async execute(interaction) {
        let spin = spinDreidel();
        await interaction.reply(spin.gif);
        await setTimeout(async () => {
            await interaction.channel.send(spin.message);
        }, 3000); 
    },
};

/**
 * Uses a random integer to select a result from MESSAGES and GIFS
 * @returns An object containing message and gif fields
 */
function spinDreidel() {
    let result = {};
    let i = randInt(1, 5);
    result.message = MESSAGES[i];
    result.gif = GIFS[i];
    return result;
}