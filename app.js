const axios = require('axios');
const {Telegraf} = require('telegraf');
const bot = new Telegraf('2082509203:AAEiiUsgrLeiXLX4q5AODpJpQD1n3N1ub-0');

 

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Hello there! Welcome to The Metropolian museum bot. If you want choose departments our museum press  /departments',{
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

bot.on('callback_query', query =>{
    //Sladkova
    const btn ={
        reply_markup: {
            inline_keyboard: [
                [
                                    {
                                    text: "               More               ",
                                    callback_data: "More"                            
                                    },
                                    {
                                        text: "             Next              ",
                                        callback_data: "Next"                            
                                    }
                ],
            ]
        }
    }

    let objects=[];
    let object=[];
    console.log(query)
    const id = query.update.callback_query.message.chat.id;
    axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds='+query.update.callback_query.data).then((response)=>{
        objects = response.data; 
        // console.log(objects)
        const randomId = response.data.objectIDs[Math.floor(Math.random() * response.data.objectIDs.length)];    
        axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/'+randomId).then((response)=>{
            // console.log(response.data)
            object = response.data;

            if(object.primaryImage == ''){
                object.primaryImage = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png'
            } 
            if(object.artistDisplayName == ''){
                object.artistDisplayName = 'unknown'
            } 
            if(object.title == ''){
                object.title = object.objectName
            } 
            if(object.objectDate == ''){
                object.objectDate = 'unknown'
            } 
            if(object.country == ''){
                object.country = 'unknown'
            }

            let img = object.primaryImage;
            let md = `
                Name artwork: ${object.title}
Artist: ${object.artistDisplayName}
Date when an artwork was created: ${object.objectDate} 
Country where created: ${object.geographyType} ${object.country} 
`; 

            bot.telegram.sendPhoto(id, img, {parse_mode:'markdown'}).then(()=>{
                bot.telegram.sendMessage(id, md, {parse_mode:'markdown'}).then(()=>{
                //Sladkova
                bot.telegram.sendMessage(id, "TEXT", btn)   
                });
            })
                    
        })


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

bot.command('help',ctx=> {
    console.log(ctx.from)
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id,'info',{})
       
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
