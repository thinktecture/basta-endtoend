(function () {
   "use strict";

   /**
    * @param $parse
    * @param {$app.DateService}  dateService
    */
   function myTest ($parse, dateService) {
      return {
         restrict: "E",
         templateUrl: "app/testDirective.html",
         replace: true,
         link: function (scope, element, attrs) {
            var ngModel = attrs.ngModel;
            var modelGetter = $parse(ngModel);
            var value = modelGetter(scope);

            function setCurrentValue(){
               var value = modelGetter(scope);
               input.datepicker("setDate", value);
            }

            scope.$watch(ngModel, setCurrentValue);

            function changeCallback(newValue) {
               scope.$apply(function(){
                  var val = input.datepicker("getDate");
                  modelGetter.assign(scope, val);
               });
            }

            var input = element.find("input");
            input.datepicker({
               onClose: changeCallback,
               onSelect: changeCallback
            });

            setCurrentValue();

         }
      };
   }

   $app.mod.directive("myTest", myTest);

})();
