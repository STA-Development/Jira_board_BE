import express from 'express';
import sequelize from './database';
const app = express();

app.get("/", (req : Express.Request, res : Express.Response) => {
 // res.send("welcome to website");
  
});
app.post('/post',(req , res , next) => {
  res.send("yeah!!!!");
  next();
})
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});