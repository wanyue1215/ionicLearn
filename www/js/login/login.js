
angular.module('starter.logins', [])

.controller('login', function($scope) {
	$scope.goLogin = function(){
		$scope.test = "test";
		window.location.href = "#/main";
	}
})

// .controller('goLogin', function($scope) {
// 	$scope.goLogin = function(){
// 		// $scope.test = "ss";
// 		window.location.href = "#/main";
// 	}
// });