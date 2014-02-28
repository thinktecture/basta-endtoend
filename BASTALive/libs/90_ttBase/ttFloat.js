(function () {
   "use strict";

   function ttFloat($parse) {
      return {
         restrict: "AE",
         require: "ngModel",
         replace: true,
         template: "<input type='text' class='form-control'>",
         link: function (scope, element, attr, ngModel) {
            var decimalPlaces = attr.decimalPlaces || 2;

            function fromUser(text) {
               if (!text) {
                  ngModel.$setValidity("ttFloat-notANumber", true);
                  return null;
               }

               var ret = Globalize.parseFloat(text);

               if (isNaN(ret) || ret === null) {
                  ngModel.$setValidity("ttFloat-notANumber", false);
                  return null;
               }

               ngModel.$setValidity("ttFloat-notANumber", true);

               return ret;
            }

            function toUser(text) {
               if (!text) {
                  return null;
               }

               return Globalize.format(text, "n" + decimalPlaces);
            }

            ngModel.$parsers.push(fromUser);
            ngModel.$formatters.push(toUser);
         }
      };
   }

   angular.module("ttBase").directive('ttFloat', ttFloat);
})();
