import express from 'express';

/*import database from "./Database/Databse";*/
//define variable for express
const app = express();
//will use get for specific variable to define direction with req and res parameter which will send respond by message
app.get("/", (req, res, next) => {
  res.send("welcome to website");
  next();
});

const PORT = 5000;
//listen will use to give us info into terminal
app.listen(PORT, () => {
  console.log(`Running on port ${5000}`);
});
