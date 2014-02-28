GitHub Repo: https://github.com/thinktecture/basta-endtoend

Server aufsetzen
================
Visual Studio -> "ASP.NET"-Projekt
-> im zweiten Dialog "Empty"

NuGet
-microsoft.aspnet.webpages
-microsoft.aspnet.web.optimization
  
global.asax anlegen für Registrierung des Bundlings
index.cshtml hinzufügen
Im IIS neue Web Site anlegen & mappen auf endtoend.local
In hosts eintragen: c:\windows\system32\drivers\etc\hosts
        
Berechtigungen im Dateisystem für den "Network Service"-Benutzer (bzw. AppPool-Benutzer)
Berechtigungen im Dateisystem für den "IUSR"-Benutzer


Client aufsetzen
================
Twitter Bootstrap (BS) als Basis-Design
-http://getbootstrap.com

Vorgefertigte BS Themes:
-http://themeforest.net; kostenpflichtig; Lizenzen

Für diese App hier:
-http://getbootstrap.com/examples/dashboard/
 -freies Samples, responsive

Download BS:
-http://getbootstrap.com/getting-started#download

-Client-relevante Ordner im VS-Projekt anlegen
 -app
 -libs
 -font

-Bundling
 -erst libs Folder, dnn app Folder

-Nummerierung der CSS und JS Ordner, a la '10', '20', ...
 -für Reihenfolge der Scripts, Assets

-Vertraut machen mit der BS Design Sprache
 -http://getbootstrap.com/css/

-Auseinandernehmen der index.html
 -Extrahieren der funktionalen Unterbereiche

-Einbinden von AngularJS
 -http://angularjs.org/

-JavaScript IFFE
 -http://benalman.com/news/2010/11/immediately-invoked-function-expression/

-Inkludieren der extrahierten HTML-Fragmente mit ng-include

-Main-Bereich über ng-view einbinden

-Alternative für komplexe UI States: ui-router (nicht im AngularJS-Paket)
 -https://github.com/angular-ui/ui-router

-AngularJS API Doku
 -http://docs.angularjs.org/api

-Direktiven (Directives) in AngularJS zum Kapseln von "Controls"

-Direktiven werden mit Factory-Funktionen gebaut
 -<basta-navbar> (aka "bastaNavbar")

