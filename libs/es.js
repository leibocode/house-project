const es = require('elasticsearch')
const config = require('../config/config')

const client = new es.Client({
    hosts:config.search
})

exports.esPing = function(){
    client.ping({

    },function(err){
        if(err){
            console.log('es集群失败')
        }else{
            console.log('es启动成功')
        }
    })
}

exports.search = function(type,body,callback){
    client.search({index:'shudian',body:body,type:type})
          .then(result=>{
              callback(result)
          }).catch(err=>{

          })
}
