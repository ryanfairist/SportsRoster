app.directive('sport',function() {
  return{
    restrict:'E',
    scope:{
      info: '=info'
    },
    templateUrl:"js/directives/sport.html"
  }
  });