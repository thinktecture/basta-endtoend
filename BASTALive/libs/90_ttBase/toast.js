(function () {
   "use strict";

   window.$app = window.$app || {};

   $app.Toast = function ($parse) {
      toastr.options.positionClass = "toast-top-full-width";

      this.showSuccess = function (text) {
         toastr.success(text);
      };

      this.showError = function (text, details) {
         var $div = $('<div><span class="placeholder"></span>&nbsp;&nbsp;<button type="button" id="okBtn" class="btn btn-mini">Ok</button></div>');
         $div.find(".placeholder").text(text);

         var html = $div.html();
         html = html.replace(/\n/g, "<br>");
         $div.html(html);

         var $toast = toastr.error($div, null, {
            timeOut: 9999999
         });

         $toast.find("button").click(function () {
            $toast.remove();
         });
      };
   };

   angular.module("ttBase").service("toast", $app.Toast);
})();