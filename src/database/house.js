
export default function (sequelize,DataTypes) {
    const House = sequelize.define('House',{
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        freezeTableName:true,
        tableName:'house',
        timestamps:false
    })
    return House
}