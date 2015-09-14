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

    scope.discard = function(){
      scope.lesson.reset();
              location.path('/lessons');
    };
  }
]);