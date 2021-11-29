﻿/*!
    *
    * Wijmo Library 5.20212.812
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);e.default=t;return e};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_angular_base_1=require("wijmo/wijmo.angular.base"),mNg=__importStar(require("angular")),wjcChartInteraction=__importStar(require("wijmo/wijmo.chart.interaction")),wjNg=mNg,wijmoChartInteractionName="wj.chart.interaction";exports.ngModuleName=wijmoChartInteractionName;var wijmoChartInteraction=wijmo_angular_base_1._registerNgModule(wijmoChartInteractionName);if(wijmo_angular_base_1.softRefChartInteraction()){wijmoChartInteraction.directive("wjFlexChartRangeSelector",[function(){return new WjFlexChartRangeSelector}]);wijmoChartInteraction.directive("wjFlexChartGestures",[function(){return new WjFlexChartChartGestures}]);wijmoChartInteraction.directive("wjFlexChartChartGestures",[function(){return new WjFlexChartChartGestures}])}var WjFlexChartRangeSelector=function(t){__extends(WjFlexChartRangeSelector,t);function WjFlexChartRangeSelector(){var e=t.call(this)||this;e.require=["?^wjFlexChart","?^wjFinancialChart"];return e}Object.defineProperty(WjFlexChartRangeSelector.prototype,"_controlConstructor",{get:function(){return wjcChartInteraction.RangeSelector},enumerable:!0,configurable:!0});return WjFlexChartRangeSelector}(wijmo_angular_base_1.WjDirective);exports.WjFlexChartRangeSelector=WjFlexChartRangeSelector;var WjFlexChartChartGestures=function(t){__extends(WjFlexChartChartGestures,t);function WjFlexChartChartGestures(){var e=t.call(this)||this;e.require=["?^wjFlexChart","?^wjFinancialChart"];return e}Object.defineProperty(WjFlexChartChartGestures.prototype,"_controlConstructor",{get:function(){return wjcChartInteraction.ChartGestures},enumerable:!0,configurable:!0});return WjFlexChartChartGestures}(wijmo_angular_base_1.WjDirective);exports.WjFlexChartChartGestures=WjFlexChartChartGestures;