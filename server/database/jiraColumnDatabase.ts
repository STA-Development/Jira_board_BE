import { Sequelize, DataTypes } from "sequelize";
import { JiraColumnsType } from "../libs/types";
import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../../.env" });

const sequelize2 = new Sequelize(
  process.env.DB_NAME || "undefined",
  process.env.DB_USER || "undefined",
  process.env.DB_PASSWORD || "undefined",
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
  }
);

export const JiraColumns = sequelize2.define<JiraColumnsType>("JiraColumns", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  columnName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default sequelize2;
