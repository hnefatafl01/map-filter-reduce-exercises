function onlyEven (array) {
  // your code here
  return array.filter(function(index) {
    if (index % 2 === 0) {
      return index;
    }
  })
};

function onlyOneWord (array) {
  // your code here
  // return array.filter(function(index) {
  //   var single;
  //   for (var i = 0; i < index.length; i++) {
  //     if (index[i] === " ") {
  //       single = index;
  //       return single;
  //     } else {
  //       return null;
  //     }
  //   }
  //   if (single) {
  //     return single;
  //   }
  // })
};

function positiveRowsOnly (array) {
  //your code here
  //iterate through array
  //filter each index array for positives
};



function allSameVowels (array) {
  // your code here
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
