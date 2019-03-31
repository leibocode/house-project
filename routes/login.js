const express =require('express')
const router = express.Router()


router.get('/index',function(req,res,next){
    console.log('命中')
    res.render('rent-map')
})

module.exports = router


