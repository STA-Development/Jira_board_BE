import express from "express";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import sequelize from "./database/ticketDatabase";
import { swaggerDocs } from "./swagger/swagger";
import { router } from "./routes/ticketRoutes";
const path = __dirname + "/../.env";
import cors from "cors";
//import sequelize2 from "./database/jiraColumnDatabase";
dotenv.config({ path });
const app = express();
//import * as a from "./swagger.json";
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

/**
 * @swagger
 * /api/jiraBoardData:
 *   post:
 *     tags:
 *       - Tickets
 *     name: Todo
 *     summary: add a new Ticket
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 *         required:
 *           - title
 *     responses:
 *       '200':
 *         description: successfully registered
 *       '403':
 *         description: email already exists
 */
app.use(express.json());
app.use("/api/jiraBoardData", router);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
/*
sequelize2
  .sync({ force: true })
  .then(() => {
    console.log("Table created successfully");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
*/
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
