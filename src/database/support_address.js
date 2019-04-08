export default function (sequelize,DataTypes) {
    const Support = sequelize.defin('Support',{
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true
        },
        belong_to:{
            type:DataTypes.STRING,
            allowNull:false
        },
        en_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        cn_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        LEVEL:{
            type:DataTypes.STRING,
            allowNull:false
        },
        baidu_map_log:{
            type:{
                type:DataTypes.DOUBLE,
                allowNull:false
            }
        },
        baidu_map_lat:{
            type:{
                type:DataTypes.DOUBLE,
                allowNull:false
            }
        }
    })

    return Support
}