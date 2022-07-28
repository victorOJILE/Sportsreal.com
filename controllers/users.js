const fs = require("fs");
const path = require('path');
const bcrypt = require("bcrypt");
const salt = 10;
const generateId = require("../utils/generateId").generateId;

let monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let weekNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
let date = new Date();
let time = () =>  `${weekNames[date.getDay()+1]}, ${date.getDate()} ${monthName[date.getMonth()+1]} ${date.getFullYear()}. Time ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

function addNewUser(req, res) {
  if(!req.body.fullname || !req.body.username || !req.body.email || !req.body.phonecode || !req.body.phonenumber || !req.body.password || !req.body.dayOB || !req.body.monthOB || !req.body.yearOB || !req.body.Gender) {
    res.status(400).json({ message: "Form not properly filled. Please check for omitted fields."});
    return;
  }
  let { username, email, password } = req.body;
  async function func() {
    try {
      let pwd = await bcrypt.hash(password, salt);
      req.body.password = pwd
    } catch (error) {
      console.log(error);
    }
    fs.readFile("./database/blog.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file ", err);
        return;
      }
      try {
        const json = JSON.parse(data);
        let newId = generateId();
        function checkOldId(nId) {
          let checkId = json.backend.users.find(user => user.id == nId);
          return checkId || false;
        }
        while (checkOldId(newId)) {
          newId = generateId();
        }
        req.body.id = newId;
        let checkEmail = json.backend.users.find(user => user.email == email);
        if(checkEmail) {
          res.status(500).json({success: false, code: 500, message: "Email address already used!"});
          return;
        }
        let checkUsername = json.backend.users.find(user => user.username == username);
        if(checkUsername) {
          res.status(500).json({success: false, code: 500, message: "Username already exists!"});
          return;
        }
        json.backend.users.push(req.body);
        fs.writeFile("./database/blog.json", JSON.stringify(json), (err) => {
          if (err) {
            throw err;
          }
          fs.appendFile("./logs/serverlog", `New user has been added on: ${time()}\n`, 'utf-8', (err) => {
            if(err) {
                throw err;
            }
                res.send({success: true, code: 200});
            });
          console.log("New user has been added.");
        });
      } catch (error) {
        console.error(error);
      }
    });
  }
  func();
}

function updateUser(updatePart, newValue, id, res) {
  fs.readFile("./database/blog.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file ", err);
      return;
    }
    switch (updatePart) {
      case "password":
        async function call() {
            try {
                const json = JSON.parse(data);
                let oldUser = json.backend.users.find(user => user.id == id);
                let newPassW = await bcrypt.hash(newValue, salt);
                oldUser.password = newPassW;
                fs.writeFile("./database/blog.json", JSON.stringify(json), (err) => {
                  if (err) {
                    throw err;
                  }
                  fs.appendFile("./logs/serverlog", `User ${oldUser.firstname} ${oldUser.lastname}'s password has been changed on: ${time()}\n`, 'utf-8', (err) => {
                    if(err) {
                        throw err;
                    }
                    res.send({success: true, code: 200})
                  });
                });
            } catch (error) {
                console.error(error);
            }
        }
        call();
        break;
      default:
        break;
    }
  });
}

function logUserIn(username, password, res) {
    fs.readFile("./database/blog.json", "utf8", (err, data) => {
        if (err) {
          console.error("Error reading file ", err);
          return;
        }
        async function call() {
            try {
                const json = JSON.parse(data);
                let usernameMatch = json.backend.users.find(user => user.username == username);
                if(!usernameMatch) {
                    res.status(400).json({success: false, message: "Username not found!"});
                    return;
                }
                let psw = usernameMatch.password;
                let passwordMatch = await bcrypt.compare(password, psw);
                if(!passwordMatch) {
                    res.status(400).json({success: false, message: "Wrong password!"});
                    return;
                }else {
                    res.sendFile(path.resolve(__dirname, '../CMS/login/main.html'));
                }
            } catch (error) {
                console.error(error);
            }
        }
        call();
      });
}

// const fs = require('fs');
// fs.rm(path.join(__dirname, "../../example/_123315281_mediaitem123315280.jpg"), (err) => {if(err) console.log(err)} )
module.exports = { logUserIn, updateUser, addNewUser }