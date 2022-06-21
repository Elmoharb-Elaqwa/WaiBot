const { Telegraf } = require('telegraf');
const token = '5513121006:AAEKbmXvrAyA98xv3-aFUA9ruXHyezx79aQ';

const bot = new Telegraf(token);
const web_link = 'https://nimble-rabanadas-771085.netlify.app';

bot.start((ctx) =>
  ctx.reply('Welcome', {
    reply_markup: {
      keyboard: [[{ text: 'wai app', web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
