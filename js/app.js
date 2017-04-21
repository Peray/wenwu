/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-02 13:00:13
 * @version $Id$
 */

 var app = angular.module("myApp",['ionic','ngSanitize','myApp.controllers']);
//  app.filter('trustHtml', function ($sce) {
// 	return function (input) {
// 		return $sce.trustAsHtml(input);
// 	}
// })
app.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})
.service('service',function(){
	
})
.directive("appMap", function () {  
	return {  
		restrict: "E",  
		replace: true,  
		template: "<div id='allMap'></div>",  
		scope: {  
			center: "=",        // Center point on the map (e.g. <code>{ latitude: 10, longitude: 10 }</code>).  
			markers: "=",       // Array of map markers (e.g. <code>[{ lat: 10, lon: 10, name: "hello" }]</code>).  
			width: "@",         // Map width in pixels.  
			height: "@",        // Map height in pixels.  
			zoom: "@",          // Zoom level (one is totally zoomed out, 25 is very much zoomed in).  
			zoomControl: "@",   // Whether to show a zoom control on the map.  
			scaleControl: "@",   // Whether to show scale control on the map.  
			address:"@"  
		},  
		link: function (scope, element, attrs) {  
			var map;  
			// 百度地图API功能  
			map = new BMap.Map("allMap");  
			map.addControl(new BMap.ZoomControl());  
			// 创建地址解析器实例  
			 var myGeo = new BMap.Geocoder();  
			// 将地址解析结果显示在地图上,并调整地图视野  
			myGeo.getPoint(scope.address, function(point){  
					if (point) {  
							map.centerAndZoom(point, 16);  
							map.addOverlay(new BMap.Marker(point));  
					}  
			}, "");  
		}  
	};  
}) 
.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
		// app.loadControllerJs = function(controllerJs){
		//   return function($rootScope, $q){
		//     var def = $q.defer(),deps=[];
		//     angular.isArray(controllerJs) ? (deps = controllerJs) : deps.push(controllerJs);
		//     require(deps,function(){
		//       $rootScope.$apply(function(){
		//         def.resolve();
		//       });
		//     });
		//     return def.promise;
		//   };
		// }








	$stateProvider
		.state('index',{
			url:'/index',
			templateUrl:'index.html'
		})
		.state('home',{
			url:'/home',
			templateUrl:'templates/home.html',
			controller:'myCtrl1'
		})
		.state('login',{
			url:'/login',
			templateUrl:'templates/login.html',
			controller:'myCtrl2'
		})
		.state('main',{
			url:'/main',
			templateUrl:'templates/main.html',
			controller:'myCtrl3'
		})
		.state('map',{
			url:'/map',
			templateUrl:'templates/map.html',
			controller:'myCtrl4',
			// resolve:{
	 //                		deps: app.loadControllerJs('./controllers/map')
	 //            	}
		})
		.state('relic',{
			url:'/relic',
			templateUrl:'templates/relic.html',
			controller:'myCtrl5'
		})
		.state('details',{
			url:'/relic/:relicId',
			templateUrl:'templates/details.html',
			controller:'myCtrl5'
		})
		.state('details_content',{
			url:'/relic/:relicId/:contentId',
			templateUrl:'templates/details_content.html',
			controller:'myCtrl5'
		})
		
	$urlRouterProvider.otherwise('/home');
	//tab居下
	 $ionicConfigProvider.tabs.position('bottom');
	 //android导航栏标题居中
	 $ionicConfigProvider.platform.android.navBar.alignTitle('center');

})