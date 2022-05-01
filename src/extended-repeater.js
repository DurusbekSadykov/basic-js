const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let newAddition = ''
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    if (i == options.additionRepeatTimes - 1) {
      newAddition += options.addition
    } else {
      newAddition += options.addition + options.additionSeparator
    }
  }

  let newStr = ''
  for (let i = 0; i < options.repeatTimes; i++) {
    if (i == options.repeatTimes - 1) {
      newStr += str + newAddition
    } else {
      newStr += str + newAddition + options.separator
    }
  }
  return newStr
}

module.exports = {
  repeater
};
