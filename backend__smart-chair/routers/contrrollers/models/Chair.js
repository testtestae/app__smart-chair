const {Schema, model} = require('mongoose')

const chairSchema = new Schema({}, {strict: false})

module.exports = model('Chair', chairSchema)