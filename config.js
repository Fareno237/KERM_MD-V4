const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PQYUVQ6Z#0fEA4RcsQxESoIZCbyjk2od3eyYOi7y0ya2akk6wx5I",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://pomf2.lain.la/f/cdn0360.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "𝖧𝖨𝖨 𝖣𝖤𝖠𝖱 𝖨𝖬 𝖮𝖭𝖫𝖨𝖭𝖤 𝖨，𝖬 『𝗞𝗘𝗥𝗠 𝗠𝗗 𝗩4』 𝖶𝖧𝖠𝖳𝖲𝖠𝖯𝖯 𝖡𝖮𝖳.",
ANTI_LINK: process.env.ANTI_LINK || "false",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "➺『𝗞𝗘𝗥𝗠 𝗠𝗗 𝗩4』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
