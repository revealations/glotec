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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_webcomponents_base_1=require("wijmo/wijmo.webcomponents.base"),wjcChartFinance=__importStar(require("wijmo/wijmo.chart.finance")),_wj_ns_exists_4=!0,WjcFinancialChart=function(e){__extends(WjcFinancialChart,e);function WjcFinancialChart(){var t=e.call(this,document.createElement("div"))||this;t._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcFinancialChart,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcFinancialChart.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcFinancialChart.prototype.attributeChangedCallback=function(e,t,n){this._wjBehaviour.lhAttributeChanged(e,t,n)};WjcFinancialChart.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcFinancialChart.prototype.addEventListener=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];"string"==typeof t[0]?HTMLElement.prototype.addEventListener.apply(this,t):e.prototype.addEventListener.apply(this,t)};return WjcFinancialChart}(wjcChartFinance.FinancialChart);exports.WjcFinancialChart=WjcFinancialChart;_wj_ns_exists_4&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-financial-chart",WjcFinancialChart);var WjcFinancialChartSeries=function(e){__extends(WjcFinancialChartSeries,e);function WjcFinancialChartSeries(){var t=e.call(this)||this;t._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcFinancialChartSeries,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcFinancialChartSeries.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcFinancialChartSeries.prototype.attributeChangedCallback=function(e,t,n){this._wjBehaviour.lhAttributeChanged(e,t,n)};WjcFinancialChartSeries.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcFinancialChartSeries.wrappedClass=function(){return wjcChartFinance.FinancialSeries};WjcFinancialChartSeries.parentProp="series";WjcFinancialChartSeries.siblingId="series";return WjcFinancialChartSeries}(HTMLElement);exports.WjcFinancialChartSeries=WjcFinancialChartSeries;_wj_ns_exists_4&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-financial-chart-series",WjcFinancialChartSeries);