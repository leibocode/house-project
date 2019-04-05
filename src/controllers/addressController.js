const Db = require('../libs/db')

/**
 * @description 处理和地区相关的控制器
 * @author LeiBo
 * @date 2019-04-01
 * @class AddressService
 */
class AddressService {
    /**
     * 获取所有支持的城市列表
     */
    findAllCities(){

    }

    /**
     * 根据城市英文简写获取该城市所有支持的区域信息
     * @param {*} cityName 
     */
    findAllRegionsByCityName(cityName){

    }

    /**
     * 根据城市英文简写获取该城市所有支持的区域信息
     * @param {*} cityEnName 
     */
    findAllSubwayByCity(cityEnName){

    }

    /**
     * 根据城市以及具体地位获取百度地图的经纬度
     * @param {*} city 
     * @param {*} address 
     */
    getBaiDuMapLocation(city,address){

    }

    lbsUpload(){

    }

    removeLbs(houseId){

    }
}