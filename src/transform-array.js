const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    return "'arr' parameter must be an instance of the Array!"
  }
  let result = [];
  let checkArr = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  let intermediateArr = arr;
  let discardNext = '--discard-next';
  let discardPrev = '--discard-prev';
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';
  let counter = 0;

  for (let i = 0; i < intermediateArr.length; i++) {
    if (intermediateArr[i] == discardNext && i != intermediateArr.length - 1) {
      intermediateArr.splice(i, 1);
    } else if (intermediateArr[i] == discardPrev && i != 0) {
      result.pop()
    } else if (intermediateArr[i] == doubleNext && i != (intermediateArr.length - 1)) {
      result.push(intermediateArr[i + 1]);
    } else if (intermediateArr[i] == doublePrev && i != 0) {
      result.push(intermediateArr[i - 1]);

    } else {
      result.push(intermediateArr[i])
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (checkArr.includes(result[i])) {
      result.splice(i, 1)
    }
  }

  return result
}

module.exports = {
  transform
};
