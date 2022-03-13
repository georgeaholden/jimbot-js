const {isThanks} = require('../utils/string-matching');

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        if (isThanks(message.content)) {
            console.log('in');
            await message.react('❤️')
            message.reply("You're welcome bud")
        }
    }
}