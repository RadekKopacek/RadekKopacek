const franc = require('franc');
const langs = require("langs");
const input = process.argv[2];
const langCode = franc(input);
if (langCode == 'und') {
    console.log("SORRY, COULDN'T FITURE IT OUT! TRY WITH MORE TEXT!".red);
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is: ${language.name}`.green);
}

