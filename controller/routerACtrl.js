"use strict";
let routerACtrl = ["$rootScope", "$scope", function ($rootScope, $scope) {
    console.log("enter routerA controller");
    $scope.say = "routerA page."
}];

module.exports = angular.module("config", [])
    .controller("routerACtrl", routerACtrl).name;