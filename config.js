"use strict";
let configModule = angular.module("config", []);
let config = ["$stateProvider", "$urlRouterProvider", "$controllerProvider",
    function($stateProvider, $urlRouterProvider){

        // $urlRouterProvider.otherwise("/default/subPage");
        $urlRouterProvider.otherwise("/default");

        $stateProvider.state("default",{
            url:"/default",
            //本地直接在浏览器中运行index.html则不能使用templateUrl，否则会有跨域问题
            // templateUrl:"html/default.html",
            template: "<div><span>{{default}}</span><div ui-view></div></div>",
            controller: "defaultCtrl",
            resolve:{
                'default': ["$q", "$ocLazyLoad", function($q, $ocLazyLoad) {
                    let deferred = $q.defer();
                    require.ensure(['./controller/defaultCtrl'], function() {
                        let mod = require('./controller/defaultCtrl');
                        $ocLazyLoad.load({
                            name: mod
                        });
                        deferred.resolve();
                    }, 'defaultCtrl');
                    return deferred.promise;
                }]
                // 'default': ["$ocLazyLoad", function($ocLazyLoad) {
                //     require.ensure(['./controller/defaultCtrl'], function() {
                //         let mod = require('./controller/defaultCtrl');
                //         return $ocLazyLoad.load({
                //             name: mod
                //         });
                //     }, 'defaultCtrl');
                // }]
            }
        });

        $stateProvider.state("default.subPage",{
            url:"/subPage",
            // templateUrl:"html/routerA.html",
            template: "<div>{{subPageData}}</div>`",
            controller: "subPageCtrl",
            resolve:{
                'subPageCtrl': ["$q", "$ocLazyLoad", function($q, $ocLazyLoad) {
                    let deferred = $q.defer();
                    require.ensure(['./controller/subPageCtrl'], function() {
                        let mod = require('./controller/subPageCtrl');
                        $ocLazyLoad.load({
                            name: mod
                        });
                        deferred.resolve();
                    }, 'subPageCtrl');
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state("routerA",{
            url:"/routerA",
            // templateUrl:"html/routerA.html",
            template: "<div>{{say}}</div>`",
            controller: "routerACtrl",
            resolve:{
                'routerA': ["$q", "$ocLazyLoad", function($q, $ocLazyLoad) {
                    let deferred = $q.defer();
                    require.ensure(['./controller/routerACtrl'], function() {
                        let mod = require('./controller/routerACtrl');
                        $ocLazyLoad.load({
                            name: mod
                        });
                        deferred.resolve();
                    }, 'routerACtrl');
                    return deferred.promise;
                }]
            }
        });
    }];
configModule.config(config);
module.exports = configModule.name;