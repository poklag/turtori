_app.controller('Home', [
  '$scope',

  function HomeController(scope){
    scope.slides = [
      { image: 'http://placehold.it/1140x480/780000' },
      { image: 'http://placehold.it/1140x480/FF00CC' },
      { image: 'http://placehold.it/1140x480/CCCC00' },
      { image: 'http://placehold.it/1140x480/0066FF' }
    ];
  }
]);