"use strict";
let routerACtrl = ["$rootScope", "$scope", function ($rootScope, $scope) {
    console.log("enter routerA controller");
    $scope.say = "routerA page."
}];

module.exports = angular.module("routerACtrl", [])
    .controller("routerACtrl", routerACtrl).name;