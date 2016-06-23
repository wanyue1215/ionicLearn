angular.module('starter.controllers', [])

.controller('main', function($scope) {
	console.warn("ssss");
	$scope.title = "test";
})

.controller('home', function($scope) {
	console.warn("home");
	$scope.title = "test";
})

.controller('person', function($scope) {
	console.warn("person");
	$scope.title = "test";
})

.controller('calendar', function($scope) {
	console.warn("calendar");
	$scope.title = "test";
});
