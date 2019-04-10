
import { Client } from '@elastic/elasticsearch'
const config = require('../config/config')

const client = new Client({
    node:config.search.host
})



export function esPing() {
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

export async function existsIndex() {
    const { body } = await client.exists({
        index:config.search.index
    })
    if(!body){
        //索引不存在
        
    }
}

export function search(body) {
    return new Promise((resolve,reject)=>{
        client.search({
            index:config.search.index,
            type:config.search.type,
            body:body
        }).then((res)=>{
            resolve(res.hits.hits)
        }).catch(err=>{
            reject(err)
        })
    })
}

/**
 * es 批量导入数据
 * @param {*} data 
 */
export function bulkIndex(data){
    return new Promise((resolve,reject)=>{
        let bulkBody = []
        data.forEach(item=>{
            bulkBody.push({
                index:{
                    _index:config.search.index,
                    _type:config.search.type,
                    _id:item.id
                }
            })
            bulkBody.push(item)
        })

    })
}

/**
 * 分页查询
 * @param {*} size 
 * @param {*} from 
 */
export function searchByPage(size,from){
    return new Promise((resolve,reject)=>{
        let body = {
            size,
            from,
            query:{
                match_all:{}
            }
        }
        client.search({
            index:config.search.index,
            type:config.search.type,
            body:body
        }).then(res=>{
            resolve(res.hits.hits)
        }).catch(err=>{
            reject(err)
        })
    })
}

export async function searchSuggest(){
    
}

