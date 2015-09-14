Lessons = new Mongo.Collection('Lessons');

Meteor.isClient && Meteor.subscribe("Lessons", Meteor.userId());