function onlyEven (array) {
  // your code here
  return array.filter(function(index) {
    if (index % 2 === 0) {
      return index;
    }
  })
};

function onlyOneWord (array) {
  return array.filter((element, index) => {
    let space;
    for (var i = 0; i < element.length; i++) {
      if (element[i] === " ") {
        return space;
      }
    }
    if(!space){
      return element
    }
  })
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
