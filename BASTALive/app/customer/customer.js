(function () {
   "use strict";

   /**
    * @param $scope
    * @param $routeParams
    * @param {$app.CustomerService} customerService
    * @param {$app.MetadataService} metadataService
    * @param {$app.Toast} toast
    * @param {$app.Modal} modal
    * @constructor
    */
   function CustomerController($scope, $routeParams, customerService, metadataService, toast, modal) {
      customerService.get($routeParams.id).then(function(customer){
            $scope.customer = customer;
      });

      metadataService.getAllCountries().then(function(countries){
         $scope.countries = countries;
      });

      $scope.saveCustomer = function(){
         modal.showAjax();

         customerService.save($scope.customer).then(function(){
            modal.hideAjax();
            toast.showSuccess("Alles gut");
         }, function(err){
            modal.hideAjax();
            toast.showError("NIX gut");
         });
      };

   }

   angular.module("bastaEndToEnd").controller("customerController", CustomerController);
})();
