const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strNum = String(n);
  let strArr = strNum.split('')
  let checkArr = [];



  for (let i = 0; i < strArr.length; i++) {
    let a = strNum.slice(0, i) + strNum.slice(i + 1, strNum.length)
    checkArr.push(+a)
  }
  checkArr.sort((a, b) => b - a);

  return checkArr[0]
}

module.exports = {
  deleteDigit
};
