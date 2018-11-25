
# Google Calendar Event List Sort

A small library that sorts a list of events in Google Calendar by date, which makes it easy to query for all the events on a particular date.

## Installation

    npm i google-calendar-by-date

## Usage

Let sampleData be an API response from [calendar.events.list](https://developers.google.com/calendar/v3/reference/events/list#try-it) as an Object. There is valid sample data in the test/test.js file.

    var googleCalendarListSort = require('google-calendar-by-date');

    var eventsByDate = googleCalendarListSort.organizeByDate(sampleData);

	console.log(eventsByDate);
	/* => [
	{
		date: '23032013', // Format: DDMMYYYY      DD = DAY    MM = MONTH    YYYY = YEAR
		events: [
			{
				id: 'sampleId1234',
				summary: 'Sample Event 1',
				start: {
				    dateTime: "2013-03-23T08:30:00-04:00"
			    },
			}
		]
	},
	{
		date: '24032013',
		events: [
			{
				id: 'sampleId12345',
				summary: 'Sample Event 2',
				start: {
				    dateTime: "2013-03-24T08:30:00-04:00"
			    },
			}
		]
	}
	]
	*/

Query dates using Array.filter().


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
