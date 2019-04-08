
export default function (sequelize,DataTypes){
    const User = sequelize.define('User',{
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        phone_number:{
            type:DataTypes.STRING(15),
            allowNull:false,
            unique:true
        },
        userstatus:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        avatar:{
            type:DataTypes.STRING(255)
        },
        create_time:{
            type:DataTypes.DATE,
            allowNull:false
        },
        last_login_time:{
            type:DataTypes.DATE,
            allowNull:false
        },
        last_update_time:{
            type:DataTypes.DATE,
            allowNull:false 
        }
    },{
        freezeTableName:true,
        tableName:"user",
        timestamps:false
    })

    return User
}


CREATE TABLE USER (
    id VARCHAR(32) NOT NULL  PRIMARY KEY ,
    username VARCHAR(32) NOT NULL UNIQUE ,
    email VARCHAR(32) NOT NULL UNIQUE ,
    phone_number VARCHAR(15) NOT NULL UNIQUE ,
    userstatus INT(2) NOT NULL ,
    avatar VARCHAR(255),
    pwd NVARCHAR(32) NOT NULL,
    create_time DATETIME NOT NULL ,
    last_login_time DATETIME NOT NULL ,
    last_update_time DATETIME NOT NULL 
 );
 
 CREATE INDEX ON role(user_id);
 
 CREATE TABLE support_address (
   id VARCHAR(32) NOT NULL  PRIMARY KEY,
    belong_to VARCHAR(32) NOT NULL,
   en_name VARCHAR(32) NOT NULL,
   cn_name VARCHAR(32) NOT NULL,
   LEVEL VARCHAR(16) NOT NULL,
   baidu_map_lng DOUBLE NOT NULL ,
   baidu_map_lat  DOUBLE NOT NULL 
 );
 
 CREATE INDEX ON support_address (belong_to,en_name,LEVEL);
 
 CREATE TABLE house (
   id VARCHAR(32) NOT NULL  PRIMARY KEY,
   title VARCHAR(32) NOT NULL,
   price INT(11) NOT NULL,
   AREA INT(11) NOT NULL ,
   room INT(11) NOT NULL ,
   FLOOR INT(11) NOT NULL ,
   total_floor INT(11) NOT NULL 
   watch_times INT(11) ,
   build_year INT NOT NULL ,
   STATUS INT NOT NULL,
   create_time DATETIME NOT NULL,
   last_update_time DATETIME ,
   city_en_name VARCHAR(32) NOT NULL,
   region_en_name VARCHAR(32) NOT NULL,
   cover VARCHAR(32) DEFAULT NULL ,
   direction INT(11) NOT NULL ,
   distance_to_subway INT(11) NOT NULL ,
   parlour INT(11) NOT NULL ,
   district VARCHAR(32) NOT NULL ,
   admin_id INT(11) NOT NULL ,
   bathroom INT(11) NOT NULL ,
   street VARCHAR(32) NOT NULL ,
 );
 CREATE TABLE house_detail (
   id VARCHAR(32) NOT NULL ,
   description VARCHAR(255) DEFAULT NULL COMMENT '详细描述',
   layout_desc VARCHAR(255) DEFAULT NULL COMMENT '户型介绍',
   traffic VARCHAR(255) DEFAULT NULL COMMENT '交通出行',
   round_service VARCHAR(255) DEFAULT NULL COMMENT '周边配套',
   rent_way INT(2) NOT NULL COMMENT '租赁方式',
   address VARCHAR(32) NOT NULL COMMENT '详细地址 ',
   subway_line_id INT(11) DEFAULT NULL COMMENT '附近地铁线id',
   subway_line_name VARCHAR(32) DEFAULT NULL COMMENT '附近地铁线名称',
   subway_station_id INT(11) DEFAULT NULL COMMENT '地铁站id',
   subway_station_name VARCHAR(32) DEFAULT NULL COMMENT '地铁站名',
   house_id INT(11) NOT NULL COMMENT '对应house的id',
   PRIMARY KEY (id)
 );
 
 CREATE TABLE house_tag (
   house_id NVARCHAR(32),
   id NVARCHAR(32) NOT NULL,
   NAME NVARCHAR(100)
 );
 
 DROP TABLE house_detail
 
 
 SELECT * FROM USER