const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: 'xoxb-710293854900-712916556630-6K6Tl62u3oNDUecT1zbVzm7w',
    name: 'corgi'
});

bot.on('message', (data) => {
    if(data.type === 'message' && data.files != null)
    {
        bot.postMessage(data.channel, data.files[0].url_private);
    }
});