import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.Mailgun.config({
      username: 'postmaster@sandbox16ca40978c4c4a7a94484fe7380f645b.mailgun.org',
      password: '6e87457e3b97d1d6336922c638dcdbd6'
    });
});
