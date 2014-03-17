(function () {
   "use strict";

   window.$app = window.$app || {};

   function NavbarController($scope, $location) {

      $scope.search = {query: ""};

      $scope.performSearch = function () {
         $location.path("/customerList/search/" + $scope.search.query);
      };

      $scope.openCustomer = function(id){
         var url = "/customer/" + id;
         $location.path(url);
      };
   }


   $app.mod.controller("navbarController", NavbarController);

   function bastaNavbar() {
      return {
         restrict: "EA",
         templateUrl: "app/navbar/navbar.html",
         controller: "navbarController"
      };
   }


   $app.mod.directive("bastaNavbar", bastaNavbar);

})();
