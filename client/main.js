import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);

    Meteor.call('sendEmail',{
    to: 'ryan.braving@gmail.com',
    from: 'no-reply@where-ever.com',
    subject: 'I really like sending emails with Mailgun!',
    text: 'Mailgun is totally awesome for sending emails!',
    html: 'With meteor it&apos;s easy to set up <strong>HTML</strong> <span style="color:red">emails</span> too.'
  });
  },
});

