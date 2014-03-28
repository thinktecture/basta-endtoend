(function () {
    "use strict";

    $app.MetadataService = function ($http, $q) {

        var baseUrl = "http://endtoend.local/api/";

        this.getAllCountries = function () {
            var url = baseUrl + "/countries/list";

            var json = localStorage.getItem("METADATA_COUNTRIES");

            if (json) {
                var defer = $q.defer();
                defer.resolve(JSON.parse(json));
                return defer.promise;
            }

            return $http.get(url).then(function (result) {
                localStorage.setItem("METADATA_COUNTRIES", JSON.stringify(result.data.entries));
                return result.data.entries;
            });
        };
    };

    $app.mod.service("metadataService", $app.MetadataService);

})();
