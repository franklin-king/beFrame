const getArraySum = (arr) => {
  return arr.reduce((sum, item) => (sum += item), 0);
};

module.exports = {
  getSum: getArraySum,
};
