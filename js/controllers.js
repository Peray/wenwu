
angular.module('myApp.controllers', [])

.controller("myCtrl1",['$scope','$state','$window',function($scope,$state,$window){
	$scope.backimg = "images/bg6.png";
	var wel_h = $window.innerHeight/2+'px';
	$scope.welheight = wel_h;
}]).controller("myCtrl2",['$scope','$state','$http','$ionicLoading',function($scope,$state,$http,$ionicLoading){
	//login.html
	// $scope.loading = function(){
	//  $ionicLoading.show({
	//    template: '<p>Loading...</p><ion-spinner icon="bubbles" class="spinner-balanced"></ion-spinner>',
	//             animation: 'fade-in',
	//             showBackdrop: true,
	//             maxWidth: 500,
	//             showDelay: 100
	//  });
	// }

}]).controller("myCtrl3",['$scope','$state','$http','$ionicLoading','$stateParams',function($scope,$state,$http,$ionicLoading,$stateParams){
	
	//loading.......
	$ionicLoading.show({
		template: '<p>Loading...</p><ion-spinner icon="bubbles" class="spinner-balanced"></ion-spinner>',
		animation: 'fade-in',
		showBackdrop: true,
		maxWidth: 500,
		showDelay: 100
	});

	//ajax
	$http({
		method: 'post',
		url: 'version.json'
	}).then(function successCallback(response) {
			$ionicLoading.hide();
			$scope.dataset = response.data.dataset;
			// //页面传参
			// var param=$stateParams.relicId;
			// $scope.imgObj={};
			// for(var i in $scope.dataset){
			// 	if($scope.dataset[i].id==param){
			// 		$scope.imgObj=$scope.dataset[i];
			// 	}
			// }

			// $scope.imgstate=0;
			// $scope.touch = function(value){
			// 	$scope.imgstate=value;
			// }
			$scope.click = function(x){
				console.log(x.id)
			}

		}, function errorCallback(response) {
			alert("error")		 
	})

}]).controller("myCtrl4",['$scope','$state','$window',function($scope,$state,$window){
	//map.html
	var body_h =$window.innerHeight+'px';
	$scope.mapheight=body_h; 

}]).controller("myCtrl5",['$scope','$state','$stateParams','$ionicModal','$http','$ionicLoading',function($scope,$state,$stateParams,$ionicModal,$http,$ionicLoading){
	
	//loading.......
	$ionicLoading.show({
		template: '<p>Loading...</p><ion-spinner icon="bubbles" class="spinner-balanced"></ion-spinner>',
		animation: 'fade-in',
		showBackdrop: true,
		maxWidth: 500,
		showDelay: 100
	});

	//ajax
	$http({
		method: 'post',
		url: 'version.json'
	}).then(function successCallback(response) {
			$ionicLoading.hide();
			$scope.dataset = response.data.dataset;
			//页面传参
			var param=$stateParams.relicId;
			$scope.imgObj={};
			for(var i in $scope.dataset){
				if($scope.dataset[i].id==param){
					$scope.imgObj=$scope.dataset[i];
				}
			}
			//过滤
			$scope.func = function(e){
				return e.id<8;
			}
		}, function errorCallback(response) {
			alert("error")		 
	})

	$scope.backurl = "images/dt_w2_10.png";
	$scope.backurl1 = "images/dl_bg_06.png";
	$scope.backtitle = "images/bg3_03.png";

	$ionicModal.fromTemplateUrl('templates/details_content.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	//页面传参第二种方法
	$scope.details = function(){
		var relicId = $stateParams.relicId;
		var contentId = $stateParams.contentId;
		$state.go("details_content", {relicId:relicId,contentId:contentId ,reload: true});

		$scope.modal.show();
	}
	$scope.close = function(){
		$scope.modal.hide();
	}

}]).controller('myCtrl6',['$scope','$state',function($scope,$state){
	

}])