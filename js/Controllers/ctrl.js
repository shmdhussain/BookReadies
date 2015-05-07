myApp.controller('parentCtrl',['$scope','$window','$location',function ($scope,$window,$location) {







}]);



myApp.controller("homeCtrl", function($scope, $routeParams, alldata) {
	
	console.log("homeCtrl");
	
	var uniquetopic = {};
	var distincttopic = [];
	angular.forEach(alldata.data.data, function(value, key) {
		if( typeof(uniquetopic[value.topic]) == "undefined"){
		  distincttopic.push(value.topic);
		}
		uniquetopic[value.topic] = 0;
	});
	
	$scope.topicData=distincttopic.sort();

});



myApp.controller("htmlCtrl", function($scope, $routeParams,alldata) {

	var uniquetopic = {};
	var distincttopic = [];
	$scope.pagetitle="BookReadies";
	$scope.pagedesc="A collection of useful pages from the internet about the front end technoliges HTML, Javascript, Browsers and Devices and more...";
	angular.forEach(alldata.data.data, function(value, key) {
		if( typeof(uniquetopic[value.topic]) == "undefined"){
		  distincttopic.push(value.topic);
		}
		uniquetopic[value.topic] = 0;
	});
	
	$scope.topicData=distincttopic.sort()
	
	console.log("htmlCtrl");
	
	$scope.topicData=[];
	$scope.subtopicData=[];

});

myApp.controller("miscCtrl", function($scope, $routeParams,alldata) {
	
	console.log("htmlCtrl");
	
	$scope.topicData=[];
	$scope.subtopicData=[];

});
myApp.controller("browserCtrl", function($scope, $routeParams,alldata) {
	
	console.log("browserCtrl");
	
	$scope.topicData=[];
	$scope.subtopicData=[];

});
myApp.controller("cssCtrl", function($scope, $routeParams,alldata) {
	
	console.log("cssCtrl");
	
	$scope.topicData=[];
	$scope.subtopicData=[];

});
myApp.controller("jsCtrl", function($scope, $routeParams,alldata) {
	
	console.log("jsCtrl");
	
	$scope.topicData=[];
	$scope.subtopicData=[];

});
myApp.controller("searchCtrl", function($scope, $routeParams,alldata) {

	console.log("searchCtrl");
    $scope.param = $routeParams.param;
	$scope.pagedata=[];
	if($scope.param=='html'){
		angular.forEach(alldata.data.data, function(value, key) {
			if(value.topic=='html'){
				$scope.pagedata.push(value);
			}
		});
	}
	else if($scope.param=='misc'){
		angular.forEach(alldata.data.data, function(value, key) {
			if(value.topic=='Miscellaneous'){
				$scope.pagedata.push(value);
			}
		});
	}
	else if($scope.param=='css'){
		angular.forEach(alldata.data.data, function(value, key) {
			if(value.topic=='CSS'){
				$scope.pagedata.push(value);
			}
		});
	}
	else if($scope.param=='js'){
		angular.forEach(alldata.data.data, function(value, key) {
			if(value.topic=='Javascript'){
				$scope.pagedata.push(value);
			}
		});
	}
	else if($scope.param=='browser'){
		angular.forEach(alldata.data.data, function(value, key) {
			if(value.topic=='Browsers'){
				$scope.pagedata.push(value);
			}
		});
	}
	else{
		$scope.pagedata=alldata.data.data;
	}
	
})
