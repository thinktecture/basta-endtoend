(function () {
    "use strict";

    function NavbarController($scope, $location) {

        $scope.search = { query: "" };

        $scope.performSearch = function () {
            $location.path("/customerList/" + $scope.search.query);
        };
    }

    $app.mod.controller("navbarController", NavbarController);

    function bastaNavbar() {
        return {
            restrict: "EA",
            templateUrl: "app/navbar/navbar.html",
            controller: "navbarController"
        };
    }

    $app.mod.directive("bastaNavbar", bastaNavbar);
})();
