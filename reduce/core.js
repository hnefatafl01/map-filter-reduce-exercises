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
  return array.reduce((obj,val) => {
    obj[val[0]] = val[1]
    return obj
  },{})
};

function luckyNumbers (array) {
  return array.reduce((acc,val,idx,arr) => {
    if(idx + 1 === arr.length) {
      console.log(acc);
      console.log( (',and ' + val).toString());
      return acc + (',and ' + val).toString();
    }
      // console.log( ' ' + (val  + ', ').toString());
      return (val  + ', ').toString();

  }, 'Your lucky numbers are: ')
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
