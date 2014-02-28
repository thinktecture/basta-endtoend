(function () {
   "use strict";

   /**
    * @param $parse
    * @param {$app.Toast} toast
    * @param {$app.Modal} modal
    */
   var ttClickAjax = function ($parse, modal, toast) {
      return {
         restrict: "A",
         link: function (scope, element, attrs) {
            var method = attrs.ttClickAjax;
            var confirmMessage = attrs.ttClickConfirmMessage;
            var parsed = $parse(method);
            if (!method) {
               return;
            }

            function performOperation() {

               modal.showAjax();

               parsed(scope).then(function () {
                  modal.hideAjax();
               }, function (err) {
                  modal.hideAjax();
                  var message = "Error: Could not complete operation. Please retry.";
                  var details = "";
                  if (err) {
                     if (err.data) {
                        details += "Details: " + err.data;
                     }
                     if (err.status) {
                        details += "\n\n" + "Status: " + err.status;
                     }
                  }

                  toast.showError(message, details);

               });
            }

            element.click(function () {

               if (confirmMessage) {
                  modal.confirm(confirmMessage, function (clickedIndex) {
                     if (clickedIndex === 1) {
                        return;
                     }

                     scope.$apply(function () {
                        performOperation();
                     });

                  }, ["Ok", "Abbrechen"], 1);
               } else {
                  performOperation();
               }
            });


         }
      };
   };

   angular.module("ttBase").directive("ttClickAjax", ttClickAjax);

})();