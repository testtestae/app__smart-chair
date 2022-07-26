const Router = require('express')
const router = new Router()

const userController = require('./contrrollers/userController')
const educationOrganizationController = require('./contrrollers/educationOrganizationController')

router.post('/user_by_username', userController.getUserByName)
router.post('/user_list', userController.getAllUsers)
router.post('/add_child', userController.addChild)
router.post('/add_education_organization', educationOrganizationController.addOrganization)
router.post('/find_education_organization_by_id', educationOrganizationController.searchOneOrganizationById)

module.exports = router