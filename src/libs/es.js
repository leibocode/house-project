import elasticsearch from elasticsearch
const config = require('../config/config')
const client  = elasticsearch.Client({
    host:config.search.host,
    log:'trace'
})

export function pingEs() {
    client.ping({
        requestTimeout:1000
    },function(error){
        if(error){
            console.log('es启动失败')
        }else {
            console.log('es启动成功');
        }
    })
}

export function search(body) {
    client.search({
        index:config.search.index,
        type:config.search.type,
        body:body
    }).then(()=>{

    })
}