
import { Sequelize,Model,DataType,CreationOptional,InferAttributes,InferCreationAttributes, DataTypes} from 'sequelize';
import * as dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
  dialect:"mysql",
  host:process.env.DB_HOST,
})

interface Items extends Model<InferAttributes<Items>, InferCreationAttributes<Items>>{
id : number;
title : string;
description : string;
}


const Items = sequelize.define<Items>('items',{
id : {
  type : DataTypes.INTEGER,
  primaryKey:true,
  allowNull:false,
  
},
title : {
type:DataTypes.STRING,
allowNull:false,
},
description : {
  type : DataTypes.STRING,
  allowNull:true,
},
});
/*
sequelize.sync().then(()=>{
  console.log('Table created successfully');
}).catch((error)=>{
  console.error('Unable to create table : ' , error);
})
*/

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});


export default sequelize;
//global.sequelize = sequelize;
