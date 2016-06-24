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
})

// 列表控制器
.controller('personList',function($scope,$http){
	$http.get('js/data.json').success(function(data){
		$scope.lists = data.artists;
		$scope.moveItem = function(item,formIndex,toIndex){
			$scope.lists.splice(formIndex,1);
			$scope.lists.splice(toIndex,0,item);
		};
		$scope.onItemDelete = function(item){
			$scope.lists.splice($scope.lists.indexOf(item),1)
		};
	});
});



