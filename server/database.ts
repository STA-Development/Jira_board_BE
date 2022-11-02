import {
  Sequelize,
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes
} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../.env' });

export const sequelize = new Sequelize(
  process.env.DB_NAME || 'undefined',
  process.env.DB_USER || 'undefined',
  process.env.DB_PASSWORD || 'undefined',
  {
    dialect: 'mysql',
    host: process.env.DB_HOST
  }
);

interface items
  extends Model<InferAttributes<items>, InferCreationAttributes<items>> {
  id: number;
  title: string;
  description: string;
}

export const items = sequelize.define<items>('Items', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default sequelize;
