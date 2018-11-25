var moment = require('moment');

var sampleData = {
  "kind": "calendar#events",
  "etag": "\"p32sb5sutvnnts0g\"",
  "summary": "Main Calendar",
  "updated": "2018-11-25T16:39:21.203Z",
  "timeZone": "America/New_York",
  "accessRole": "owner",
  "defaultReminders": [],
  "nextPageToken": "CkkKO183NTI0YWUxcDZrczNhYjlrNjhyNDJiOWs2cDMzY2JhMTY1MGoyYmExOGwxazZnOWc2cDBrY2gxcDY0GAEggIDAmu-xy84UGg0IABIAGLiy8939794C",
  "items": [{
      "kind": "calendar#event",
      "etag": "\"2611121640000000\"",
      "id": "1juaruvhc6c9otdkks6jfll9s0",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=MWp1YXJ1dmhjNmM5b3Rka2tzNmpmbGw5czAgbWFyY29wb2xvZmxAbQ",
      "created": "2011-05-15T17:24:55.000Z",
      "updated": "2011-05-16T15:47:00.000Z",
      "summary": "End of School Party",
      "location": "Mark's House",
      "creator": {
        "email": "marcopolofl@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "marcopolofl@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2011-05-15T13:30:00-04:00"
      },
      "end": {
        "dateTime": "2011-05-15T15:30:00-04:00"
      },
      "iCalUID": "1juaruvhc6c9otdkks6jfll9s0@google.com",
      "sequence": 0,
      "attendees": [{
          "email": "spirosn@megatechnologiesinc.com",
          "responseStatus": "accepted"
        },
        {
          "email": "marcopolofl@gmail.com",
          "organizer": true,
          "self": true,
          "responseStatus": "accepted"
        },
        {
          "email": "jennyspiros@bellsouth.net",
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
      "id": "fi3tqapi94pe8gvj8rcmlitq6k",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=ZmkzdHFhcGk5NHBlOGd2ajhyY21saXRxNmsgbWFyY29wb2xvZmxAbQ",
      "created": "2012-01-06T00:55:31.000Z",
      "updated": "2012-01-06T16:45:51.000Z",
      "summary": "Playdate w/ Jack",
      "location": "My House",
      "creator": {
        "email": "marcopolofl@gmail.com",
        "self": true
      },
      "organizer": {
        "email": "marcopolofl@gmail.com",
        "self": true
      },
      "start": {
        "dateTime": "2011-05-15T11:00:00-05:00"
      },
      "end": {
        "dateTime": "2011-05-15T15:00:00-05:00"
      },
      "iCalUID": "fi3tqapi94pe8gvj8rcmlitq6k@google.com",
      "sequence": 0,
      "attendees": [{
          "email": "marcopolofl@gmail.com",
          "organizer": true,
          "self": true,
          "responseStatus": "accepted"
        },
        {
          "email": "jcdenwood@gmail.com",
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
      "id": "5b2eoc8gv1n5c9lpo880vv0mvs",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=NWIyZW9jOGd2MW41YzlscG84ODB2djBtdnMgbWFyY29wb2xvZmxAbQ",
      "created": "2012-02-06T00:04:20.000Z",
      "updated": "2014-09-23T20:35:54.172Z",
      "summary": "Marco's Gaming Corner Meeting",
      "description": "Conratulations!!! You are now a member of Marco's Gaming Corner!!!\n \n \nIs this data correct, just to be sure:\n \nFirst Name: Jennifer\nLast Name: Nifakos\nAddress: 2515 Red Maple Pl.\nCity/State/Zip: Melbourne FL 32935\nDo you like video games: sort of\nyour ways of communication: E-mail, Skype, Mail, Person, and Phone.\n \n \n \n There will be a meeting next Saturday\n\n\n\nMarco's Gaming Corner Meeting\n\n\nWhen\nSat, March 26, 5:00pm – 5:30pm GMT-04:00\\t\n\nWhere\nMarko's House \\t\n\nWho\n•\\t\nMark Nifakos\n•\\t \njennyspiros@bellsouth.net\n, you will be notified when a time has been scheduled\n \nThank You for joining.\n \nWe need your E-mail Address as well and we won't send you any newsletters. \n \nThank You, Marco's Gaming Corner",
      "location": "Marko's House",
      "creator": {
        "email": "marcopolofl@gmail.com",
        "displayName": "Mark Nifakos",
        "self": true
      },
      "organizer": {
        "email": "marcopolofl@gmail.com",
        "displayName": "Mark Nifakos",
        "self": true
      },
      "start": {
        "dateTime": "2011-03-26T17:00:00-04:00"
      },
      "end": {
        "dateTime": "2011-03-26T17:30:00-04:00"
      },
      "iCalUID": "5b2eoc8gv1n5c9lpo880vv0mvs@google.com",
      "sequence": 0,
      "reminders": {
        "useDefault": true
      }
    },
    {
      "kind": "calendar#event",
      "etag": "\"2823009108344000\"",
      "id": "82ghod2irpn8246584f0j2uq28",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=ODJnaG9kMmlycG44MjQ2NTg0ZjBqMnVxMjggbWFyY29wb2xvZmxAbQ",
      "created": "2013-04-04T17:20:40.000Z",
      "updated": "2014-09-23T20:35:54.172Z",
      "summary": "Easter Egg Hunt",
      "creator": {
        "email": "marcopolofl@gmail.com",
        "displayName": "Mark Nifakos",
        "self": true
      },
      "organizer": {
        "email": "marcopolofl@gmail.com",
        "displayName": "Mark Nifakos",
        "self": true
      },
      "start": {
        "dateTime": "2013-03-23T08:30:00-04:00"
      },
      "end": {
        "dateTime": "2013-03-23T14:00:00-04:00"
      },
      "transparency": "transparent",
      "iCalUID": "82ghod2irpn8246584f0j2uq28@google.com",
      "sequence": 1,
      "reminders": {
        "useDefault": true
      }
    },
    {
      "kind": "calendar#event",
      "etag": "\"2823009108344000\"",
      "id": "_68q44d9h8cqj2ba28gp3ab9k8gojgba28crkcb9j60qj8g9m6t0j8c9p8o",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=XzY4cTQ0ZDloOGNxajJiYTI4Z3AzYWI5azhnb2pnYmEyOGNya2NiOWo2MHFqOGc5bTZ0MGo4YzlwOG8gbWFyY29wb2xvZmxAbQ",
      "created": "2013-07-09T00:47:59.000Z",
      "updated": "2014-09-23T20:35:54.172Z",
      "summary": "Jonathan Comes Over",
      "location": "My House",
      "creator": {
        "email": "marcopolofl@gmail.com",
        "displayName": "Mark Nifakos",
        "self": true
      },
      "organizer": {
        "email": "marcopolofl@gmail.com",
        "displayName": "Mark Nifakos",
        "self": true
      },
      "start": {
        "dateTime": "2013-07-11T14:00:00-04:00"
      },
      "end": {
        "dateTime": "2013-07-11T16:30:00-04:00"
      },
      "iCalUID": "24B51C51-BD25-4D18-BC7F-3054A67A419F",
      "sequence": 7,
      "reminders": {
        "useDefault": true
      }
    }
  ]
};

function organizeByDate(data) {
  var events = data.items;
  var organizedEvents = [];
  events.forEach(function(event) {
    var dateString = moment(event.start.dateTime).format('DDMMYYYY');
    console.log('dateString ' + dateString);
    console.log(organizedEvents.filter(function(dateObject) { if (dateObject.date == dateString) { return true } })[0]);
    if (organizedEvents.filter(function(dateObject) { if (dateObject.date == dateString) { return true } }).length === 0 ) {
      organizedEvents.push({ date: dateString, events: [event] })
      console.log('new date');
    } else {
      organizedEvents.filter(function(dateObject) { if (dateObject.date == dateString) { return true } })[0].events.push(event);
      console.log('existing date');
    }
    console.log('--------------')
  });
  console.log(organizedEvents.length);
  console.log(organizedEvents);
}

organizeByDate(sampleData);
