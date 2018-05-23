"use strict";
let defaultCtrl = ["$rootScope", "$scope", function ($rootScope, $scope) {
    console.log("enter default controller");
    $scope.default = "default page."
}];

module.exports = angular.module("defaultCtrl", [])
    .controller("defaultCtrl", defaultCtrl).name;