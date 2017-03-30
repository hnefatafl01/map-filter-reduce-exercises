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
  return array.filter((row, index, array) => {
      let neg = row.some((element) => {
        return element < 0;
      })
      if(!neg) {
        return row;
      }
  })

};

function allSameVowels (array) {
  return array.filter((element) => {
    let vowels = element.match(/[aeiou]/g);
    let same = vowels.every((el, index, array) => {
      return el === array[0]
    })
    if(same) {
      return element
    }
  })
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
