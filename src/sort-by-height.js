const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let digitOne = [];
  let resultArr = [];
  let length = arr.length
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      digitOne.push(i);
    }
  }
  let counter = 0

  console.log(digitOne)
  for (let i = 0; i < digitOne.length; i++) {
    arr.splice(digitOne[i] - counter, 1);
    counter++;
  }

  let arr1 = arr.sort((a, b) => a - b);
  let compareOne = 0
  let compareOther = 0
  for (let i = 0; i < length; i++) {
    if (digitOne[compareOne] == i) {
      resultArr.push(-1);
      compareOne++
    } else {
      resultArr.push(arr1[compareOther]);
      compareOther++
    }
  }



  return resultArr
}
module.exports = {
  sortByHeight
};
