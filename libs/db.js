const mysql = require('mysql')
const url = require('url')
const config = require('../config/config')

const pool = mysql.createPool(config.mysql)

exports.query = (sql,callback)=>{
    pool.getConnection(function(err,connection){
        if(err){

        }else {
            connection.query(sql,function(err,data){
                callback(err,data)
            })
        }

    })
}


