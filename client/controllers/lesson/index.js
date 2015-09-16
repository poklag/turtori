_app.controller('Lesson/Index', [
  '$scope',
  '$meteor',
  '$timeout',
  '$location',
  '$routeParams',

  function LessonIndexController(scope, meteor, timeout, location, params){

    scope.lessons = meteor.collection(Lessons);

    scope.new = function(){
      Meteor.call('lessons/create', Meteor.userId(), function(error, id){
        timeout(function(){
          location.path('/lesson/' + id + '/edit');
        });
      });
    };

  }
]);