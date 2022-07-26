const {Schema, model} = require('mongoose')

const educationOrganizationSchema = new Schema({
    aboutOrganization: {
        info:{
            orgType: [{type:String}]
            ,number: {type:String}
            ,name: {type:String}
            ,description: {type:String}
            ,history: {type:String}
        },
        address:{
            index: {type:String}
            ,country: {type:String}
            ,city: {type:String}
            ,street: {type: String}
        }
    }
    ,classGroups:[{
        currentClassNumber: {type:String}
    }]
}, {strict: false})

module.exports = model('School', educationOrganizationSchema)