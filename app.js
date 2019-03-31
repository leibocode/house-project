const express = require('express')
const es =require('elasticsearch')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const loginRouter = require('./routes/login')
//const router = express.Router()
const config = require('./config/config')

const { esPing } = require('./libs/es')

//启动es
esPing()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/search',function(req,res,next){
    const { q } =req.query
    console.log(q)
    let body = {
        size:10000,
        from:0,
        query:{
            match:{
                name:q
            }
        }
    }
    client.search({index:'shudian',body:body,type:'book'})
          .then(data=>{
              res.json(data.hits.hits)
          }).catch(err=>{
              console.log(err)
              res.send([])
          })
})

app.use('/xunwu',loginRouter)



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')))

//app.use('api',router())

app.listen(3000,function(){
    console.log('服务端启动成功')
})

