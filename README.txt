GitHub Repo: https://github.com/thinktecture/basta-endtoend

Server aufsetzen
================
Visual Studio -> "ASP.NET"-Projekt
-> im zweiten Dialog "Empty"

NuGet
-microsoft.aspnet.webpages
-microsoft.aspnet.web.optimization
  
global.asax anlegen f�r Registrierung des Bundlings
index.cshtml hinzuf�gen
Im IIS neue Web Site anlegen & mappen auf endtoend.local
In hosts eintragen: c:\windows\system32\drivers\etc\hosts
        
Berechtigungen im Dateisystem f�r den "Network Service"-Benutzer (bzw. AppPool-Benutzer)
Berechtigungen im Dateisystem f�r den "IUSR"-Benutzer


Client aufsetzen
================
Twitter Bootstrap (BS) als Basis-Design
-http://getbootstrap.com

Vorgefertigte BS Themes:
-http://themeforest.net; kostenpflichtig; Lizenzen

F�r diese App hier:
-http://getbootstrap.com/examples/dashboard/
 -freies Samples, responsive

Download BS:
-http://getbootstrap.com/getting-started#download

Client-relevante Ordner im VS-Projekt anlegen
 -app
 -libs
 -font

Bundling
 -erst libs Folder, dnn app Folder

Nummerierung der CSS und JS Ordner, a la '10', '20', ...
 -f�r Reihenfolge der Scripts, Assets

Vertraut machen mit der BS Design Sprache
 -http://getbootstrap.com/css/

Auseinandernehmen der index.html
 -Extrahieren der funktionalen Unterbereiche

Einbinden von AngularJS
 -http://angularjs.org/

JavaScript IFFE
 -http://benalman.com/news/2010/11/immediately-invoked-function-expression/

Inkludieren der extrahierten HTML-Fragmente mit ng-include

Main-Bereich �ber ng-view einbinden

Alternative f�r komplexe UI States: ui-router (nicht im AngularJS-Paket)
 -https://github.com/angular-ui/ui-router

AngularJS API Doku
 -http://docs.angularjs.org/api


Server weiter aufsetzen
=======================

ASP.NET Web API & OWIN
 -Microsoft.AspNet.WebApi
 -Microsoft.AspNet.WebApi.Owin
 -Microsoft.Owin.Security.OAuth
 -Microsoft.Owin.Host.SystemWeb
 -EntityFramework
 -EntityFramework.SqlServerCompact

Startup.cs
 -CamelCasePropertyNamesContractFormatter --> camelCase statt PascalCase auf der JavaScript-Seite


PhoneGap/Cordova App bauen
==========================
http://endtoend.local im Browser aufrufen (oder mit curl.exe) und als index.html abspeichern
 -sicherstellen, dass alle src-Links entweder auf "app/..." oder "libs/..." lauten

cordova create BASTAEndToEnd com.tt.basta BASTAEndToEnd
cd BASTAEndToEnd/

Order 'app', 'libs' aus der Web App und generiertes index.html in 'www' Ordner kopieren

cordova platform add ios
cordova platform add android


node-webkit Anwendung bauen
===========================
siehe https://github.com/rogerwang/node-webkit

