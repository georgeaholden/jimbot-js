// This hard coding is gross but fast : D
// I think this problem is always O(n^2)
exports.isThanks = function(message) {
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