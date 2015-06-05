myApp
.directive('mytoggle',function(){
	console.log("inside dir");
	//ALERTS	
	return function() {
		jQuery(".toggle").click(function(e) {
		  jQuery(".show").slideToggle("slow");
		});
	};
})
.directive('myreset', [function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            var aElement;
            aElement = angular.element('<button type="button" class="reset-field hide-text" tabindex="-1">Reset text field</button>');
            var added = false;
//            var remove = function(e) {
//                if (added) {
//                    aElement.remove();
//                    added = false;
//                }
//            };
            var add = function(e) {
                // if (!added && elm.val().length > 0) { //to make it similar to sandbox 3.2
                elm.after(aElement);
                aElement.bind('mousedown', click);
                added = true;
                //  }
                if (added && elm.val().length === 0) {
                    //remove();
                }
            };
            var click = function(e) {
                e.preventDefault();
                scope.$apply(function() {
                    if (attrs.myreset)
                    {
                        ctrl.$setViewValue(scope.$eval(attrs.myreset));
                    }
                    else
                    {
                        ctrl.$setViewValue('');
                    }
                    ctrl.$render();
                });
                elm[0].focus();
            };
            elm.bind('focus input', add);
            // elm.bind('blur', remove);
        }
    };
}])
