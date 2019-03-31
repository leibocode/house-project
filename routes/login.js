const express =require('express')
const router = express.Router()


router.get('/index',function(req,res,next){
    res.render('rent-map')
})



module.exports = router


