/**
 * This hard coding is gross but fast to develop :D
 * I think this problem is always O(n^2)?
 * @param {string} message 
 * @returns {bool}
 */
exports.isThanks = function(message) {
    message = message.toLowerCase();
    let foundThank = false;
    for (let thank of ['ty', 'thank', 'arigatou', 'gracias', 'cheers', 'chur', 'merci', 'onya', 'grazie', 'ta', 
        'shot', 'danke', 'appreciate', 'thx', 'tanks', 'gamsahabnida', 'Takk', 'Mahalo', 'Toda']){
        if (message.includes(thank)) {
            foundThank = true;
            break;
        }
    }

    if (!foundThank) {
        return false;
    }
    for (let botName of ['bot', 'jim']) {
        if (message.includes(botName)) {
            return true;
        }
    }
    return false;
};