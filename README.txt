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
-getbootstrap.com

Vorgefertigte BS Themes:
-themeforest.net; kostenpflichtig; Lizenzen

Für diese App hier:
-http://getbootstrap.com/examples/dashboard/
 -freies Samples, responsive

Download BS:
-http://getbootstrap.com/getting-started#download

-Client-relevante Ordner im VS-Projekt anlegen
 -app
 -libs
 -font

-Nummerierung der CSS und JS Ordner, a la '10', '20'
 -für Reihenfolge der Scripts, Assets

-Vertraut machen mit der BS Design Sprache
 -http://getbootstrap.com/css/

