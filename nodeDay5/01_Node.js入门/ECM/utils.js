const BaseUrl = "http://Franklin.county";
const getArraySum = (arr) => {
  return arr.reduce((sum, item) => (sum += item), 0);
};

export default {
  url: BaseUrl,
  getSum: getArraySum,
};
