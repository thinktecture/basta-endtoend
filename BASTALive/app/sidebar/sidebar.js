(function () {
   "use strict";

   /**
    * @param $scope
    * @param {$app.CustomerService} customerService
    * @constructor
    */
   function SidebarController($scope, customerService){
      customerService.getFolders().then(function(folders){
         $scope.folders = folders;
      });
   }

   function mySidebar(){

      return {
         restrict: "E",
         templateUrl: "/app/sidebar/sidebar.html",
         controller: "sidebarController"
      };

   }

   $app.mod.controller("sidebarController",SidebarController);
   $app.mod.directive("mySidebar",mySidebar);


})();
