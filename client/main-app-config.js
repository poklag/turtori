_app.config([
    '$routeProvider',
    '$locationProvider',

    function config(route, location){

      location.html5Mode(true);

      route.when('/', {
        templateUrl: 'client/views/home/home.ng.html',
        controller: 'Home'
      })
      // .when('/lessons', {
      //   templateUrl: 'client/views/lesson/index.ng.html',
      //   controller: 'Lesson/Index'
      // })
      .when('/lesson/:id/edit', {
        templateUrl: 'client/views/lesson/edit.ng.html',
        controller: 'Lesson/Edit'
      });
    }
  ]).run(function(){
    console.log('Tutori Engine 0.1');

    // Meteor.subscribe("TransferItems", Meteor.userId());
    // Meteor.subscribe("AvailableUsers");
    // Meteor.subscribe("Cards");

    FastClick.attach(window.document.body);
  });
