const express = require('express');
const router = express.Router();
const { addNewUser, logUserIn, updateUser } = require('../controllers/users');
router.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../CMS/login/login.html'));
})
router.get('/signup', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../CMS/login/signup.html'));
})
router.post('/signupjs', (req, res) => {
  (async function add() {
      addNewUser(req, res);
  })();
})
router.post('/loginjs', (req, res) => {
  logUserIn(req.body.username, req.body.password, res);
})
router.put('/:id', (req, res) => {
  // updateUser(req.body.updatePart, res)
})

module.exports.router = router;