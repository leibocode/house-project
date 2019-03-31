const elastcisearch = require('elasticsearch')
const config = require('../config/config')

//实例化一个客户端
const client = new elastcisearch.Client({
    hosts:config.search
})

client.ping({
    requestTimeout:30000
},function(err){
    if(err){
        console.log('Elasticsearch cluter is down!')
        console.log('es 集群 失败')
    }else {
        console.log('es启动成功')
    }
})

//创建索引
client.indices.create({
    index:'shudian'
},function(err,response,status){
    if(err){
        console.log('索引创建失败')
    }else {
        console.log('created a new index',response)
    }
})

let books =[]
for(let i =0;i<100000;i++){
    let book = {
        name:`${i}书`,
        author:`${i}ssssdfsdfsdfdsfsdfsdfsdfdsfsdfsdfddddddddsdfsdfsdfsdf`,
        tag:`${i}文本，文本`,
        updtae:`Leibo`,
        self:'净重:15.6'
    }
    books.push({
        index:{
            _index:"shudian", 
            _type:"book",
        }
    })
    books.push(book)
}

//对传递数据执行批量索引
client.bulk({body:books},function(err,response){
    if(err){
        console.log('导入索引')
    }else {
        console.log('导入成功')
    }
})

module.exports = client















