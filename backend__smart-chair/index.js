const config = require('config')
const fs = require('fs')
const mqtt = require('mqtt') 
const express = require('express')
var cors = require('cors')
const mongoose = require('mongoose')
const mainRouter = require('./routers/mainRouter')

const app = express()
app.use(cors({ origin: true }))
app.use(express.json());
app.use('/api', mainRouter);

// let modules = new Map()
// let modulesFile = fs.readdirSync('./modules').filter(file => file.endsWith('.js'))
// for (let file of modulesFile) {
//     let module = require(`./modules/${file}`)
//     modules.set(file, module)
// }

// let libs = {mqtt}


//Получение данных с mqtt
// let path = '' //Сюда вписывать адрес
// let data_length = 2 //Кол-во полученных данных прежде чем возвращать массив беку

// let mqtt_module = modules.get("mqtt.js")
// let mqtt_data = mqtt_module.execute(libs.mqtt, path, data_length)


const start = async () =>{
    try {
        await mongoose.connect(`mongodb+srv://${config.get('db.username')}:${config.get('db.password')}@cluster0.r2ddi.mongodb.net/chair?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
        app.listen(config.get('api.port'), ()=>{
            console.log(`Сервер запущен на ${config.get('api.port')} порту`);
        })        
    } catch(e) {

    }
}

start()