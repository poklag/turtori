_app.controller('Lesson/FrameEditor', [
  '$scope',
  '$routeParams',

  function FrameEditorController(scope, params){

    scope.selected_kf_index = 0;

    scope.select_index = function(idx){
      scope.selected_kf_index = idx;
    };

    scope.insert_keyframe = function(at){

      scope.lesson.keyframes.push({
        time: 0.000,
        animations: []
      });

      scope.lesson.save();

    };
  }
]);