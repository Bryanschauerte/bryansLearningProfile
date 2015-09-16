var app = angular.module('bryanProfile', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider

    .when('/home', {
       templateUrl:'/routes/home.html'
    })

    .when('/about',{
      templateUrl:'/routes/about.html'

    })
    .when('/projects',{
      templateUrl:'/routes/projects.html'

    })
    .when('/contact',{
      templateUrl:'/routes/contact.html'


    })
.otherwise({redirectTo: '/home'});
  })
