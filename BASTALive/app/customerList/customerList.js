(function () {
   "use strict";

   /**
    * @param $scope
    * @param $routeParams
    * @param {$app.CustomerService} customerService
    * @param $location
    * @constructor
    */
   function CustomerList($scope, $routeParams, customerService, $location) {
      var mode = $routeParams.mode;

      if (mode === "search") {
         customerService.find($routeParams.query).then(function(customers){
            $scope.customers = customers;
         });
      }

      /*
      if (mode === "folder") {
         customerService.find($routeParams.query).then(function(customers){
            $scope.customers = customers;
         });
      }
       */

      $scope.selectCustomer = function(customer){
         $scope.selection.customerId = customer.id;
      };
   }


   $app.mod.controller("customerListController", CustomerList);

})();
