(function () {
   "use strict";

   function CustomerController($scope, $routeParams) {






      function Customer(id, last, first) {
         this.id = id;
         this.firstName = first;
         this.lastName = last;


         this.getFullName = function(){
            return this.firstName + " " + this.lastName;
         };
      }


      $scope.customer = new Customer($routeParams.id, "Test", "User #" + $routeParams.id);

      // alert("CustomerController");


   }

   angular.module("bastaEndToEnd").controller("customerController", CustomerController);
})();
