const Chair = require('./models/Chair');
const User = require('./models/User');


class userController {
    async getUserByName(req, res){
        try{
            res.json(await User.findOne({username: req.body.username}));
        } catch(e) {
            console.log(e);
            res.status(400).json({message: 'getUserByName error'})
        }
    }
    async getAllUsers(req, res){
        try{
            res.json(await User.find({}));
            // console.log(req.body);
        } catch(e) {
            console.log(e);
            res.status(400).json({message: 'getAllUsers error'})
        }
    }
    async addChild(req, res){
        try {
            const {firstName, secondName, classGroup, username} = req.body;
            
            const user = new User({firstName, secondName, classGroup:[classGroup], username, roles:["child"]})
            await user.save()
            res.json({user})
        
            
        } catch (e) {
            console.log(e);
            res
            // .status(400)
            .json({message: 'registration error', e})
        }
    }
}

module.exports = new userController()