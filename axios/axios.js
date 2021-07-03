const https = require ("https");
const get = require ("./axioscek");
const yargs = require ("yargs");


start();

function start () {
    yargs.command ({
        command:'getir',
        describe:'bilgileri getirilecek ülkenin adı',
        builder: {
    ulke: {
        describe:'eklenecek ülke adı',
        demandOption:true,
        type:"string"
    },
        },
    handler(argv) {
        get(argv.ulke);
    }
    });
    
    yargs.parse();
    
}

module.exports = start;








