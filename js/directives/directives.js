myApp.directive('mytoggle',function(){
	console.log("inside dir");
	//ALERTS	
	return function() {
		jQuery(".toggle").click(function(e) {
		  jQuery(".show").slideToggle("slow");
		});
	};
});
