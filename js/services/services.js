// myApp.factory('getalldata', function($hhtp) {
  // var thisIsPrivate = "Private";
  // function getPrivate() {
    // return thisIsPrivate;
  // }

  // return {
    // variable: "This is public",
    // getPrivate: getPrivate
  // };
// });

myApp.factory('getalldata', function($http) {
    //var dataObj=[{'fn':'hussain'},{'fn':"maryam"}];
    var dataObj={};
	
    var responsePromise = $http.get("BookReadies/data.json");
	
	responsePromise.success(function(data) {
		return data;
	});
	responsePromise.error(function(data) {
		console.log("promoise failure");
		//$scope.data='error';
	});
	
    return {dataObj:responsePromise}
    
});


myApp.factory('httpq', function($http, $q) {
  return {
    get: function() {
      var deferred = $q.defer();
      $http.get("BookReadies/data.json")
      .success(deferred.resolve)
      .error(deferred.resolve);
      return deferred.promise;
    }
  }
});

myApp.factory('mydata', function($http, httpq) {
   var uniquetopic = {};
   var distincttopic = [];
  
    return {
		gettopicdata: function() {
			 var subtitledatapro=httpq.get().then(function(alldata){
				console.log("hi");
				angular.forEach(alldata.data, function(value, key) {
					if( typeof(uniquetopic[value.topic]) == "undefined"){
					  distincttopic.push(value.topic);
					}
					uniquetopic[value.topic] = 0;
				});
				return distincttopic;
			 });
			  return subtitledatapro;
		},
		gettopicspecsubtitledata: function(topictitle) {
			
			var subtitledatapro=httpq.get().then(function(alldata){
				console.log("hidddd");
				var subtopicdata={'subtopicdataarr':[],'nooflinks':0};
				var count=0;
				angular.forEach(alldata.data, function(value, key) {
					if(value.topic == topictitle){
					  subtopicdata.subtopicdataarr.push(value);
					  count++;
					  subtopicdata.nooflinks=count;
					}
					
					
				});
				return subtopicdata;
			});
			return subtitledatapro;
		}
	}
});


