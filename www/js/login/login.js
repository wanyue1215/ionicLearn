
angular.module('starter.logins', [])

.controller('login', function($scope,$http,$ionicLoading,$ionicPopup) {
	$scope.goLogin = function(username,password){
		var msg=""

		if ( (username == undefined || username == "")  && (password=="" || password==undefined) ) {
			msg="用户名和密码不能为空";
		} else if(username == ""||username == undefined){
			msg = "用户名不能为空";
		} else if (password==""||password == undefined) {
			msg = "密码不能为空";
		}

		if(msg!=""){
			$ionicPopup.alert({
				title: msg,
	   			template: '确定'
			 });
			return;	
		}
		
		$ionicLoading.show({
	    	content: 'Loading',
	    	animation: 'fade-in',
	    	showBackdrop: true,
	    	maxWidth: 200,
	    	showDelay: 0
	  	});

		$http.post("http://www.test.com/Api/login").success(function(response){
			$scope.res = response ;
		    $ionicLoading.hide();
		});
		// window.location.href = "#/main";
	}
})



// .controller('goLogin', function($scope) {
// 	$scope.goLogin = function(){
// 		// $scope.test = "ss";
// 		window.location.href = "#/main";
// 	}
// });