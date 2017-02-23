var app = angular.module('myMod', ['ngRoute']);


app.config(function($routeProvider){
	$routeProvider
	.when('/login',{
		templateUrl: 'partials/login.html'
	})
	.when('/dash',{
		templateUrl: 'partials/dash.html'
	})
	.when('/addquote',{
		templateUrl: 'partials/addquote.html'
	})
	.when('/showall',{
		templateUrl: 'partials/showall.html'
	})
	.when('/showone/:author',{
		templateUrl: 'partials/showone.html'
	})
	.otherwise({
		redirectTo: '/login'
	})
})
