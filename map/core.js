function multiplyBy10 (array) {
 // your code here
  var times10 = array.map(function(number) {
    return number * 10;
  })
  return times10;
};

function shiftRight(array) {
  return array.map(function(val,index) {
    if (index === 0) {
      return array[array.length-1];
    }
    else if (index === array.length-1) {
      return array[0];
    }
    else {
      return array[index]
    }
  });
}

shiftRight([{ name: '' }, 10, "left-side"]);

function onlyVowels (array) {
 // your code here
  // return array.map(function(index) {
  // return   /[aeiou]/.text(chr.toLowerCase()
  // })
};
// onlyVowels(['average', 'exceptional', 'amazing']);
// let objs = [{name:''} , 10, "left-side"];

function doubleMatrix (array) {
 // your code here
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
