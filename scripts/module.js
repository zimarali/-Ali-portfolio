var app = angular.module('myPort', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html'
    })
    .when('/projects', {
      templateUrl: 'views/projects.html'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html'
    })
    .when('/about', {
      templateUrl: 'views/about.html'
    })
    .otherwise({redirectTo:'/'});

$locationProvider.hashPrefix("");

});
