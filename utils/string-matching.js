function isThanks(message) {
    let foundThank = false;
    for (thank of ['ty', 'thank', 'arigatou', 'gracias', 'cheers', 'chur', 'merci', 'onya', 'grazie', 'ta', 
    'shot', 'danke', 'appreciate', 'thx', 'tanks', 'gamsahabnida', 'Takk', 'Mahalo', 'Toda']){
        if (message.includes(thank)) {
            foundThank = true;
            break;
        }
    }

    if (!foundThank) {
        return false
    }
    for (botName of ['bot', 'jim']) {
        if (message.includes(botName)) {
            return true
        }
    }
    return false
}

module.exports = {
    isThanks: isThanks
}