import { Model, InferAttributes, InferCreationAttributes } from "sequelize";

export interface ReqItemsTypes {
  id: number;
  title: string;
  description?: string;
  JiraColumnId: number;
}
export interface TicketsType
  extends Model<
    InferAttributes<TicketsType>,
    InferCreationAttributes<TicketsType>
  > {
  id: number;
  title: string;
  description?: string;
  JiraColumnId: number;
}

export interface JiraColumnsType
  extends Model<
    InferAttributes<JiraColumnsType>,
    InferCreationAttributes<JiraColumnsType>
  > {
  id: number;
  columnName: string;
}
