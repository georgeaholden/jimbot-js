const {isThanks} = require('../utils/string-matching');

module.exports = {
    name: 'messageCreate',

    /**
     * Checks every single message using isThanks to see if someone has thanked the bot
     * if so sends a little response.
     * @param {Message} message 
     */
    async execute(message) {
        if (isThanks(message.content)) {
            await message.react('❤️');
            message.reply('You\'re welcome bud');
        }
    }
};