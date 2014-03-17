(function () {
   "use strict";

   function MainController($scope) {
      $scope.user = {
         dateOfBirth: new Date()
      };

   }

   $app.mod.controller("mainController", MainController);

})();
