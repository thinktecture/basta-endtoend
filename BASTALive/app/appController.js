(function () {
   "use strict";

   function AppController($scope){
      $scope.selection = {};

      $scope.$root.$on("$locationChangeStart", function(event, newUrl){
         console.log("NEW URL (start): " + newUrl);
      });

      $scope.$root.$on("$locationChangeSuccess", function(event, newUrl){
         console.log("NEW URL (success): " + newUrl);
      });

      $scope.$root.$on("$routeChangeStart", function(event, newRoute){
         console.log("NEW ROUTE (start)", newRoute);
      });

      $scope.$root.$on("$routeChangeSuccess", function(event, newRoute){
         console.log("NEW ROUTE (success)", newRoute);
      });


   }



   $app.mod.controller("appController", AppController);
})();
