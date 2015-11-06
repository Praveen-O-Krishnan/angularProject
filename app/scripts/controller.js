

// jshint devel:true
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {
        template: 'Welcome!'
      })
      .when('/customers', {
        templateUrl: 'customers.html'
      })
      .when('/orders', {
        templateUrl: 'orders.html'
      })
      .when('/parallax', {
        templateUrl: 'parallax.html'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);

app.controller('person', ['$scope', '$http', function($scope, $http, $location) {
    $http.get('person-info.json')
      .success(function(response) {
        $scope.persons = response.records;
      });

    $scope.addNew = function() {
      $scope.persons.push(
        {
          fname: $scope.newFname.fname,
          lname: $scope.newLname.lname,
          city: $scope.newCity.city
        });
    }
}]);


app.controller('mainCntrl', ['$scope', '$location', function($scope, $location) {
  $scope.isActive = function(selectedMenu) {
    var active = (selectedMenu === $location.path());
    return active;
  }
}]);
