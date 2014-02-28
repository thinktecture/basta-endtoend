(function () {
   "use strict";

   /**
    * @param $parse
    * @param {$app.DateService} dateService
    */
   function ttDatePicker($parse, dateService) {

      return {
         restrict: "EA",
         replace: true,
         transclude: false,
         compile: function (element, attrs) {
            var ngModel = $parse(attrs.ngModel); // ng-model="user.firstname.foo[0].bla()"

            var html = "<input class='form-control' type='text' id='" + attrs.id + "' ></input>";
            var newElem = $(html);
            element.replaceWith(newElem);

            return function (scope, element, attrs, controller) {

               scope.$watch(ngModel, function (val) {
                  var date = dateService.safeGetDate(val);
                  element.datepicker("setDate", date);
               });

               var processChange = function () {
                  var date = dateService.isoStringFromDate(element.datepicker("getDate"));

                  scope.$apply(function (scope) {
                     // Change bound variable
                     ngModel.assign(scope, date);
                     var newVal = dateService.safeGetDate(ngModel(scope));
                     element.datepicker("setDate", newVal);
                  });
               };

               element.datepicker({
                  inline: true,
                  dateFormat: 'dd.mm.yy',
                  onClose: processChange,
                  onSelect: processChange
               });
            };

         }
      };
   }

   angular.module("ttBase").directive('ttDatepicker', ttDatePicker);
})();
