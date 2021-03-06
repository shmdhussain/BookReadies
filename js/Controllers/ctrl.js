myApp.controller('parentCtrl',['$scope','$window','$location',function ($scope,$window,$location) {







}]);


myApp.controller("headCtrl", function($scope, $routeParams,mydata) {
	console.log("headCtrl");
	mydata.gettopicdata().then(function(data){
		$scope.topicData=data;
	});
});


myApp.controller("homeCtrl", function($scope, $routeParams, mydata,$location) {
	console.log("homeCtrl");
	$scope.noOfLinks=[];
	mydata.gettopicdata().then(function(data){
		$scope.topicData=data;
		angular.forEach($scope.topicData, function(value, key) {
			mydata.gettopicspecsubtitledata(value).then(function(data){
				$scope.noOfLinks[key]=data.nooflinks;
			});
		});
	});
	
	$scope.gotolocation=function(title){
		console.log("title: "+title);
		var mypath="/"+title;
		$location.path(mypath);
	};
});



myApp.controller("htmlCtrl", function($scope, $routeParams,mydata,$location) {
	console.log("htmlCtrl");
	var value=$location.path().substring(1);
	mydata.gettopicspecsubtitledata(value).then(function(data){
		$scope.pagedata=data.subtopicdataarr;
	});
});

myApp.controller("miscCtrl", function($scope, $routeParams,mydata,$location) {
	console.log("miscCtrl");
	var value=$location.path().substring(1);
	mydata.gettopicspecsubtitledata(value).then(function(data){
		$scope.pagedata=data.subtopicdataarr;
	});

});
myApp.controller("browserCtrl", function($scope, $routeParams,mydata,$location) {
	console.log("browserCtrl");
	var value=$location.path().substring(1);
	mydata.gettopicspecsubtitledata(value).then(function(data){
		$scope.pagedata=data.subtopicdataarr;
	});

});
myApp.controller("cssCtrl", function($scope, $routeParams,mydata,$location) {
	console.log("cssCtrl");
	var value=$location.path().substring(1);
	mydata.gettopicspecsubtitledata(value).then(function(data){
		$scope.pagedata=data.subtopicdataarr;
	});
});
myApp.controller("jsCtrl", function($scope, $routeParams,mydata,$location) {
	console.log("jsCtrl");
	var value=$location.path().substring(1);
	mydata.gettopicspecsubtitledata(value).then(function(data){
		$scope.pagedata=data.subtopicdataarr;
	});
});
myApp.controller("searchCtrl", function($scope, $routeParams,alldata,$location) {
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
