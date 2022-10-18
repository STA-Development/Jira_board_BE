
import express,{NextFunction, Request,Response} from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv'
import {v4 as uuidv4} from 'uuid';
//import { JiraBoard } from './api/JiraBoardData';
dotenv.config({path:__dirname+'/../.env'});
import sequelize, { items } from './database';
import { JiraBoard } from './api/JiraBoardData';
import { validationResult } from 'express-validator';
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

app.use(express.json())

app.post("/api/jiraBoardData",async(req : Request  , res : Response ) => {
  try{
  const record = await items.create({ ...req.body });
  return res.json({record , msg:"item has been created successfully"});
  }
  catch(e){
    return res.json({msg: "fail to create" , status: 500, route: "/api/jiraBoardData"})
  }
 });


app.get('/api/JiraBoardData', async(req : Request , res : Response)=> {
  try{
    const record = await items.findAll()
return res.json(record);
  }
catch(e){
return res.json({msg: "fail to connect" , status: 500, route: "/api/jiraBoardData"})
}
});


app.get('/api/JiraBoardData/:id', async(req : Request , res : Response)=> {
  try{
const {id} = req.params;
const record = await items.findOne({where:{id}})
return res.json(record);
  }
catch(e){
return res.json({msg: "fail to connect" , status: 500, route: "/api/jiraBoardData/:id"})
}
});

app.delete('/api/JiraBoardData/:id', async(req : Request , res : Response)=>{
try {
const {id} = req.params;
const record = await items.findOne({where : {id}});

if(!record){
  return res.json({msg : 'can not find existing record'});
}
const deletedRecord = await record.destroy();
return res.json({record : deletedRecord});
}
catch(e){
return res.json({
msg: "fail to read",
status:500,
route :"/api/jiraBoardData/:id",
})
}
})


/*
app.get("/api/jiraboard", (req , res ) => {
 res.send(JiraBoard)
});
app.get("/api/jiraboard/:id",(req,res) =>{
const data = JiraBoard.find(c => c.id === parseInt(req.params.id));
if(!data) res.status(404).send("The course with given id was not found"); //404
res.send(data);
})
app.post('/JiraBoard',(req , res , next) => {
  res.send("yeah!!!!");
  next();
});
*/


sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});


/*
sequelize.sync({ force: true }).then(()=>{
  console.log('Table created successfully');
}).catch((error)=>{
  console.error('Unable to create table : ' , error);
})
*/

const PORT = process.env.PORT;
console.log(PORT);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});