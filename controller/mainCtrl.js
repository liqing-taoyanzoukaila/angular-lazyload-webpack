"use strict";
module.exports = ['$scope', '$rootScope', function mainCtrl($scope, $rootScope) {
    console.log("enter main controller");
    $scope.mainData = "main page";
    /**
     * 以下为构造脏检查次数达到循环上限代码
     */
    // $scope.user1 = 0;
    // $scope.user2 = 0;
    // $scope.$watch(function() {
    //     return $scope.user1;
    // }, function(oldResult, newResult) {
    //     $scope.user2++;
    // });
    //
    // $scope.$watch(function() {
    //     return $scope.user2;
    // }, function(oldResult, newResult) {
    //     $scope.user1++;
    // });
}];