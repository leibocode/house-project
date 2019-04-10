import { search,searchByPage,searchSuggest } from '../libs/es'
export default class SearchController {

    /**
     * 查询目标房源
     * @param {} houseId 
     */
    index(houseId){
        return new Promise((resolve,reject)=>{
            let body = {
                id:houseId
            }
            search(body).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    /**
     * 
     * @param {*} houseId 
     */
    remove(houseId){
        return new Promise((resolve,reject)=>{
            let body = {
                id:houseId
            }
            search(body).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    query(searchData) {
        return new Promise((resolve,reject)=>{
            
        })
    }
    

    /**
     * 精确
     * @param {} mapSearch 
     */
    mapQuery(mapSearch) {

    }
}