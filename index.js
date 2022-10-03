
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

app.listen(3001,() => {
console.log("run");
});


const db = mysql.createPool({
host: "localhost",
user: "root",
password: "password123",
database: "irrigation_system"
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get" , (req,res) => {
   const sqlSelect = "SELECT * FROM Data";
   db.query(sqlSelect,(err, result) => {
   res.send(result);
   })
});