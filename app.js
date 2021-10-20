const Telegraf = require('telegraf');

const bot = new Telegraf('insert_bot_token_here');

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Hello there! Welcome to my new telegram bot.',{

    })
})

bot.hears('animals',ctx=> {
    console.log(ctx.from)
    let animalMessage = `great, here are pictures ot animals you would love`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id,
        animalMessage,{
            reply_markup: {
                inline_keyboard: 
                [{
                        text: "dog",
                        callback_data: 'dog'
                    },
                    {
                        text: "cat",
                        callback_data: 'cat'
                    }
                ],
            }
        })
})

bot.action('dog',ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,{
        source: "res/dog.jpg"
    })
})

bot.action('cat',ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,{
        source: "res/cat.jpg"
    })
})

bot.hears('phone', (ctx, next)=>{
    console.log(ctx.form)
    bot.telegram.sendMessage(ctx.chat.id, 'Can we get access to your phone number?', requestPhoneKeyboard);
})

bot.hears('location', (ctx, next)=>{
    console.log(ctx.form)
    bot.telegram.sendMessage(ctx.chat.id, 'Can we get access to your location?', requestLocationKeyboard);
})

const requestPhoneKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard":[
            [{
                text: "My phone number",
                request_contact: true,
                one_time_keyboard: true
            }],
            ["Cancel"]
        ]
    }
};

const requestLocationKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard":[
            [{
                text: "My location",
                request_contact: true,
                one_time_keyboard: true
            }],
            ["Cancel"]
        ]
    }
};

bot.launch(); 