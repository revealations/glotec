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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(n[r]=t[r]);n.default=t;return n};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_angular_base_1=require("wijmo/wijmo.angular.base"),mNg=__importStar(require("angular")),wjcChartAnnotation=__importStar(require("wijmo/wijmo.chart.annotation")),wjNg=mNg,wijmoChartAnnotationName="wj.chart.annotation";exports.ngModuleName=wijmoChartAnnotationName;var wijmoChartAnnotation=wijmo_angular_base_1._registerNgModule(wijmoChartAnnotationName);if(wijmo_angular_base_1.softRefChartAnnotation()){wijmoChartAnnotation.directive("wjFlexChartAnnotationLayer",[function(){return new WjFlexChartAnnotationLayer}]);wijmoChartAnnotation.directive("wjFlexChartAnnotation",[function(){return new WjFlexChartAnnotation}])}var WjFlexChartAnnotationLayer=function(t){__extends(WjFlexChartAnnotationLayer,t);function WjFlexChartAnnotationLayer(){var n=t.call(this)||this;n.require=["?^wjFlexChart","?^wjFinancialChart"];n.template='<div class="wjFlexChartAnnotationLayer" ng-transclude />';n.transclude=!0;return n}Object.defineProperty(WjFlexChartAnnotationLayer.prototype,"_controlConstructor",{get:function(){return wjcChartAnnotation.AnnotationLayer},enumerable:!0,configurable:!0});return WjFlexChartAnnotationLayer}(wijmo_angular_base_1.WjDirective);exports.WjFlexChartAnnotationLayer=WjFlexChartAnnotationLayer;var WjFlexChartAnnotation=function(t){__extends(WjFlexChartAnnotation,t);function WjFlexChartAnnotation(){var n=t.call(this)||this;n.require="^wjFlexChartAnnotationLayer";n.template='<div class="wjFlexChartAnnotation" ng-transclude />';n.transclude=!0;return n}WjFlexChartAnnotation.prototype._createLink=function(){return new WjFlexChartAnnotationLink};WjFlexChartAnnotation.prototype._getMetaDataId=function(){return"FlexChartAnnotation"};return WjFlexChartAnnotation}(wijmo_angular_base_1.WjDirective);exports.WjFlexChartAnnotation=WjFlexChartAnnotation;var WjFlexChartAnnotationLink=function(t){__extends(WjFlexChartAnnotationLink,t);function WjFlexChartAnnotationLink(){return null!==t&&t.apply(this,arguments)||this}WjFlexChartAnnotationLink.prototype._initControl=function(){return new wjcChartAnnotation[this.scope.type]};return WjFlexChartAnnotationLink}(wijmo_angular_base_1.WjLink);exports.WjFlexChartAnnotationLink=WjFlexChartAnnotationLink;