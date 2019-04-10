
// export default function (sequelize,DataTypes) {
//     const House = sequelize.define('House',{
//         id:{
//             type:DataTypes.UUID,
//             defaultValue:DataTypes.UUIDV4,
//             primaryKey:true
//         },
//         title:{
//             type:DataTypes.STRING,
//             allowNull:false
//         },
//         price:{
//             type:DataTypes.INTEGET,
//             allowNull:false
//         },
//         AREA:{
//           type:DataTypes.INTEGET,
//           allowNull:false  
//         },
//         root:{
//             type:DataTypes.STRING,
//             allowNull:false
//         },
//         FLOOR:{
//             type:DataTypes.STRING,
//             allowNull:false
//         },
//         total_floor:{
//             type:DataTypes.INTEGET,
//             allowNull:false
//         }
        
//     },{
//         freezeTableName:true,
//         tableName:'house',
//         timestamps:false
//     })
// }