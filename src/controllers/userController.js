const models = require('../../database')
const User = models.User
export default class UserController {
    checkUser(user){
        User.find({
            
        })
    }
}