
// export default function (sequelize,DataTypes){
//     const User = sequelize.define('User',{
//         id:{
//             type:DataTypes.UUID,
//             defaultValue:DataTypes.UUIDV4,
//             primaryKey:true
//         },
//         username:{
//             type:DataTypes.STRING,
//             allowNull:false,
//             unique:true
//         },
//         email:{
//             type:DataTypes.STRING,
//             allowNull:false,
//             unique:true
//         },
//         phone_number:{
//             type:DataTypes.STRING(15),
//             allowNull:false,
//             unique:true
//         },
//         userstatus:{
//             type:DataTypes.INTEGER,
//             allowNull:false
//         },
//         avatar:{
//             type:DataTypes.STRING(255)
//         },
//         create_time:{
//             type:DataTypes.DATE,
//             allowNull:false
//         },
//         last_login_time:{
//             type:DataTypes.DATE,
//             allowNull:false
//         },
//         last_update_time:{
//             type:DataTypes.DATE,
//             allowNull:false 
//         }
//     },{
//         freezeTableName:true,
//         tableName:"user",
//         timestamps:false
//     })

//     return User
// }

