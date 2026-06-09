const BaseUrl = "http://Franklin.county";
const getArraySum = (arr) => {
  return arr.reduce((sum, item) => (sum += item), 0);
};

module.exports = {
  url: BaseUrl,
  getSum: getArraySum,
};
