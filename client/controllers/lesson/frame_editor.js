_app.controller('Lesson/FrameEditor', [
  '$scope',
  '$routeParams',

  function FrameEditorController(scope, params){

    scope.selected_kf = null;

    scope.select_kf = function(id){
      scope.selected_kf_id = id;
    };

    scope.delete = function(id){
      if(window.confirm('Sure?')){
          Lessons.update(
            { _id: scope.lesson._id },
            { $pull: { "keyframes": { id: id } } }
          );
      }
    };

    scope.insert_keyframe = function(at){

      scope.lesson.keyframes.push({
        id: Meteor._newid(),
        time: 0.000,
        animations: []
      });

      scope.lesson.save();

    };
  }
]);