(function () {
   "use strict";

   $app.mod.config(function($routeProvider) {

      function getDefault(name) {
         return {templateUrl: "app/" + name + "/" + name + ".html", controller: name + "Controller"};
      }

      $routeProvider
         .when("/start", getDefault("main"))
         .when("/customerList/:mode/:query", getDefault("customerList"))
         .when("/customer/:id", getDefault("customer"))
         .otherwise({redirectTo: "/start"});

   });


})();
