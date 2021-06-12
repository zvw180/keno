const TelegramBot = require('node-telegram-bot-api');

const token = '';

const bot = new TelegramBot(token, {polling: true});

const CronJob = require('cron').CronJob;

const dateFormat = require('dateformat');

const now = new Date();

bot.onText(/\/start/, (msg) => {
    let data = 'Hello';
    let opts = {
        parse_mode: "HTML",
        reply_markup: {
            keyboard: [["/start"], ["/bat", "/tat"]]
        }
    }
    bot.sendMessage(msg.chat.id, data, opts);

});

const job = new CronJob('* * * * * *', function () {
    console.log('bat11111111111111111');
}, null, true, 'America/Los_Angeles');

// bot.onText(/\/bat/, (msg) => {
//     const date = dateFormat(now, "isoDateTime");
//     console.log('bat');
//     job.start();
//
//     bot.sendMessage(msg.chat.id, date + 'bat');
// });
// bot.onText(/\/tat/, (msg) => {
//     const date = dateFormat(now, "isoDateTime");
//     job.stop();
//     console.log('tat');
//     bot.sendMessage(msg.chat.id, date + 'tat');
// });



