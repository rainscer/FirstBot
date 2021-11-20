const axios = require('axios');
const {Telegraf} = require('telegraf');
const bot = new Telegraf('2082509203:AAEiiUsgrLeiXLX4q5AODpJpQD1n3N1ub-0');

 

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Hello there! Welcome to Cinemaland bot. To book a ticket choose  /ticket',{
    })
})

bot.command('departments', ctx => {
    console.log(ctx.from)
    let departments=[];
    axios.get('https://collectionapi.metmuseum.org/public/collection/v1/departments').then((response)=>{
        departments = response.data.departments;
        bot.telegram.sendMessage(ctx.chat.id, 'Choose a deparments from the list below that you want visit',{
            reply_markup: JSON.stringify({
                inline_keyboard: departments.map((department, departmentId) => ([{
                    text: department.displayName,
                    callback_data: String(department.departmentId),
                }])),
            }),
        })
    })
})

// bot.action( department.departmentId, ctx => {
//     console.log(ctx.from)
//     let objects=[];
//     axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds'+departmentId).then((response)=>{
//         objects = response.data.objects;
//        console.log(response.data)
//     })
// })

bot.on('callback_query', query =>{
    console.log(query)
    const id = query.update.callback_query.message.chat.id;
    axios.get('https://collectionapi.metmuseum.org/public/collection/v1/departments').then((response)=>{
        console.log(response.data)
        let departments = response.data.departments;
        const result = departments.filter(item => {return item.displayName === query.update.callback_query.data})[0];
        let md = `${result.displayName}`;
        bot.telegram.sendMessage(id, md, {parse_mode:'markdown'})
        })
    
})
// bot.command('ticket',ctx=> {
//     console.log(ctx.from)
//     let ticketMessage = 'great, choose the day of week for which you want to take a ticket';
//     ctx.deleteMessage();
//     bot.telegram.sendMessage(ctx.chat.id,ticketMessage,{
//             reply_markup: {
//                 inline_keyboard: [
//                     axios.get("http://46.101.212.195:3000/students").then(response => {
//                         const data = response.data.data;
//                         console.log(response.data)                        
//                         })
//                 ]
//             }
//         })
// })

bot.command('cinema', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Today the following cinemas cooperate with our bot:  Dovzhenko cinema ',{
    })
})



bot.command('help',ctx=> {
    console.log(ctx.from)
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id,'info',{})
       
})

bot.action('Dovzhenko cinema',ctx => {
    console.log(ctx.from)    
    bot.telegram.sendMessage(ctx.chat.id,'Great, now you can view the film',{
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
