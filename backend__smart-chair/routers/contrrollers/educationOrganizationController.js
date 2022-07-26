const EducationOrganization = require('./models/EducationOrganization');

class educationOrganizationController {
    async addOrganization(req, res){
        try {
            const educationOrganization = new EducationOrganization({
                info: {
                    orgType: [req.body.orgType]
                    ,number: req.body.number
                    ,name: req.body.name
                    ,description: req.body.description
                    ,history: req.body.history
                }
                ,address: {
                    index: req.body.index
                    ,country: req.body.country
                    ,city: req.body.city
                    ,street: req.body.street
                }
                ,classGroups: [
                    ...req.body.classGroups
                ]
            })
            await educationOrganization.save()
            res.json(educationOrganization)
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'addOrganization error'})
        }
    }

    async searchOneOrganizationById(req, res){
        try {
            res.json(await EducationOrganization.findOne({"_id": req.body.schoolId}))
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'searchOneOrganization error'})
        }
    }
}

module.exports = new educationOrganizationController()