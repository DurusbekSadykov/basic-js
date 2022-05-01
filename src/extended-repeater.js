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
    newAddition += options.addition + options.additionSeparator
  }
  let lengthAddSeparator = options.additionSeparator.length

  newAddition = newAddition.substring(0, newAddition.length - lengthAddSeparator)

  let newStr = ''
  for (let i = 0; i <= options.repeatTimes; i++) {
    newStr += str + newAddition + options.separator
  }

  let lengthSeperator = options.separator.length
  console.log(lengthSeperator)
  newStr = newStr.substring(0, newStr.length - lengthSeperator)
  return newStr
}

module.exports = {
  repeater
};
