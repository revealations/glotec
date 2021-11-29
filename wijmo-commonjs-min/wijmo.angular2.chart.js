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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,r,a){var i,n=arguments.length,o=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(n<3?i(o):n>3?i(t,r,o):i(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o},__param=this&&this.__param||function(e,t){return function(r,a){t(r,a,e)}},__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase"),wjcChart=__importStar(require("wijmo/wijmo.chart")),wjFlexChartMeta={selector:"wj-flex-chart",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","renderEngine","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingX","interpolateNulls","legendToggle","symbolSize","options","selection","itemFormatter","labelContent","chartType","rotated","stacking"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","selectionChangePC: selectionChange","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged","seriesVisibilityChangedNg: seriesVisibilityChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjFlexChartMeta=wjFlexChartMeta;var WjFlexChart=function(e){__extends(WjFlexChart,e);function WjFlexChart(t,r,a){var i=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,r))||this;i.isInitialized=!1;i._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(i,t,r,a);i.created();return i}t=WjFlexChart;WjFlexChart.prototype.created=function(){};WjFlexChart.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChart.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChart.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjFlexChart.prototype.addEventListener=function(t,r,a,i){var n=this;void 0===i&&(i=!1);var o=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,l=o.getZone(this);l&&o.outsideZoneEvents[r]?l.runOutsideAngular((function(){e.prototype.addEventListener.call(n,t,r,a,i)})):e.prototype.addEventListener.call(this,t,r,a,i)};Object.defineProperty(WjFlexChart.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(e){this.tooltip.content=e},enumerable:!0,configurable:!0});Object.defineProperty(WjFlexChart.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(e){this.dataLabel.content=e},enumerable:!0,configurable:!0});var t;WjFlexChart.meta={outputs:wjFlexChartMeta.outputs,changeEvents:{selectionChanged:["selection"]}};return WjFlexChart=t=__decorate([core_1.Component({selector:wjFlexChartMeta.selector,template:wjFlexChartMeta.template,inputs:wjFlexChartMeta.inputs,outputs:wjFlexChartMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChart)}(wjcChart.FlexChart);exports.WjFlexChart=WjFlexChart;var wjFlexPieMeta={selector:"wj-flex-pie",template:"<div><ng-content></ng-content></div>",inputs:["wjModelProperty","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingName","innerRadius","isAnimated","offset","reversed","startAngle","selectedIndex","selectedItemPosition","selectedItemOffset","itemFormatter","labelContent","titles","chartsPerLine"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjFlexPieMeta=wjFlexPieMeta;var WjFlexPie=function(e){__extends(WjFlexPie,e);function WjFlexPie(t,r,a){var i=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,r))||this;i.isInitialized=!1;i._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(i,t,r,a);i.created();return i}t=WjFlexPie;WjFlexPie.prototype.created=function(){};WjFlexPie.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexPie.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexPie.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjFlexPie.prototype.addEventListener=function(t,r,a,i){var n=this;void 0===i&&(i=!1);var o=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,l=o.getZone(this);l&&o.outsideZoneEvents[r]?l.runOutsideAngular((function(){e.prototype.addEventListener.call(n,t,r,a,i)})):e.prototype.addEventListener.call(this,t,r,a,i)};Object.defineProperty(WjFlexPie.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(e){this.tooltip.content=e},enumerable:!0,configurable:!0});Object.defineProperty(WjFlexPie.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(e){this.dataLabel.content=e},enumerable:!0,configurable:!0});var t;WjFlexPie.meta={outputs:wjFlexPieMeta.outputs};return WjFlexPie=t=__decorate([core_1.Component({selector:wjFlexPieMeta.selector,template:wjFlexPieMeta.template,inputs:wjFlexPieMeta.inputs,outputs:wjFlexPieMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexPieMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexPie)}(wjcChart.FlexPie);exports.WjFlexPie=WjFlexPie;var wjFlexChartAxisMeta={selector:"wj-flex-chart-axis",template:"",inputs:["wjProperty","axisLine","format","labels","majorGrid","majorTickMarks","majorUnit","max","min","position","reversed","title","labelAngle","minorGrid","minorTickMarks","minorUnit","origin","logBase","plotArea","labelAlign","name","overlappingLabels","labelPadding","itemFormatter","itemsSource","binding"],outputs:["initialized","rangeChangedNg: rangeChanged"],providers:[]};exports.wjFlexChartAxisMeta=wjFlexChartAxisMeta;var WjFlexChartAxis=function(e){__extends(WjFlexChartAxis,e);function WjFlexChartAxis(t,r,a){var i=e.call(this)||this;i.isInitialized=!1;i.wjProperty="axes";i._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(i,t,r,a);i.created();return i}t=WjFlexChartAxis;WjFlexChartAxis.prototype.created=function(){};WjFlexChartAxis.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAxis.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAxis.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartAxis.meta={outputs:wjFlexChartAxisMeta.outputs};return WjFlexChartAxis=t=__decorate([core_1.Component({selector:wjFlexChartAxisMeta.selector,template:wjFlexChartAxisMeta.template,inputs:wjFlexChartAxisMeta.inputs,outputs:wjFlexChartAxisMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartAxisMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartAxis)}(wjcChart.Axis);exports.WjFlexChartAxis=WjFlexChartAxis;var wjFlexChartLegendMeta={selector:"wj-flex-chart-legend",template:"",inputs:["wjProperty","orientation","position","title","titleAlign","maxSize"],outputs:["initialized"],providers:[]};exports.wjFlexChartLegendMeta=wjFlexChartLegendMeta;var WjFlexChartLegend=function(e){__extends(WjFlexChartLegend,e);function WjFlexChartLegend(t,r,a){var i=e.call(this,a)||this;i.isInitialized=!1;i.wjProperty="legend";i._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(i,t,r,a);i.created();return i}t=WjFlexChartLegend;WjFlexChartLegend.prototype.created=function(){};WjFlexChartLegend.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartLegend.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartLegend.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartLegend.meta={outputs:wjFlexChartLegendMeta.outputs};return WjFlexChartLegend=t=__decorate([core_1.Component({selector:wjFlexChartLegendMeta.selector,template:wjFlexChartLegendMeta.template,inputs:wjFlexChartLegendMeta.inputs,outputs:wjFlexChartLegendMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartLegendMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartLegend)}(wjcChart.Legend);exports.WjFlexChartLegend=WjFlexChartLegend;var wjFlexChartDataLabelMeta={selector:"wj-flex-chart-data-label",template:"",inputs:["wjProperty","content","border","offset","connectingLine","position"],outputs:["initialized","renderingNg: rendering"],providers:[]};exports.wjFlexChartDataLabelMeta=wjFlexChartDataLabelMeta;var WjFlexChartDataLabel=function(e){__extends(WjFlexChartDataLabel,e);function WjFlexChartDataLabel(t,r,a){var i=e.call(this)||this;i.isInitialized=!1;i.wjProperty="dataLabel";i._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(i,t,r,a);i.created();return i}t=WjFlexChartDataLabel;WjFlexChartDataLabel.prototype.created=function(){};WjFlexChartDataLabel.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartDataLabel.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartDataLabel.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartDataLabel.meta={outputs:wjFlexChartDataLabelMeta.outputs};return WjFlexChartDataLabel=t=__decorate([core_1.Component({selector:wjFlexChartDataLabelMeta.selector,template:wjFlexChartDataLabelMeta.template,inputs:wjFlexChartDataLabelMeta.inputs,outputs:wjFlexChartDataLabelMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartDataLabelMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartDataLabel)}(wjcChart.DataLabel);exports.WjFlexChartDataLabel=WjFlexChartDataLabel;var wjFlexPieDataLabelMeta={selector:"wj-flex-pie-data-label",template:"",inputs:["wjProperty","content","border","offset","connectingLine","position"],outputs:["initialized","renderingNg: rendering"],providers:[]};exports.wjFlexPieDataLabelMeta=wjFlexPieDataLabelMeta;var WjFlexPieDataLabel=function(e){__extends(WjFlexPieDataLabel,e);function WjFlexPieDataLabel(t,r,a){var i=e.call(this)||this;i.isInitialized=!1;i.wjProperty="dataLabel";i._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(i,t,r,a);i.created();return i}t=WjFlexPieDataLabel;WjFlexPieDataLabel.prototype.created=function(){};WjFlexPieDataLabel.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexPieDataLabel.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexPieDataLabel.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexPieDataLabel.meta={outputs:wjFlexPieDataLabelMeta.outputs};return WjFlexPieDataLabel=t=__decorate([core_1.Component({selector:wjFlexPieDataLabelMeta.selector,template:wjFlexPieDataLabelMeta.template,inputs:wjFlexPieDataLabelMeta.inputs,outputs:wjFlexPieDataLabelMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexPieDataLabelMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexPieDataLabel)}(wjcChart.PieDataLabel);exports.WjFlexPieDataLabel=WjFlexPieDataLabel;var wjFlexChartSeriesMeta={selector:"wj-flex-chart-series",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartSeriesMeta=wjFlexChartSeriesMeta;var WjFlexChartSeries=function(e){__extends(WjFlexChartSeries,e);function WjFlexChartSeries(t,r,a){var i=e.call(this)||this;i.isInitialized=!1;i.wjProperty="series";i._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(i,t,r,a);i.created();return i}t=WjFlexChartSeries;WjFlexChartSeries.prototype.created=function(){};WjFlexChartSeries.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartSeries.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartSeries.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartSeries.meta={outputs:wjFlexChartSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};return WjFlexChartSeries=t=__decorate([core_1.Component({selector:wjFlexChartSeriesMeta.selector,template:wjFlexChartSeriesMeta.template,inputs:wjFlexChartSeriesMeta.inputs,outputs:wjFlexChartSeriesMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartSeriesMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartSeries)}(wjcChart.Series);exports.WjFlexChartSeries=WjFlexChartSeries;var wjFlexChartLineMarkerMeta={selector:"wj-flex-line-marker",template:"",inputs:["wjProperty","isVisible","seriesIndex","horizontalPosition","content","verticalPosition","alignment","lines","interaction","dragLines","dragThreshold","dragContent"],outputs:["initialized","positionChangedNg: positionChanged"],providers:[]};exports.wjFlexChartLineMarkerMeta=wjFlexChartLineMarkerMeta;var WjFlexChartLineMarker=function(e){__extends(WjFlexChartLineMarker,e);function WjFlexChartLineMarker(t,r,a){var i=e.call(this,a)||this;i.isInitialized=!1;i._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(i,t,r,a);i.created();return i}t=WjFlexChartLineMarker;WjFlexChartLineMarker.prototype.created=function(){};WjFlexChartLineMarker.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartLineMarker.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartLineMarker.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartLineMarker.meta={outputs:wjFlexChartLineMarkerMeta.outputs};return WjFlexChartLineMarker=t=__decorate([core_1.Component({selector:wjFlexChartLineMarkerMeta.selector,template:wjFlexChartLineMarkerMeta.template,inputs:wjFlexChartLineMarkerMeta.inputs,outputs:wjFlexChartLineMarkerMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartLineMarkerMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartLineMarker)}(wjcChart.LineMarker);exports.WjFlexChartLineMarker=WjFlexChartLineMarker;var wjFlexChartDataPointMeta={selector:"wj-flex-chart-data-point",template:"",inputs:["wjProperty","x","y"],outputs:["initialized"],providers:[]};exports.wjFlexChartDataPointMeta=wjFlexChartDataPointMeta;var WjFlexChartDataPoint=function(e){__extends(WjFlexChartDataPoint,e);function WjFlexChartDataPoint(t,r,a){var i=e.call(this)||this;i.isInitialized=!1;i.wjProperty="";i._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(i,t,r,a);i.created();return i}t=WjFlexChartDataPoint;WjFlexChartDataPoint.prototype.created=function(){};WjFlexChartDataPoint.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartDataPoint.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartDataPoint.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartDataPoint.meta={outputs:wjFlexChartDataPointMeta.outputs};return WjFlexChartDataPoint=t=__decorate([core_1.Component({selector:wjFlexChartDataPointMeta.selector,template:wjFlexChartDataPointMeta.template,inputs:wjFlexChartDataPointMeta.inputs,outputs:wjFlexChartDataPointMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartDataPointMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartDataPoint)}(wjcChart.DataPoint);exports.WjFlexChartDataPoint=WjFlexChartDataPoint;var wjFlexChartPlotAreaMeta={selector:"wj-flex-chart-plot-area",template:"",inputs:["wjProperty","column","height","name","row","style","width"],outputs:["initialized"],providers:[]};exports.wjFlexChartPlotAreaMeta=wjFlexChartPlotAreaMeta;var WjFlexChartPlotArea=function(e){__extends(WjFlexChartPlotArea,e);function WjFlexChartPlotArea(t,r,a){var i=e.call(this)||this;i.isInitialized=!1;i.wjProperty="plotAreas";i._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(i,t,r,a);i.created();return i}t=WjFlexChartPlotArea;WjFlexChartPlotArea.prototype.created=function(){};WjFlexChartPlotArea.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartPlotArea.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartPlotArea.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartPlotArea.meta={outputs:wjFlexChartPlotAreaMeta.outputs};return WjFlexChartPlotArea=t=__decorate([core_1.Component({selector:wjFlexChartPlotAreaMeta.selector,template:wjFlexChartPlotAreaMeta.template,inputs:wjFlexChartPlotAreaMeta.inputs,outputs:wjFlexChartPlotAreaMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartPlotAreaMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartPlotArea)}(wjcChart.PlotArea);exports.WjFlexChartPlotArea=WjFlexChartPlotArea;var moduleExports=[WjFlexChart,WjFlexPie,WjFlexChartAxis,WjFlexChartLegend,WjFlexChartDataLabel,WjFlexPieDataLabel,WjFlexChartSeries,WjFlexChartLineMarker,WjFlexChartDataPoint,WjFlexChartPlotArea],WjChartModule=function(){function WjChartModule(){}return WjChartModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],WjChartModule)}();exports.WjChartModule=WjChartModule;