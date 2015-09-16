Lessons = new Mongo.Collection('Lessons');
Lessons.allow({
  insert: function(userId, lesson){
    return userId && lesson.owner === userId;
  },

  update: function(userId, lesson, fields, modifier){
    return userId && lesson.owner == userId;
  },

  remove: function(userId, lesson){
    return userId && lesson.owner == userId;
  }
});

Meteor.isClient && Meteor.subscribe("Lessons", Meteor.userId());