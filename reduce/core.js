function sum (array) {
  return array.reduce((acc,val) => {
    return acc + val;
  }, 0)
};

function productAll (array) {
  return array.reduce((acc,val) => {
    return val.reduce((accumulator,current) => {
      return accumulator * current;
    }, acc)
  },1)
};

function objectify (array) {
  // your code here
};

function luckyNumbers (array) {
  // your code here
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
