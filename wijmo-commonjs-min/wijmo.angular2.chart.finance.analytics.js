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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,i,r){var a,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(n<3?a(o):n>3?a(t,i,o):a(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},__param=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}},__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase"),wjcChartFinanceAnalytics=__importStar(require("wijmo/wijmo.chart.finance.analytics")),wjFlexChartFibonacciMeta={selector:"wj-flex-chart-fibonacci",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","high","low","labelPosition","levels","minX","maxX","uptrend"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartFibonacciMeta=wjFlexChartFibonacciMeta;var WjFlexChartFibonacci=function(e){__extends(WjFlexChartFibonacci,e);function WjFlexChartFibonacci(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartFibonacci;WjFlexChartFibonacci.prototype.created=function(){};WjFlexChartFibonacci.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartFibonacci.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartFibonacci.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartFibonacci.meta={outputs:wjFlexChartFibonacciMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};return WjFlexChartFibonacci=t=__decorate([core_1.Component({selector:wjFlexChartFibonacciMeta.selector,template:wjFlexChartFibonacciMeta.template,inputs:wjFlexChartFibonacciMeta.inputs,outputs:wjFlexChartFibonacciMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartFibonacciMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartFibonacci)}(wjcChartFinanceAnalytics.Fibonacci);exports.WjFlexChartFibonacci=WjFlexChartFibonacci;var wjFlexChartFibonacciArcsMeta={selector:"wj-flex-chart-fibonacci-arcs",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","start","end","labelPosition","levels"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartFibonacciArcsMeta=wjFlexChartFibonacciArcsMeta;var WjFlexChartFibonacciArcs=function(e){__extends(WjFlexChartFibonacciArcs,e);function WjFlexChartFibonacciArcs(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartFibonacciArcs;WjFlexChartFibonacciArcs.prototype.created=function(){};WjFlexChartFibonacciArcs.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartFibonacciArcs.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartFibonacciArcs.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartFibonacciArcs.meta={outputs:wjFlexChartFibonacciArcsMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};return WjFlexChartFibonacciArcs=t=__decorate([core_1.Component({selector:wjFlexChartFibonacciArcsMeta.selector,template:wjFlexChartFibonacciArcsMeta.template,inputs:wjFlexChartFibonacciArcsMeta.inputs,outputs:wjFlexChartFibonacciArcsMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartFibonacciArcsMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartFibonacciArcs)}(wjcChartFinanceAnalytics.FibonacciArcs);exports.WjFlexChartFibonacciArcs=WjFlexChartFibonacciArcs;var wjFlexChartFibonacciFansMeta={selector:"wj-flex-chart-fibonacci-fans",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","start","end","labelPosition","levels"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartFibonacciFansMeta=wjFlexChartFibonacciFansMeta;var WjFlexChartFibonacciFans=function(e){__extends(WjFlexChartFibonacciFans,e);function WjFlexChartFibonacciFans(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartFibonacciFans;WjFlexChartFibonacciFans.prototype.created=function(){};WjFlexChartFibonacciFans.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartFibonacciFans.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartFibonacciFans.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartFibonacciFans.meta={outputs:wjFlexChartFibonacciFansMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};return WjFlexChartFibonacciFans=t=__decorate([core_1.Component({selector:wjFlexChartFibonacciFansMeta.selector,template:wjFlexChartFibonacciFansMeta.template,inputs:wjFlexChartFibonacciFansMeta.inputs,outputs:wjFlexChartFibonacciFansMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartFibonacciFansMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartFibonacciFans)}(wjcChartFinanceAnalytics.FibonacciFans);exports.WjFlexChartFibonacciFans=WjFlexChartFibonacciFans;var wjFlexChartFibonacciTimeZonesMeta={selector:"wj-flex-chart-fibonacci-time-zones",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","startX","endX","labelPosition","levels"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartFibonacciTimeZonesMeta=wjFlexChartFibonacciTimeZonesMeta;var WjFlexChartFibonacciTimeZones=function(e){__extends(WjFlexChartFibonacciTimeZones,e);function WjFlexChartFibonacciTimeZones(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartFibonacciTimeZones;WjFlexChartFibonacciTimeZones.prototype.created=function(){};WjFlexChartFibonacciTimeZones.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartFibonacciTimeZones.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartFibonacciTimeZones.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartFibonacciTimeZones.meta={outputs:wjFlexChartFibonacciTimeZonesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};return WjFlexChartFibonacciTimeZones=t=__decorate([core_1.Component({selector:wjFlexChartFibonacciTimeZonesMeta.selector,template:wjFlexChartFibonacciTimeZonesMeta.template,inputs:wjFlexChartFibonacciTimeZonesMeta.inputs,outputs:wjFlexChartFibonacciTimeZonesMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartFibonacciTimeZonesMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartFibonacciTimeZones)}(wjcChartFinanceAnalytics.FibonacciTimeZones);exports.WjFlexChartFibonacciTimeZones=WjFlexChartFibonacciTimeZones;var wjFlexChartAtrMeta={selector:"wj-flex-chart-atr",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartAtrMeta=wjFlexChartAtrMeta;var WjFlexChartAtr=function(e){__extends(WjFlexChartAtr,e);function WjFlexChartAtr(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartAtr;WjFlexChartAtr.prototype.created=function(){};WjFlexChartAtr.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAtr.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAtr.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartAtr.meta={outputs:wjFlexChartAtrMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};return WjFlexChartAtr=t=__decorate([core_1.Component({selector:wjFlexChartAtrMeta.selector,template:wjFlexChartAtrMeta.template,inputs:wjFlexChartAtrMeta.inputs,outputs:wjFlexChartAtrMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartAtrMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartAtr)}(wjcChartFinanceAnalytics.ATR);exports.WjFlexChartAtr=WjFlexChartAtr;var wjFlexChartCciMeta={selector:"wj-flex-chart-cci",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","constant"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartCciMeta=wjFlexChartCciMeta;var WjFlexChartCci=function(e){__extends(WjFlexChartCci,e);function WjFlexChartCci(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartCci;WjFlexChartCci.prototype.created=function(){};WjFlexChartCci.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartCci.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartCci.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartCci.meta={outputs:wjFlexChartCciMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};return WjFlexChartCci=t=__decorate([core_1.Component({selector:wjFlexChartCciMeta.selector,template:wjFlexChartCciMeta.template,inputs:wjFlexChartCciMeta.inputs,outputs:wjFlexChartCciMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartCciMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartCci)}(wjcChartFinanceAnalytics.CCI);exports.WjFlexChartCci=WjFlexChartCci;var wjFlexChartRsiMeta={selector:"wj-flex-chart-rsi",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartRsiMeta=wjFlexChartRsiMeta;var WjFlexChartRsi=function(e){__extends(WjFlexChartRsi,e);function WjFlexChartRsi(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartRsi;WjFlexChartRsi.prototype.created=function(){};WjFlexChartRsi.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartRsi.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartRsi.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartRsi.meta={outputs:wjFlexChartRsiMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};return WjFlexChartRsi=t=__decorate([core_1.Component({selector:wjFlexChartRsiMeta.selector,template:wjFlexChartRsiMeta.template,inputs:wjFlexChartRsiMeta.inputs,outputs:wjFlexChartRsiMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartRsiMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartRsi)}(wjcChartFinanceAnalytics.RSI);exports.WjFlexChartRsi=WjFlexChartRsi;var wjFlexChartWilliamsRMeta={selector:"wj-flex-chart-williams-r",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartWilliamsRMeta=wjFlexChartWilliamsRMeta;var WjFlexChartWilliamsR=function(e){__extends(WjFlexChartWilliamsR,e);function WjFlexChartWilliamsR(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartWilliamsR;WjFlexChartWilliamsR.prototype.created=function(){};WjFlexChartWilliamsR.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartWilliamsR.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartWilliamsR.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartWilliamsR.meta={outputs:wjFlexChartWilliamsRMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};return WjFlexChartWilliamsR=t=__decorate([core_1.Component({selector:wjFlexChartWilliamsRMeta.selector,template:wjFlexChartWilliamsRMeta.template,inputs:wjFlexChartWilliamsRMeta.inputs,outputs:wjFlexChartWilliamsRMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartWilliamsRMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartWilliamsR)}(wjcChartFinanceAnalytics.WilliamsR);exports.WjFlexChartWilliamsR=WjFlexChartWilliamsR;var wjFlexChartMacdMeta={selector:"wj-flex-chart-macd",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","fastPeriod","slowPeriod","smoothingPeriod","styles"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartMacdMeta=wjFlexChartMacdMeta;var WjFlexChartMacd=function(e){__extends(WjFlexChartMacd,e);function WjFlexChartMacd(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartMacd;WjFlexChartMacd.prototype.created=function(){};WjFlexChartMacd.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartMacd.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartMacd.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartMacd.meta={outputs:wjFlexChartMacdMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};return WjFlexChartMacd=t=__decorate([core_1.Component({selector:wjFlexChartMacdMeta.selector,template:wjFlexChartMacdMeta.template,inputs:wjFlexChartMacdMeta.inputs,outputs:wjFlexChartMacdMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartMacdMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartMacd)}(wjcChartFinanceAnalytics.Macd);exports.WjFlexChartMacd=WjFlexChartMacd;var wjFlexChartMacdHistogramMeta={selector:"wj-flex-chart-macd-histogram",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","fastPeriod","slowPeriod","smoothingPeriod"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartMacdHistogramMeta=wjFlexChartMacdHistogramMeta;var WjFlexChartMacdHistogram=function(e){__extends(WjFlexChartMacdHistogram,e);function WjFlexChartMacdHistogram(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartMacdHistogram;WjFlexChartMacdHistogram.prototype.created=function(){};WjFlexChartMacdHistogram.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartMacdHistogram.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartMacdHistogram.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartMacdHistogram.meta={outputs:wjFlexChartMacdHistogramMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};return WjFlexChartMacdHistogram=t=__decorate([core_1.Component({selector:wjFlexChartMacdHistogramMeta.selector,template:wjFlexChartMacdHistogramMeta.template,inputs:wjFlexChartMacdHistogramMeta.inputs,outputs:wjFlexChartMacdHistogramMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartMacdHistogramMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartMacdHistogram)}(wjcChartFinanceAnalytics.MacdHistogram);exports.WjFlexChartMacdHistogram=WjFlexChartMacdHistogram;var wjFlexChartStochasticMeta={selector:"wj-flex-chart-stochastic",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","dPeriod","kPeriod","smoothingPeriod","styles"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartStochasticMeta=wjFlexChartStochasticMeta;var WjFlexChartStochastic=function(e){__extends(WjFlexChartStochastic,e);function WjFlexChartStochastic(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartStochastic;WjFlexChartStochastic.prototype.created=function(){};WjFlexChartStochastic.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartStochastic.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartStochastic.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartStochastic.meta={outputs:wjFlexChartStochasticMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};return WjFlexChartStochastic=t=__decorate([core_1.Component({selector:wjFlexChartStochasticMeta.selector,template:wjFlexChartStochasticMeta.template,inputs:wjFlexChartStochasticMeta.inputs,outputs:wjFlexChartStochasticMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartStochasticMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartStochastic)}(wjcChartFinanceAnalytics.Stochastic);exports.WjFlexChartStochastic=WjFlexChartStochastic;var wjFlexChartBollingerBandsMeta={selector:"wj-flex-chart-bollinger-bands",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","multiplier"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartBollingerBandsMeta=wjFlexChartBollingerBandsMeta;var WjFlexChartBollingerBands=function(e){__extends(WjFlexChartBollingerBands,e);function WjFlexChartBollingerBands(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartBollingerBands;WjFlexChartBollingerBands.prototype.created=function(){};WjFlexChartBollingerBands.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartBollingerBands.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartBollingerBands.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartBollingerBands.meta={outputs:wjFlexChartBollingerBandsMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};return WjFlexChartBollingerBands=t=__decorate([core_1.Component({selector:wjFlexChartBollingerBandsMeta.selector,template:wjFlexChartBollingerBandsMeta.template,inputs:wjFlexChartBollingerBandsMeta.inputs,outputs:wjFlexChartBollingerBandsMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartBollingerBandsMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartBollingerBands)}(wjcChartFinanceAnalytics.BollingerBands);exports.WjFlexChartBollingerBands=WjFlexChartBollingerBands;var wjFlexChartEnvelopesMeta={selector:"wj-flex-chart-envelopes",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","size","type"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartEnvelopesMeta=wjFlexChartEnvelopesMeta;var WjFlexChartEnvelopes=function(e){__extends(WjFlexChartEnvelopes,e);function WjFlexChartEnvelopes(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartEnvelopes;WjFlexChartEnvelopes.prototype.created=function(){};WjFlexChartEnvelopes.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartEnvelopes.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartEnvelopes.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartEnvelopes.meta={outputs:wjFlexChartEnvelopesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};return WjFlexChartEnvelopes=t=__decorate([core_1.Component({selector:wjFlexChartEnvelopesMeta.selector,template:wjFlexChartEnvelopesMeta.template,inputs:wjFlexChartEnvelopesMeta.inputs,outputs:wjFlexChartEnvelopesMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartEnvelopesMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartEnvelopes)}(wjcChartFinanceAnalytics.Envelopes);exports.WjFlexChartEnvelopes=WjFlexChartEnvelopes;var moduleExports=[WjFlexChartFibonacci,WjFlexChartFibonacciArcs,WjFlexChartFibonacciFans,WjFlexChartFibonacciTimeZones,WjFlexChartAtr,WjFlexChartCci,WjFlexChartRsi,WjFlexChartWilliamsR,WjFlexChartMacd,WjFlexChartMacdHistogram,WjFlexChartStochastic,WjFlexChartBollingerBands,WjFlexChartEnvelopes],WjChartFinanceAnalyticsModule=function(){function WjChartFinanceAnalyticsModule(){}return WjChartFinanceAnalyticsModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],WjChartFinanceAnalyticsModule)}();exports.WjChartFinanceAnalyticsModule=WjChartFinanceAnalyticsModule;