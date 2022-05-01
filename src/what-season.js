const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let month = date.getMonth();
  let year = date.getFullYear();
  let day = date.getDay();
  let checkDay = (new Date(year, (month + 1), 0)).getDate()
  console.log(month)
  console.log(year)
  console.log(day)
  console.log(checkDay)

  if (day > checkDay || day < 0) {
    return 'Invalid date!'
  }

  let checkDate = new Date(date)
  if (checkDate == 'undefined') {
    return 'Unable to determine the time of year!'
  }
  if (month >= 2 && month < 5) {
    return 'spring'
  } else if (month >= 5 && month < 8) {
    return 'summer'
  } else if (month >= 8 && month < 11) {
    return 'autumn'
  } else {
    return 'winter'
  }
}

module.exports = {
  getSeason
};
