"use strict";
let subPageCtrl = ["$rootScope", "$scope", function ($rootScope, $scope) {
    console.log("enter subPage controller");
    $scope.subPageData = "subPage page."
}];

module.exports = angular.module("subPageCtrl", [])
    .controller("subPageCtrl", subPageCtrl).name;