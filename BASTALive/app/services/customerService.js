(function () {
   "use strict";

   $app.CustomerService = function ($http){

      this.find = function(query){

         var url = "http://endtoend.local/api/customers/list?query=" + query;

         return $http.get(url).then(function(result){
            return result.data.entries;
         });

      };
   };

   $app.mod.service("customerService", $app.CustomerService);

})();
