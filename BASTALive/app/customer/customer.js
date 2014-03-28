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

        modal.showAjax();

        customerService.get($routeParams.id).then(function (customer) {
            modal.hideAjax();
            $scope.customer = customer;
        });

        metadataService.getAllCountries().then(function (countries) {
            $scope.countries = countries;
        });

        $scope.saveCustomer = function () {
            return customerService.save($scope.customer);
        };
    }

    angular.module("bastaEndToEnd").controller("customerController", CustomerController);
})();
