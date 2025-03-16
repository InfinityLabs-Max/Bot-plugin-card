const { generateCardList } = require('../plugins/cardGenerator'); // Ensure the correct path

module.exports = async (bot) => {
    // Ensure cmd() is defined before registering the command
    if (typeof cmd === 'undefined') {
        console.error('❌ cmd is not defined! Make sure your bot supports dynamic command loading.');
        return;
    }

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
};
