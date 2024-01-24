import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "coffee_db",
});

con.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Success Connect");
});

app.use("/insert", cors(), (req, res) => {
  const { username, password, email } = req.body;
  const sql =
    "INSERT INTO customers (username, password, email) VALUES (?, ?, ?)";
  con.query(sql, [username, password, email], (error) => {
    if (error) {
      console.error("Error while inserting data:", error);
      return res.status(500).send("Error while inserting data");
    }
    res.status(200).send("Data inserted successfully");
  });
});

app.post("/read", async (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM customers WHERE `username` = ? AND `password` = ?";
  try {
    con.query(sql, [username, password], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      }
      res.status(200).json(result);
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

app.use("/insertDataAccount", cors(), (req, res) => {
  const { username, firstname, lastname, telephone, address } = req.body;
  const sql =
    "UPDATE `customers` SET `telephone`=?,`address`=?,`firstname`=?,`lastname`=? WHERE `username` = ?";
  con.query(
    sql,
    [telephone, address, firstname, lastname, username],
    (error) => {
      if (error) {
        console.error("Error while inserting data:", error);
        return res.status(500).send("Error while inserting data");
      }
      res.status(200).send("Data inserted successfully");
    }
  );
});

app.listen(5000, () => console.log("Server is running"));
