const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/AuthenticateUser");

class Users {
  fetchUsers(req, res) {
    const query = `
            SELECT firstName, lastName, userAge, Gender, userRole, emailAdd, userProfile
            FROM Users
        `;
    db.query(query, (err, data) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results: data,
      });
    });
  }
  fetchUser(req, res) {
    const query = `
        SELECT firstName, lastName, userAge, Gender, userRole, emailAdd, userProfile
        FROM Users
        WHERE UserID = ${req.params.UserID}
        `;
    db.query(query, (err, data) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results: data,
      });
    });
  }
  async login(req, res) {
    const { emailAdd, userPass } = req.body;
    // query
    const query = `
      SELECT firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
      FROM Users
      WHERE emailAdd = ?
    `;
    db.query(query, [emailAdd], async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You are providing the wrong email",
        });
      } else {
        compare(userPass, result[0].userPass, (cerr, cresult) => {
          if (cerr) throw cerr;
          // Create a token
          const token = createToken({
            emailAdd,
            userPass,
          });
          // Save A token
          res.cookie("realUser", token, {
            expires: new Date(Date.now() + 259200000),
            httpOnly: true,
          });
          if (cresult) {
            res.json({
              msg: "Logged in!",
              token,
              cresult: cresult[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "Invalid login",
            });
          }
        });
      }
    });
  }
  async registerUser(req, res) {
    const data = req.body;
    data.userPass = await hash(data.userPass, 15);
    const user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass,
    };
    const query = `
            INSERT INTO Users SET ?
        `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      let token = createToken(user);
      // res.cookie("LegitUser", token, {
      //   expires: new Date(Date.now() + 259200000),
      //   httpOnly: true,
      // });
      res.json({
        status: res.statusCode,
        msg: "User registered successfully",
      });
    });
  }
  removeUser(req, res) {
    const query = `
            DELETE FROM Users WHERE UserID = ${req.params.userID}
        `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "User record was removed successfully",
      });
    });
  }
  updateUser(req, res) {
    const query = `
            UPDATE Users SET ? WHERE UserID = ${req.params.userID}
        `;
    db.query(query, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "User record was updated successfully",
      });
    });
  }
}

module.exports = { Users };