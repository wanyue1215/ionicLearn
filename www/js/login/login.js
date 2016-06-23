
angular.module('starter.logins', [])

.controller('login', function($scope) {
	$scope.goLogin = function(){
		// window.location.href = "#/login";
	}
})

.controller('goLogin', function($scope) {
	$scope.goLogin = function(){
		window.location.href = "#/main";
	}
});