import { Sequelize, DataTypes } from "sequelize";
import { TicketsType } from "../libs/types";
import { JiraColumns } from "./jiraColumnDatabase";
import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../../.env" });

export const sequelize = new Sequelize(
  process.env.DB_NAME || "undefined",
  process.env.DB_USER || "undefined",
  process.env.DB_PASSWORD || "undefined",
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
  }
);

export const Tickets = sequelize.define<TicketsType>("Tickets", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    defaultValue: "default description",
    type: DataTypes.STRING,
    allowNull: true,
  },
  JiraColumnId: {
    type: DataTypes.INTEGER,
    references: {
      model: "JiraColumns",
      key: "id",
    },
  },
});
JiraColumns.hasMany(Tickets);
Tickets.belongsTo(JiraColumns);

export default sequelize;
