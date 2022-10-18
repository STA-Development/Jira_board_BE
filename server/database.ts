import { Sequelize,Model,InferAttributes,InferCreationAttributes, DataTypes} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({path:__dirname+'/../.env'})

export const sequelize = new Sequelize(process.env.DB_NAME || 'undefined',process.env.DB_USER || 'undefined',process.env.DB_PASSWORD || 'undefined',{
    dialect:"mysql",
    host:process.env.DB_HOST,
  })

  /*
  interface Columns extends Model<InferAttributes<Columns>, InferCreationAttributes<Columns>>{
    id : number;
    TODO : string;
    InProgress : string;
    Done : string;
  }
  const Columns = sequelize.define<Columns>('Columns',{
  id : {
    type : DataTypes.STRING,
    primaryKey:true,
    allowNull:false,
  },
  TODO : {
  type:DataTypes.STRING,
  allowNull:false,
  },
  InProgress : {
    type : DataTypes.STRING,
    allowNull:true,
  },
  Done : {
      type : DataTypes.STRING,
      allowNull:true,
  }
  });

*/
  interface items extends Model<InferAttributes<items>, InferCreationAttributes<items>>{
  id : Number;
  title : string;
  description : string;
}

export const items = sequelize.define<items>('Items',{
  id : {
    autoIncrement: true,
    type:DataTypes.INTEGER,
    primaryKey:true,
  },

title : {
type:DataTypes.STRING,
allowNull:false,

},
description : {
  type : DataTypes.STRING,
  allowNull:true,
}
});

/*
sequelize.sync({ force: true }).then(()=>{
  console.log('Table created successfully');
}).catch((error)=>{
  console.error('Unable to create table : ' , error);
})
*/

export default sequelize;