# Google Calendar Event List Sort

A small library that sorts a list of events in Google Calendar by date, which makes it easy to query for all the events on a particular date.

## Installation

  `npm install gc-list-sort`

## Usage

    var googleCalendarListSort = require('gc-list-sort');

    var sampleData = {
      "kind": "calendar#events",
      "etag": "\"p32sb5sutvnnts0g\"",
      "summary": "Main Calendar",
      "updated": "2018-11-25T16:39:21.203Z",
      "timeZone": "America/New_York",
      "accessRole": "owner",
      "defaultReminders": [],
      "nextPageToken": "sampletoken_fjewfewiueowygeugyugawyfuewa",
      "items": [{
          "kind": "calendar#event",
          "etag": "\"2611121640000000\"",
          "id": "1juaruvhc6c9os6jfll9s0",
          "status": "confirmed",
          "htmlLink": "htmlLink",
          "created": "2011-05-15T17:24:55.000Z",
          "updated": "2011-05-16T15:47:00.000Z",
          "summary": "Sample Event 1",
          "location": "",
          "creator": {
            "email": "johndoe@example.com",
            "self": true
          },
          "organizer": {
            "email": "johndoe@example.com",
            "self": true
          },
          "start": {
            "dateTime": "2011-05-15T13:30:00-04:00"
          },
          "end": {
            "dateTime": "2011-05-15T15:30:00-04:00"
          },
          "iCalUID": "sampleId",
          "sequence": 0,
          "attendees": [{
              "email": "johndoe@example.com",
              "responseStatus": "accepted"
            },
            {
              "email": "johndoe@example.com",
              "organizer": true,
              "self": true,
              "responseStatus": "accepted"
            },
            {
              "email": "johndoe@example.com",
              "responseStatus": "needsAction"
            }
          ],
          "guestsCanInviteOthers": false,
          "reminders": {
            "useDefault": true
          }
        },
        {
          "kind": "calendar#event",
          "etag": "\"2651736702000000\"",
          "id": "fi3tqapi94pe8mlitq6k",
          "status": "confirmed",
          "htmlLink": "htmlLink",
          "created": "2012-01-06T00:55:31.000Z",
          "updated": "2012-01-06T16:45:51.000Z",
          "summary": "Sample Event 2",
          "location": "",
          "creator": {
            "email": "johndoe@example.com",
            "self": true
          },
          "organizer": {
            "email": "johndoe@example.com",
            "self": true
          },
          "start": {
            "dateTime": "2011-05-15T11:00:00-05:00"
          },
          "end": {
            "dateTime": "2011-05-15T15:00:00-05:00"
          },
          "iCalUID": "sampleId",
          "sequence": 0,
          "attendees": [{
              "email": "johndoe@example.com",
              "organizer": true,
              "self": true,
              "responseStatus": "accepted"
            },
            {
              "email": "johndoe@example.com",
              "responseStatus": "needsAction"
            }
          ],
          "guestsCanInviteOthers": false,
          "guestsCanSeeOtherGuests": false,
          "reminders": {
            "useDefault": true
          }
        },
        {
          "kind": "calendar#event",
          "etag": "\"2823009108344000\"",
          "id": "5b2eoc8gv1n5c9l0vv0mvs",
          "status": "confirmed",
          "htmlLink": "htmlLink",
          "created": "2012-02-06T00:04:20.000Z",
          "updated": "2014-09-23T20:35:54.172Z",
          "summary": "Sample Event 3",
          "creator": {
            "email": "johndoe@example.com",
            "displayName": "John Doe",
            "self": true
          },
          "organizer": {
            "email": "johndoe@example.com",
            "displayName": "John Doe",
            "self": true
          },
          "start": {
            "dateTime": "2011-03-26T17:00:00-04:00"
          },
          "end": {
            "dateTime": "2011-03-26T17:30:00-04:00"
          },
          "iCalUID": "sampleId",
          "sequence": 0,
          "reminders": {
            "useDefault": true
          }
        },
        {
          "kind": "calendar#event",
          "etag": "\"2823009108344000\"",
          "id": "82ghod2irp6584f0j2uq28",
          "status": "confirmed",
          "htmlLink": "htmlLink",
          "created": "2013-04-04T17:20:40.000Z",
          "updated": "2014-09-23T20:35:54.172Z",
          "summary": "Sample Event 4",
          "creator": {
            "email": "johndoe@example.com",
            "displayName": "jOHN dOE",
            "self": true
          },
          "organizer": {
            "email": "johndoe@example.com",
            "displayName": "jOHN dOE",
            "self": true
          },
          "start": {
            "dateTime": "2013-03-23T08:30:00-04:00"
          },
          "end": {
            "dateTime": "2013-03-23T14:00:00-04:00"
          },
          "transparency": "transparent",
          "iCalUID": "sampleId",
          "sequence": 1,
          "reminders": {
            "useDefault": true
          }
        },
        {
          "kind": "calendar#event",
          "etag": "\"2823009108344000\"",
          "id": "68q44d9h8cqj2ba23ab9k8ba28crkcb9j60qj8g9m6t0j8c9p8o",
          "status": "confirmed",
          "htmlLink": "htmlLink",
          "created": "2013-07-09T00:47:59.000Z",
          "updated": "2014-09-23T20:35:54.172Z",
          "summary": "Sample Event 5",
          "location": "My House",
          "creator": {
            "email": "johndoe@example.com",
            "displayName": "John Doe",
            "self": true
          },
          "organizer": {
            "email": "johndoe@example.com",
            "displayName": "John Doe",
            "self": true
          },
          "start": {
            "dateTime": "2013-07-11T14:00:00-04:00"
          },
          "end": {
            "dateTime": "2013-07-11T16:30:00-04:00"
          },
          "iCalUID": "sampleId",
          "sequence": 7,
          "reminders": {
            "useDefault": true
          }
        }
      ]
    };

    googleCalendarListSort.organizeByDate(sampleData)


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
