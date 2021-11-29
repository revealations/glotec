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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);e.default=t;return e};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_react_base_1=require("wijmo/wijmo.react.base"),wjcOlap=__importStar(require("wijmo/wijmo.olap")),PivotGrid=function(t){__extends(PivotGrid,t);function PivotGrid(e){return t.call(this,e,wjcOlap.PivotGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold","columnGroups"]})||this}return PivotGrid}(wijmo_react_base_1.ComponentBase);exports.PivotGrid=PivotGrid;var PivotChart=function(t){__extends(PivotChart,t);function PivotChart(e){return t.call(this,e,wjcOlap.PivotChart,{objectProps:["itemsSource","headerStyle","footerStyle"]})||this}return PivotChart}(wijmo_react_base_1.ComponentBase);exports.PivotChart=PivotChart;var PivotPanel=function(t){__extends(PivotPanel,t);function PivotPanel(e){return t.call(this,e,wjcOlap.PivotPanel,{objectProps:["engine","itemsSource"]})||this}return PivotPanel}(wijmo_react_base_1.ComponentBase);exports.PivotPanel=PivotPanel;var Slicer=function(t){__extends(Slicer,t);function Slicer(e){return t.call(this,e,wjcOlap.Slicer,{objectProps:["field"]})||this}return Slicer}(wijmo_react_base_1.ComponentBase);exports.Slicer=Slicer;