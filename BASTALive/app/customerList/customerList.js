(function () {
   "use strict";

   function CustomerList($scope, $routeParams){
      alert("CUSTOMER LIST - " + $routeParams.query);
   }

   $app.mod.controller("customerListController", CustomerList);

})();
