_app.controller('Lesson/Edit', [
  '$scope',
  '$meteor',
  '$window',
  '$timeout',
  '$location',
  '$routeParams',

  function LessonEditController(scope, meteor, window, timeout, location, params){

    scope.lesson = meteor.object(Lessons, params.id, false);

    scope.save = function(){
      scope.lesson.save();
    }

    scope.delete = function(){

      if(window.confirm('Sure?')){

        Meteor.call('lessons/delete', scope.lesson._id, function(error){

          if(!error){
            timeout(function(){
              location.path('/lessons');
            });
          }else{
            console.log(error);
          }
        });
      }
    };

    scope.publish = function(isPublish){
      scope.lesson.publish = isPublish || true;
      scope.save();
    };

    scope.discard = function(){
      scope.lesson.reset();
              location.path('/lessons');
    };
  }
]);