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
	
    var responsePromise = $http.get("/data.json");
	
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
      $http.get("/data.json")
      .success(deferred.resolve)
      .error(deferred.resolve);
      return deferred.promise;
    }
  }
});




