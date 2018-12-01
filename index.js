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
    var startDateString = moment(event.start.dateTime).format('DDMMYYYY');
    var endDateString = moment(event.end.dateTime).format('DDMMYYYY');

    if (datesArray.filter(function(dateObject) { if (dateObject.date == startDateString) { return true } }).length === 0 ) {
      datesArray.push({ date: startDateString, events: [event] });
    } else {
      datesArray.filter(function(dateObject) { if (dateObject.date == startDateString) { return true } })[0].events.push(event);
    }
    if (startDateString !== endDateString) {
      if (datesArray.filter(function(dateObject) { if (dateObject.date == endDateString) { return true } }).length === 0 ) {
        datesArray.push({ date: endDateString, events: [event] });
      } else {
        datesArray.filter(function(dateObject) { if (dateObject.date == endDateString) { return true } })[0].events.push(event);
      }
    }
  });

  return datesArray;
}
