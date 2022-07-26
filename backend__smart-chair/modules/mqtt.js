module.exports = {
    async execute (mqtt, path, data_length) {
        let listener  = mqtt.connect(path) 
        let data = [] //массив полученных данных
        
        listener.on(
            'message', function (topic, message) {
                data.push(message.toString())
                if (data.length == data_length) return data
            }
        )
    }
}
