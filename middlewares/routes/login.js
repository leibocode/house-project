const express =require('express')
const router = express.Router()


router.get('/index',function(req,res,next){
    res.render('index')
})

router.get('/login',function(req,res,next){
    res.render('login')
})

router.get('/rentMap',function(req,res,next){
    res.render('rent-map')
})

router.get('/rentList',function(req,res,next){
    res.render('/rent-list')
})

router.get('/houseDetail',function(req,res,next){
    
})



module.exports = router


