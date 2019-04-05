
export default function (sequelize,DataTypes){
    const user = sequelize.define('User',{
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true
        },
        
    })
}