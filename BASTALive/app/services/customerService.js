(function () {
   "use strict";

   $app.CustomerService = function ($http) {

      var baseUrl = "http://endtoend.local/api/customers";

      this.getFolders = function () {
         var url = baseUrl + "/folders";

         return $http.get(url).then(function (result) {
            return result.data.entries;
         });
      };

      this.find = function (query) {
         var url = baseUrl + "/list?query=" + query;

         return $http.get(url).then(function (result) {
            return result.data.entries;
         });

      };

      this.get = function (id) {
         var url = baseUrl + "/single/?id=" + id;

         return $http.get(url).then(function (result) {
            return result.data;
         });
      };

      this.save = function (customer) {
         var url = baseUrl + "/single/";
         return $http.post(url, customer);
      };
   };

   $app.mod.service("customerService", $app.CustomerService);

})();
