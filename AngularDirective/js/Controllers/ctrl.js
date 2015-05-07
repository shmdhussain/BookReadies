	myApp.controller('parentCtrl',['$scope','$window','$location',function ($scope,$window,$location) {


	}]);

	myApp.directive('mytoggle',function(){
		console.log("inside dir");
		//ALERTS	
		return function() {
			jQuery(".toggle").click(function(e) {
			  jQuery(".show").slideToggle("slow");
			});
		};
	});
	
