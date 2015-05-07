	// Create a new module
	var myApp = angular.module('myApp', ['ngRoute']);
	 
	 
	// configure existing services inside initialization blocks.
	myApp.config(function($locationProvider,$routeProvider) {
		$routeProvider
		.when('/home', {
		   templateUrl:'partials/home.html',
		   controller:'homeCtrl',
		   resolve:{
						alldata:function(getalldata){
							return getalldata.dataObj;
						}
		          }
		  })
			  
		.when('/html', {
		  templateUrl:'partials/Page_html.html',
		  controller:'htmlCtrl',
		  resolve:{
						alldata:function(getalldata){
							return getalldata.dataObj;
						}
		          }
		  })
			  
		.when('/Miscellaneous', {
		  templateUrl:'partials/Page_misc.html',
		  controller:'miscCtrl',
		  resolve:{
						alldata:function(getalldata){
							return getalldata.dataObj;
						}
		          }
		  })
		  
			  
		.when('/Browsers', {
		  templateUrl:'partials/Page_browser.html',
		 controller:'browserCtrl',
		 resolve:{
						alldata:function(getalldata){
							return getalldata.dataObj;
						}
		          }
		  })
			  
		.when('/CSS', {
		  templateUrl:'partials/Page_css.html',
		 controller:'cssCtrl',
		 resolve:{
						alldata:function(getalldata){
							return getalldata.dataObj;
						}
		          }
		  })
		.when('/Javascript', {
		  templateUrl:'partials/Page_js.html',
		  controller:'jsCtrl',
		 resolve:{
						alldata:function(getalldata){
							return getalldata.dataObj;
						}
		          }
		  })
		.when('/search/:param', {
		  templateUrl:'partials/Page_search.html',
		  controller:'searchCtrl',
		  resolve:{
						alldata:function(getalldata){
							return getalldata.dataObj;
						}
		          }
		  })
		.otherwise({
		  redirectTo:'/home'
		});

		
	  // Configure existing providers
	  //$locationProvider.hashPrefix('!');
	});