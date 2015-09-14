_app.controller('Lesson/Edit', [
  '$scope',
  '$meteor',
  '$routeParams',

  function LessonEditController(scope, meteor, params){

    scope.lesson = {
      name: ''
    };
  }
]);