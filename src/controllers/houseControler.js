const models = require('../../database')
const House = models.House

export default class HouseController {
    /**
     * @description 查询完整房源信息
     * @author LeiBo
     * @date 2019-04-01
     * @param {*} id
     * @memberof HouseController
     */
    findCompleteOne(houseId){
        let house  = House.find()
    }


    /**
     * 移除图片
     * @param {*} id 
     */
    removePhoto(houseId){

    }

    /**
     * @description 新增标签
     * @author LeiBo
     * @date 2019-04-01
     * @param {*} houseId 房屋id
     * @param {*} tag 房屋标签
     * @memberof HouseController
     */
    addTag(houseId,tag){

    }

    removeTag(houseId,tag){
        
    }

    /**
     * 更新房屋状态
     * @param {*} houseId 
     * @param {*} status 
     */
    updateStatus(houseId,status){

    }

    /**
     * @description 查询房源信息集
     * @author LeiBo
     * @date 2019-04-01
     * @param {*} rentSearch
     * @memberof HouseController
     */
    query(rentSearch){

    }


    /**
     * @description 全地图查询
     * @author LeiBo
     * @date 2019-04-01
     * @param {*} mapSearch
     * @memberof HouseController
     */
    wholeMapQuery(mapSearch){

    }
    

    /**
     * @description 精确范围数据查询
     * @author LeiBo
     * @date 2019-04-01
     * @param {*} mapSearch
     * @memberof HouseController
     */
    boundMapQuery(mapSearch){

    }

    /**
     * 
     * @param {*} houseId 
     */
    addSubscribeOrder(houseId){

    }

    
}