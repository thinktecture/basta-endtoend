(function () {
   "use strict";


   function NavbarController($scope) {

      $scope.search = {query: ""};

      $scope.performSearch = function(){
         alert("Suche nach: " + $scope.search.query);
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
