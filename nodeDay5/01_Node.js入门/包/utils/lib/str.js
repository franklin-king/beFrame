const checkName = (username) => {
  return username.length >= 8;
};

const checkPassword = (password) => {
  return password.length >= 6;
};

module.exports = {
  checkUser: checkName,
  checkPWD: checkPassword,
};
