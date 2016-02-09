app.directive('sport',function() {
  return{
    restrict:'E',
    scope:{
      info: '='
    },
    templateUrl:"js/directives/sport.html"
  }
  });
