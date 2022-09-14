import { Sequelize,Model,DataType,CreationOptional,InferAttributes,InferCreationAttributes, DataTypes} from 'sequelize';
import * as dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
  dialect:"mysql",
  host:process.env.DB_HOST,
})

interface Columns extends Model<InferAttributes<Columns>, InferCreationAttributes<Columns>>{
id : number;
TODO : string;
InProgress : string;
Done : string;
}

const Columns = sequelize.define<Columns>('Columns',{
id : {
  type : DataTypes.INTEGER,
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
/*
sequelize.sync({ force: true }).then(()=>{
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