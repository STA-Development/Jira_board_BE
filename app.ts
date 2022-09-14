import * as express from 'express';
//import sequelize from './database';
//import item from './item';

/*import database from "./Database/Databse";*/
//define variable for express
const app = express();

//In get method we will send request and make a directory to print the result for us 
app.get("/", (req, res) => {
  res.send("welcome to website");
   //next will run after all of middleware funcs 
});
app.post('/post',(req , res , next) => {
  res.send("yeah!!!!");
  next();
})

const PORT = 5000;
//listen will use to give us info into terminal
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
