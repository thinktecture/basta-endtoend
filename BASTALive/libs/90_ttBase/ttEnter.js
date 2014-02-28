(function () {
   "use strict";

   function ttEnter() {
      return {
         restrict: "A",
         link: function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
               if (event.which === 13) {
                  scope.$apply(function () {
                     scope.$eval(attrs.ttEnter);
                  });

                  event.preventDefault();
               }
            });
         }
      };
   }

   angular.module("ttBase").directive("ttEnter", ttEnter);

})();