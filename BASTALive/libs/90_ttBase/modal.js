(function () {
   "use strict";


   var $popupDiv;
   var $ajaxDiv;
   var _popupUsed;
   var _ajaxUsed;
   var _timeout;


   $app.Modal = function () {
      // create the DIV which holds the temporary popup
      $popupDiv = $("<div></div>");

      var template = '<div id="modal_loading_template" >\n' +
         '    <style>\n' +
         '.popupAjax .ui-dialog-titlebar {' +
         '   display: none' +
         '} ' +
         '.popupAjax.ui-widget-content, .popupAjax .ui-dialog-content {' +
         '   background: none !important;' +
         '   border: 0 !important;' +
         '}' +
         '        #floatingCirclesG{\n' +
         '            position:relative;\n' +
         '            width:64px;\n' +
         '            height:64px;\n' +
         '            -moz-transform:scale(0.6);\n' +
         '            -webkit-transform:scale(0.6);\n' +
         '            -ms-transform:scale(0.6);\n' +
         '            -o-transform:scale(0.6);\n' +
         '            transform:scale(0.6);\n' +
         '        }\n' +
         '\n' +
         '        .f_circleG{\n' +
         '            position:absolute;\n' +
         '            background-color:#FFFFFF;\n' +
         '            height:12px;\n' +
         '            width:12px;\n' +
         '            -moz-border-radius:6px;\n' +
         '            -moz-animation-name:f_fadeG;\n' +
         '            -moz-animation-duration:0.72s;\n' +
         '            -moz-animation-iteration-count:infinite;\n' +
         '            -moz-animation-direction:linear;\n' +
         '            -webkit-border-radius:6px;\n' +
         '            -webkit-animation-name:f_fadeG;\n' +
         '            -webkit-animation-duration:0.72s;\n' +
         '            -webkit-animation-iteration-count:infinite;\n' +
         '            -webkit-animation-direction:linear;\n' +
         '            -ms-border-radius:6px;\n' +
         '            -ms-animation-name:f_fadeG;\n' +
         '            -ms-animation-duration:0.72s;\n' +
         '            -ms-animation-iteration-count:infinite;\n' +
         '            -ms-animation-direction:linear;\n' +
         '            -o-border-radius:6px;\n' +
         '            -o-animation-name:f_fadeG;\n' +
         '            -o-animation-duration:0.72s;\n' +
         '            -o-animation-iteration-count:infinite;\n' +
         '            -o-animation-direction:linear;\n' +
         '            border-radius:6px;\n' +
         '            animation-name:f_fadeG;\n' +
         '            animation-duration:0.72s;\n' +
         '            animation-iteration-count:infinite;\n' +
         '            animation-direction:linear;\n' +
         '        }\n' +
         '\n' +
         '        #frotateG_01{\n' +
         '            left:0;\n' +
         '            top:26px;\n' +
         '            -moz-animation-delay:0.27s;\n' +
         '            -webkit-animation-delay:0.27s;\n' +
         '            -ms-animation-delay:0.27s;\n' +
         '            -o-animation-delay:0.27s;\n' +
         '            animation-delay:0.27s;\n' +
         '        }\n' +
         '\n' +
         '        #frotateG_02{\n' +
         '            left:8px;\n' +
         '            top:8px;\n' +
         '            -moz-animation-delay:0.36s;\n' +
         '            -webkit-animation-delay:0.36s;\n' +
         '            -ms-animation-delay:0.36s;\n' +
         '            -o-animation-delay:0.36s;\n' +
         '            animation-delay:0.36s;\n' +
         '        }\n' +
         '\n' +
         '        #frotateG_03{\n' +
         '            left:26px;\n' +
         '            top:0;\n' +
         '            -moz-animation-delay:0.45s;\n' +
         '            -webkit-animation-delay:0.45s;\n' +
         '            -ms-animation-delay:0.45s;\n' +
         '            -o-animation-delay:0.45s;\n' +
         '            animation-delay:0.45s;\n' +
         '        }\n' +
         '\n' +
         '        #frotateG_04{\n' +
         '            right:8px;\n' +
         '            top:8px;\n' +
         '            -moz-animation-delay:0.54s;\n' +
         '            -webkit-animation-delay:0.54s;\n' +
         '            -ms-animation-delay:0.54s;\n' +
         '            -o-animation-delay:0.54s;\n' +
         '            animation-delay:0.54s;\n' +
         '        }\n' +
         '\n' +
         '        #frotateG_05{\n' +
         '            right:0;\n' +
         '            top:26px;\n' +
         '            -moz-animation-delay:0.63s;\n' +
         '            -webkit-animation-delay:0.63s;\n' +
         '            -ms-animation-delay:0.63s;\n' +
         '            -o-animation-delay:0.63s;\n' +
         '            animation-delay:0.63s;\n' +
         '        }\n' +
         '\n' +
         '        #frotateG_06{\n' +
         '            right:8px;\n' +
         '            bottom:8px;\n' +
         '            -moz-animation-delay:0.72s;\n' +
         '            -webkit-animation-delay:0.72s;\n' +
         '            -ms-animation-delay:0.72s;\n' +
         '            -o-animation-delay:0.72s;\n' +
         '            animation-delay:0.72s;\n' +
         '        }\n' +
         '\n' +
         '        #frotateG_07{\n' +
         '            left:26px;\n' +
         '            bottom:0;\n' +
         '            -moz-animation-delay:0.81s;\n' +
         '            -webkit-animation-delay:0.81s;\n' +
         '            -ms-animation-delay:0.81s;\n' +
         '            -o-animation-delay:0.81s;\n' +
         '            animation-delay:0.81s;\n' +
         '        }\n' +
         '\n' +
         '        #frotateG_08{\n' +
         '            left:8px;\n' +
         '            bottom:8px;\n' +
         '            -moz-animation-delay:0.9s;\n' +
         '            -webkit-animation-delay:0.9s;\n' +
         '            -ms-animation-delay:0.9s;\n' +
         '            -o-animation-delay:0.9s;\n' +
         '            animation-delay:0.9s;\n' +
         '        }\n' +
         '\n' +
         '        @-moz-keyframes f_fadeG{\n' +
         '            0%{\n' +
         '                background-color:#47759e}\n' +
         '\n' +
         '            100%{\n' +
         '                background-color:#FFFFFF}\n' +
         '\n' +
         '        }\n' +
         '\n' +
         '        @-webkit-keyframes f_fadeG{\n' +
         '            0%{\n' +
         '                background-color:#47759e}\n' +
         '\n' +
         '            100%{\n' +
         '                background-color:#FFFFFF}\n' +
         '\n' +
         '        }\n' +
         '\n' +
         '        @-ms-keyframes f_fadeG{\n' +
         '            0%{\n' +
         '                background-color:#47759e}\n' +
         '\n' +
         '            100%{\n' +
         '                background-color:#FFFFFF}\n' +
         '\n' +
         '        }\n' +
         '\n' +
         '        @-o-keyframes f_fadeG{\n' +
         '            0%{\n' +
         '                background-color:#47759e}\n' +
         '\n' +
         '            100%{\n' +
         '                background-color:#FFFFFF}\n' +
         '\n' +
         '        }\n' +
         '\n' +
         '        @keyframes f_fadeG{\n' +
         '            0%{\n' +
         '                background-color:#47759e}\n' +
         '\n' +
         '            100%{\n' +
         '                background-color:#FFFFFF}\n' +
         '\n' +
         '        }\n' +
         '\n' +
         '    </style>\n' +
         '    <div id="floatingCirclesG">\n' +
         '        <div class="f_circleG" id="frotateG_01">\n' +
         '        </div>\n' +
         '        <div class="f_circleG" id="frotateG_02">\n' +
         '        </div>\n' +
         '        <div class="f_circleG" id="frotateG_03">\n' +
         '        </div>\n' +
         '        <div class="f_circleG" id="frotateG_04">\n' +
         '        </div>\n' +
         '        <div class="f_circleG" id="frotateG_05">\n' +
         '        </div>\n' +
         '        <div class="f_circleG" id="frotateG_06">\n' +
         '        </div>\n' +
         '        <div class="f_circleG" id="frotateG_07">\n' +
         '        </div>\n' +
         '        <div class="f_circleG" id="frotateG_08">\n' +
         '        </div>\n' +
         '    </div>\n' +
         '</div>';


      $ajaxDiv = $("<div>" + template + "</div>");
   };

   $app.Modal.prototype.showAjax = function () {
      if (_ajaxUsed) {
         $ajaxDiv.dialog("destroy");
      }

      _timeout = window.setTimeout(function () {
         if (!_timeout) {
            return;
         }

         _timeout = null;
         _ajaxUsed = true;

         $ajaxDiv.dialog({
            autoOpen: true,
            dialogClass: "popupAjax",
            width: "90px",
            height: 90,
            modal: true,
            resizable: false,
            closeOnEscape: false,
            close: function () {
            }});
      }, 50);
   };

   $app.Modal.prototype.hideAjax = function () {
      if (_timeout) {
         window.clearTimeout(_timeout);
         _timeout = null;
      }

      if (_ajaxUsed) {
         $ajaxDiv.dialog("close");
         $ajaxDiv.dialog("destroy");
         _ajaxUsed = false;
      }
   };

   $app.Modal.prototype.confirm = function (message, callback, buttons, cancelButtonIndex) {
      // buttons: optional, default: [ "OK", "Cancel"];
      // cancelButtonIndex: index of the button which will be triggered on "ESC" --> default: 1
      // callback: function(buttonIndex) --> index of the chosen button

      buttons = buttons || [ "OK", "Cancel"];

      if (cancelButtonIndex !== "0") {
         cancelButtonIndex = cancelButtonIndex || 1;
      }

      var dialogButtons = [];

      var clickedButton = cancelButtonIndex;

      angular.forEach(buttons, function (buttonText, buttonIndex) {
         var dialogButton = {
            text: buttonText,
            click: function () {
               clickedButton = buttonIndex;
               $popupDiv.dialog("close");
            }
         };
         dialogButtons.push(dialogButton);
      });

      if (_popupUsed) {
         $popupDiv.dialog("destroy");
      }
      _popupUsed = true;
      $popupDiv.text(message);
      $popupDiv.dialog({
         autoOpen: true,
         modal: true,
         dialogClass: "popupMessage span4",
         closeOnEscape: true,
         buttons: dialogButtons,
         close: function () {
            callback(clickedButton);
         }});
   };

   angular.module("ttBase").service("modal", $app.Modal);


})();