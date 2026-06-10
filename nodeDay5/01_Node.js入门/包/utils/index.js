const obj = require("./lib/arr.js");
const { checkUser, checkPWD } = require("./lib/str.js");

console.log({ checkUser, checkPWD });

module.exports = {
  obj,
  checkPWD,
  checkUser,
};
