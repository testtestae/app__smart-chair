const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    firstName: {type: String, required: true}
    ,secondName: {type: String, required: true}
    ,email: {type: String, unique:true, required: false}
    ,classGroup: [{type: String}]
    ,username: {type: String, unique: true, required: true}
    ,roles:[{type: String}]
})

module.exports = model('User', userSchema)