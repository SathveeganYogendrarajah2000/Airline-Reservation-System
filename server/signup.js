import db from "./dbconfig.js";
import express from "express";
var router = express.Router();

//signup
router.post("/", (req, res) => {
  const { email, password, firstName, lastName, gender, phoneNumber, dob, nic } = req.body;
  const sqlInsert = "insert into user(first_name, last_name, password, email, phone_number, gender, dob, NIC) values (?,?,?,?,?,?,?,?)";
  db.query(sqlInsert, [firstName, lastName, password, email, phoneNumber, gender, dob, nic], (err, result) => {
    if (err) {
      res.send("0");
      console.log(err);
    } else {
      res.send("1");
    }
  });
});

export default router;
