
import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
//import sequelize from './database';
const app = express();
const swaggerOptions = {
swaggerDefinition:{
  info : {
    title : "JiraBoardLibrary",
    version : "1.0.0",
    description : "JiraBoard API"
  }
  },
apis:['app.ts'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));
/**
 * @swagger
 * /JiraBoard:
 *   get:
 *     tags:
 *     name: Todo
 *     summary: Write your works and descripe it
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
 *           - description
 *     responses:
 *       '200':
 *         description: successfully registered
 *       '403':
 *         description: expects is not completed
 */


app.get("/JiraBoard", (req , res ) => {
 res.send([{
id : 1,
title : 'Sleep',
description : 'sleep soon'
 }])
});
app.post('/JiraBoard',(req , res , next) => {
  res.send("yeah!!!!");
  next();
});

/*
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});
*/



const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});