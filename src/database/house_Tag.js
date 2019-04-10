
// export default function(sequelize,DataTypes){
//     const HouseTag = sequelize.define('HouseTag',{
//         id:{
//             type:DataTypes.UUID,
//             defaultValue:DataTypes.UUIDV4,
//             primaryKey:true
//         },
//         house_id:{
//             type:DataTypes.STRING,
//             allowNull:false
//         },
//         name:{
//             type:DataTypes.STRING,
//             allowNull:false
//         }
//     },{
//         freezeTableName:true,
//         tableName:'house_tag',
//         timestamps:false
//     })

//     return HouseTag
// }