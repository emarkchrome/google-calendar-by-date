var moment = require('moment');

/**
 * Groups Google Calendar API Event List Responses by date
 * @param {object} data
 * @return {array}
 */
exports.organizeByDate = function(data) {
  if (data === '' || data === null || data === undefined) {
    throw new Error('No parameter was entered.')
  } else if (typeof data !== 'object') {
    throw new Error('Parameter is not an object.')
  }
  var events = data.items;
  var datesArray = [];
  events.forEach(function(event) {
    var dateString = moment(event.start.dateTime).format('DDMMYYYY');
    if (datesArray.filter(function(dateObject) { if (dateObject.date == dateString) { return true } }).length === 0 ) {
      datesArray.push({ date: dateString, events: [event] })
    } else {
      datesArray.filter(function(dateObject) { if (dateObject.date == dateString) { return true } })[0].events.push(event);
    }
  });

  return datesArray;
}
