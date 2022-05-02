const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Array = s1.split("");
  let s2Array = s2.split('');
  let checkArr, secondArr;

  if (s1Array.length >= s2Array.length) {
    checkArr = s1Array;
    secondArr = s2Array;
  } else {
    checkArr = s2Array
    secondArr = s1Array;
  }
  let resultArr = [];


  for (let i = 0; i < checkArr.length; i++) {
    if (secondArr.includes(checkArr[i])) {
      for (let j = 0; j < secondArr.length; j++) {
        if (checkArr[i] == secondArr[j]) {
          resultArr.push(checkArr[i])
          secondArr.splice(j, 1)
          console.log(secondArr);
          j = secondArr.length
        }
      }
    }
  }

  return resultArr.length
}

module.exports = {
  getCommonCharacterCount
};
