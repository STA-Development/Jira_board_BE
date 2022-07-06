import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  database: "jiraboard",
  user: "root",
  password: "",
});

connection.connect(function (error) {
  if (error) {
    console.log("is not conected!" + error.message);
  } else {
    console.log("Database is connected");
  }
});

export default connection;
