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
    const id = query.update.callback_query.message.chat.id;
    let objects=[];
    let object=[];    
    switch (query.update.callback_query.data) {
 
        case 'Change':
            // bot.telegram.sendMessage(id, 'Hello')
            let departments=[];
            axios.get('https://collectionapi.metmuseum.org/public/collection/v1/departments').then((response)=>{
                departments = response.data.departments;
                bot.telegram.sendMessage(id, 'Choose a deparments from the list below that you want visit',{
                    reply_markup: JSON.stringify({
                        inline_keyboard: departments.map((department, departmentId) => ([{
                            text: department.displayName,
                            callback_data: String(department.departmentId),
                        }])),
                    }),
                })
            })
            break;
            // case 'Next':    
            // bot.telegram.sendMessage(id, 'Hello')
            // break;
            // case 'More': 
            // bot.telegram.sendPhoto(id, img, {parse_mode:'markdown'}).then(()=>{
            //     bot.telegram.sendMessage(id, md, {parse_mode:'markdown'}).then(()=>{
            //         bot.telegram.sendMessage(id,"choose button, if you want learn more press - More. If you want change artwork, press - Next. If you want change department, press - Change", btn)
            //     });
            // })          
            // break;
            default:
                const btn ={
                    reply_markup: {
                        inline_keyboard: [
                            [
                                                // {
                                                // text: " More  ",
                                                // callback_data: "More"                            
                                                // },
                                                // {
                                                //     text: " Next",
                                                //     callback_data: "Next"                            
                                                // },
                                                {
                                                    text: "Change",
                                                    callback_data: "Change"                            
                                                }
                            ],
                        ]
                    }
                }    
                
                
                console.log('!!!', query.update.callback_query)           
                axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds='+query.update.callback_query.data).then((response)=>{
                    objects = response.data; 
                    console.log(objects)
                    const randomId = response.data.objectIDs[Math.floor(Math.random() * response.data.objectIDs.length)];    
                    axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/'+randomId).then((response)=>{
                        console.log(response.data)
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
                        if(object.culture == ''){
                            object.culture = 'unknown'
                        }
                         if(object.portfolio == ''){
                            object.portfolio = 'unknown'
                        }
                        if(object.GalleryNumber == ''){
                            object.GalleryNumber = 'unknown'
                        }
            
                        let img = object.primaryImage;
                        let md = `
                            Name artwork: ${object.title}

Artist: ${object.artistDisplayName} (${object.artistBeginDate} - ${object.artistEndDate})

Date when an artwork was created: ${object.objectDate}  (${object.objectBeginDate} - ${object.objectEndDate})

Country where created: ${object.geographyType} ${object.country} 

Culture, or people from which an object was created: ${object.culture} 

A set of works created as a group or published as a series: ${object.portfolio}

Gallery number, where available: ${object.GalleryNumber}

---------------------------------

More info on our site: ${object.objectURL}    
`; 
            
                bot.telegram.sendPhoto(id, img, {parse_mode:'markdown'}).then(()=>{
                    bot.telegram.sendMessage(id, md, {parse_mode:'markdown'}).then(()=>{
                        bot.telegram.sendMessage(id,"If you want change department, press - Change", btn)
                            });
                        }) 
                    })
                })  
        }  
})



bot.launch(); 
