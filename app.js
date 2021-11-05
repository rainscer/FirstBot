const Telegraf = require('telegraf').Telegraf;

const bot = new Telegraf('2082509203:AAEiiUsgrLeiXLX4q5AODpJpQD1n3N1ub-0');

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Hello there! Welcome to Cinemaland bot. To book a ticket write "ticket"',{
    })
})

bot.hears('ticket',ctx=> {
    console.log(ctx.from)
    let ticketMessage = 'great, choose the day of week for which you want to take a ticket';
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id,ticketMessage,{
            reply_markup: {
                inline_keyboard: [
                    [{
                            text: "Thursday",
                            callback_data: 'Thursday'
                        },
                        {
                            text: "Friday",
                            callback_data: 'Friday'
                        },
                        {
                            text: "Saturday",
                            callback_data: 'Saturday'
                        }
                    ],
                    [
                        {
                            text: "Sunday",
                            callback_data: 'Sunday'
                        },
                        {
                            text: "Monday",
                            callback_data: 'Monday'
                        },
                        {
                            text: "Tuesday",
                            callback_data: 'Tuesday'
                        },
                        {
                            text: "Wednesday",
                            callback_data: 'Wednesday'
                        }
                    ]
                ]
            }
        })
})

bot.action('Thursday',ctx => {
    console.log(ctx.from)
    let filmMessage = 'great, choose the film';
    bot.telegram.sendMessage(ctx.chat.id,filmMessage,{
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Film1",
                        callback_data: 'Film1'
                    }
                ],
                [
                    {
                        text: "Film2",
                        callback_data: 'Film2'
                    }
                ],
                [
                    {
                        text: "Film3",
                        callback_data: 'Film3'
                    }
                ]
            ]
        }
      })
})

bot.action('Friday',ctx => {
    console.log(ctx.from)
    let filmMessage = 'great, choose the film';
    bot.telegram.sendMessage(ctx.chat.id,filmMessage,{
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Film1",
                        callback_data: 'Film1'
                    }
                ],
                [
                    {
                        text: "Film2",
                        callback_data: 'Film2'
                    }
                ],
                [
                    {
                        text: "Film3",
                        callback_data: 'Film3'
                    }
                ]
            ]
        }
      })
})

bot.action('Sunday',ctx => {
    console.log(ctx.from)
    let filmMessage = 'great, choose the film';
    bot.telegram.sendMessage(ctx.chat.id,filmMessage,{
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Film1",
                        callback_data: 'Film1'
                    }
                ],
                [
                    {
                        text: "Film2",
                        callback_data: 'Film2'
                    }
                ],
                [
                    {
                        text: "Film3",
                        callback_data: 'Film3'
                    }
                ]
            ]
        }
      })
})

bot.action('Monday',ctx => {
    console.log(ctx.from)
    let filmMessage = 'great, choose the film';
    bot.telegram.sendMessage(ctx.chat.id,filmMessage,{
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Film1",
                        callback_data: 'Film1'
                    }
                ],
                [
                    {
                        text: "Film2",
                        callback_data: 'Film2'
                    }
                ],
                [
                    {
                        text: "Film3",
                        callback_data: 'Film3'
                    }
                ]
            ]
        }
      })
})

bot.action('Saturday',ctx => {
    console.log(ctx.from)
    let filmMessage = 'great, choose the film';
    bot.telegram.sendMessage(ctx.chat.id,filmMessage,{
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Film1",
                        callback_data: 'Film1'
                    }
                ],
                [
                    {
                        text: "Film2",
                        callback_data: 'Film2'
                    }
                ],
                [
                    {
                        text: "Film3",
                        callback_data: 'Film3'
                    }
                ]
            ]
        }
      })
})

bot.action('Tuesday',ctx => {
    console.log(ctx.from)
    let filmMessage = 'great, choose the film';
    bot.telegram.sendMessage(ctx.chat.id,filmMessage,{
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Film1",
                        callback_data: 'Film1'
                    }
                ],
                [
                    {
                        text: "Film2",
                        callback_data: 'Film2'
                    }
                ],
                [
                    {
                        text: "Film3",
                        callback_data: 'Film3'
                    }
                ]
            ]
        }
      })
})

bot.action('Wednesday',ctx => {
    console.log(ctx.from)
    let filmMessage = 'great, choose the film';
    bot.telegram.sendMessage(ctx.chat.id,filmMessage,{
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Film1",
                        callback_data: 'Film1'
                    }
                ],
                [
                    {
                        text: "Film2",
                        callback_data: 'Film2'
                    }
                ],
                [
                    {
                        text: "Film3",
                        callback_data: 'Film3'
                    }
                ]
            ]
        }
      })
})

bot.action('Film1',ctx => {
    console.log(ctx.from)
    let timeMessage = 'great, choose the time';
    bot.telegram.sendMessage(ctx.chat.id,timeMessage,{
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "09.00 a.m.",
                        callback_data: '9am'
                    }
                ],
                [
                    {
                        text: "01.00 p.m.",
                        callback_data: '1pm'
                    }
                ],
                [
                    {
                        text: "10.00 p.m.",
                        callback_data: '10pm'
                    }
                ]
            ]
        }
      })
})

bot.action('Film2',ctx => {
    console.log(ctx.from)
    let timeMessage = 'great, choose the time';
    bot.telegram.sendMessage(ctx.chat.id,timeMessage,{
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "08.30 a.m.",
                        callback_data: '8am'
                    }
                ],
                [
                    {
                        text: "02.15 p.m.",
                        callback_data: '2pm'
                    }
                ],
                [
                    {
                        text: "08.00 p.m.",
                        callback_data: '8pm'
                    }
                ]
            ]
        }
      })
})

bot.action('Film3',ctx => {
    console.log(ctx.from)
    let timeMessage = 'great, choose the time';
    bot.telegram.sendMessage(ctx.chat.id,timeMessage,{
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "10.20 a.m.",
                        callback_data: '10am'
                    }
                ],
                [
                    {
                        text: "05.05 p.m.",
                        callback_data: '5pm'
                    }
                ],
                [
                    {
                        text: "11.00 p.m.",
                        callback_data: '11pm'
                    }
                ]
            ]
        }
      })
})

bot.action('10pm', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'please, enter the number of tickets',{
    })
})



//---------------------------------------------------------------------

bot.hears('phone', (ctx, next)=>{
    console.log(ctx.form)
    bot.telegram.sendMessage(ctx.chat.id, 'Can we get access to your phone number?', requestPhoneKeyboard);
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

bot.launch(); 