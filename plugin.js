function luhnCheck(cardNumber) {
    let sum = 0;
    let alternate = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let n = parseInt(cardNumber[i], 10);
        if (alternate) {
            n *= 2;
            if (n > 9) n -= 9;
        }
        sum += n;
        alternate = !alternate;
    }

    return sum % 10 === 0;
}

function generateCreditCard(bin) {
    if (!/^\d{6,8}$/.test(bin)) {
        throw new Error("❌ Invalid BIN format! Must be 6-8 digits.");
    }

    let cardBase = bin + Math.floor(Math.random() * (10 ** (15 - bin.length))).toString().padStart(15 - bin.length, '0');

    for (let i = 0; i < 10; i++) {
        let checkDigit = (10 - (luhnCheck(cardBase + i) ? 0 : 1)) % 10;
        let finalCard = cardBase + checkDigit;

        if (luhnCheck(finalCard)) return finalCard;
    }

    throw new Error("❌ Failed to generate a valid card number.");
}

function generateCardList(bin, count = 10, expDate = "01|2028") {
    let cards = [];
    
    for (let i = 0; i < count; i++) {
        let cardNumber = generateCreditCard(bin);
        let cvv = Math.floor(100 + Math.random() * 900); // Random 3-digit CVV
        cards.push(`${cardNumber}|${expDate}|${cvv}`);
    }

    return cards;
}

// Register the command in the bot
cmd(
    {
        pattern: 'card',
        fromMe: false, // Set to true if only admins can use it
        desc: 'Generates test credit card numbers based on a BIN',
        type: 'utility'
    },
    async (message, match) => {
        if (!match[1]) {
            return await message.reply('❌ Please provide a BIN. Example: .card 557910');
        }

        let bin = match[1].trim();
        try {
            let cards = generateCardList(bin);
            let response = `💳 **Generated Cards for BIN: ${bin}**\n\n` + cards.join('\n');
            await message.reply(response);
        } catch (error) {
            await message.reply(`❌ Error: ${error.message}`);
        }
    }
);

module.exports = { generateCardList };
