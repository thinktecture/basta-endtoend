(function () {
   "use strict";

   /**
    * @param $scope
    * @param $routeParams
    * @param {$app.CustomerService} customerService
    * @param $location
    */
   function CustomerList($scope, $routeParams, customerService, $location) {

      customerService.find($routeParams.query).then(function(customers){
         $scope.customers = customers;
      });

      $scope.openCustomer = function(customer){
         $location.path("/customer/" + customer.id);
      };
   }

   $app.mod.controller("customerListController", CustomerList);

})();
