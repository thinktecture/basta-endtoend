(function () {
   "use strict";

   angular.module("bastaEndToEnd").config(function($routeProvider) {

      function getDefault(name) {
         return {templateUrl: "app/" + name + "/" + name + ".html", controller: name + "Controller"}
      }

      $routeProvider
         .when("/start", {templateUrl: "app/main/main.html"})
         .when("/customerList", {templateUrl: "app/customerList/customerList.html"})
         .when("/customer/:id", getDefault("customer"))
         .otherwise({redirectTo: "/start"});

   });

})();
