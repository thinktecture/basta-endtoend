(function () {
   "use strict";

   /**
    *
    * @param {$app.DateService} dateService
    */
   function filter(dateService) {
      return function(value, format){
         return dateService.safeDateFormat(value, format);
      };
   }

   angular.module("ttBase").filter("date", filter);
})();




