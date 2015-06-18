var app=angular.module("myapp",['ngRoute']);
app.controller('homectrl',function($scope){
	
	$scope.x="Good Morning";
	$scope.A=false;
	$scope.B=true;
$scope.ok=function(){
	$scope.A=true;
	$scope.B=false;
	
}
});

app.controller('bioctrl',function($scope){
	
	$scope.x="Very";
});

app.controller('contactctrl',function($scope){
	
	$scope.x="Call us ";
	$scope.y="e-mail us ";
});

app.config(function($routeProvider){
	$routeProvider.when('/home',{
		templateUrl:'home.html',
		controller:'homectrl'
	}).when('/bio',{
		templateUrl:'bio.html',
		controller:'bioctrl'
	}).when('/contact',{
		templateUrl:'contact.html',
		controller:'contactctrl'
	}).otherwise({redirectTo: '/home'});
	
});
