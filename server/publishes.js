
Meteor.publish('Lessons', function(userId){
  return Lessons.find({
    userId: userId
  })
});


Meteor.methods({
  'lessons/new': function(userId){
    return Lessons.insert({
      userId: userId,
      title: "New lesson",
      publish: false,
      created: new Date()
    });
  },

  'lessons/delete': function(id){
    Lessons.remove({_id: id});
  }
});