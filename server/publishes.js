Meteor.publish('Lessons', function(userId){
  return Lessons.find({
    owner: userId
  })
});


Meteor.methods({
  'lessons/create': function(userId){
    return Lessons.insert({
      owner: userId,
      title: "New lesson",
      keyframes: [],
      sounds: [],
      labels: [],
      resouces: {},
      publish: false,
      created: new Date()
    });
  },

  'lessons/delete': function(id){
    Lessons.remove({_id: id});
  }
});