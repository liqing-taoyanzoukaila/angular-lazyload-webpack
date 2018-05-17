"use strict";
let angular = require('angular');
let oclazyload = require('oclazyload');
let uiRouter = require("angular-ui-router");
let config = require('./config');
let mainCtrl = require('./controller/mainCtrl');

module.exports = angular.module("app", [oclazyload, uiRouter, config])
    .controller('mainCtrl', mainCtrl);