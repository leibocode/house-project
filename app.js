import path from 'path'
import { esPing} from './src/libs/es'
const express = require('express')
const es =require('elasticsearch')
const app = express()
const bodyParser = require('body-parser')
const loginRouter = require('./src/middlewares/routes/login')
//const router = express.Router()
const config = require('./src/config/config')

// const { esPing } = require('./libs/es')

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


app.use('/xunwu',loginRouter)
app.get('/test',function(req,res,next){
    res.send('xx')
})


app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')))

//app.use('api',router())

app.listen(3000,function(){
    console.log('服务端启动成功')
})

