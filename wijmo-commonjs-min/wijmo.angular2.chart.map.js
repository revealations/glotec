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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,r,o){var a,n=arguments.length,i=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(n<3?a(i):n>3?a(t,r,i):a(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},__param=this&&this.__param||function(e,t){return function(r,o){t(r,o,e)}},__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase"),wjcChartMap=__importStar(require("wijmo/wijmo.chart.map")),wjFlexMapMeta={selector:"wj-flex-map",template:"<div><ng-content></ng-content></div>",inputs:["wjModelProperty","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","center","zoom"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjFlexMapMeta=wjFlexMapMeta;var WjFlexMap=function(e){__extends(WjFlexMap,e);function WjFlexMap(t,r,o){var a=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,r))||this;a.isInitialized=!1;a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,r,o);a.created();return a}t=WjFlexMap;WjFlexMap.prototype.created=function(){};WjFlexMap.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexMap.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexMap.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjFlexMap.prototype.addEventListener=function(t,r,o,a){var n=this;void 0===a&&(a=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,c=i.getZone(this);c&&i.outsideZoneEvents[r]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,t,r,o,a)})):e.prototype.addEventListener.call(this,t,r,o,a)};Object.defineProperty(WjFlexMap.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(e){this.tooltip.content=e},enumerable:!0,configurable:!0});var t;WjFlexMap.meta={outputs:wjFlexMapMeta.outputs};return WjFlexMap=t=__decorate([core_1.Component({selector:wjFlexMapMeta.selector,template:wjFlexMapMeta.template,inputs:wjFlexMapMeta.inputs,outputs:wjFlexMapMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexMapMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexMap)}(wjcChartMap.FlexMap);exports.WjFlexMap=WjFlexMap;var wjScatterMapLayerMeta={selector:"wj-scatter-map-layer",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","style","itemsSource","url","symbolSize","symbolMinSize","symbolMaxSize","binding"],outputs:["initialized","itemsSourceChangedNg: itemsSourceChanged","itemsSourceChangePC: itemsSourceChange"],providers:[]};exports.wjScatterMapLayerMeta=wjScatterMapLayerMeta;var WjScatterMapLayer=function(e){__extends(WjScatterMapLayer,e);function WjScatterMapLayer(t,r,o){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="layers";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,r,o);a.created();return a}t=WjScatterMapLayer;WjScatterMapLayer.prototype.created=function(){};WjScatterMapLayer.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjScatterMapLayer.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjScatterMapLayer.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjScatterMapLayer.meta={outputs:wjScatterMapLayerMeta.outputs,changeEvents:{itemsSourceChanged:["itemsSource"]},siblingId:"layers"};return WjScatterMapLayer=t=__decorate([core_1.Component({selector:wjScatterMapLayerMeta.selector,template:wjScatterMapLayerMeta.template,inputs:wjScatterMapLayerMeta.inputs,outputs:wjScatterMapLayerMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjScatterMapLayerMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjScatterMapLayer)}(wjcChartMap.ScatterMapLayer);exports.WjScatterMapLayer=WjScatterMapLayer;var wjGeoMapLayerMeta={selector:"wj-geo-map-layer",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","style","itemsSource","url","itemFormatter"],outputs:["initialized","itemsSourceChangedNg: itemsSourceChanged","itemsSourceChangePC: itemsSourceChange"],providers:[]};exports.wjGeoMapLayerMeta=wjGeoMapLayerMeta;var WjGeoMapLayer=function(e){__extends(WjGeoMapLayer,e);function WjGeoMapLayer(t,r,o){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="layers";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,r,o);a.created();return a}t=WjGeoMapLayer;WjGeoMapLayer.prototype.created=function(){};WjGeoMapLayer.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjGeoMapLayer.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjGeoMapLayer.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjGeoMapLayer.meta={outputs:wjGeoMapLayerMeta.outputs,changeEvents:{itemsSourceChanged:["itemsSource"]},siblingId:"layers"};return WjGeoMapLayer=t=__decorate([core_1.Component({selector:wjGeoMapLayerMeta.selector,template:wjGeoMapLayerMeta.template,inputs:wjGeoMapLayerMeta.inputs,outputs:wjGeoMapLayerMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjGeoMapLayerMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjGeoMapLayer)}(wjcChartMap.GeoMapLayer);exports.WjGeoMapLayer=WjGeoMapLayer;var wjGeoGridLayerMeta={selector:"wj-geo-grid-layer",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","style","itemsSource","url"],outputs:["initialized","itemsSourceChangedNg: itemsSourceChanged","itemsSourceChangePC: itemsSourceChange"],providers:[]};exports.wjGeoGridLayerMeta=wjGeoGridLayerMeta;var WjGeoGridLayer=function(e){__extends(WjGeoGridLayer,e);function WjGeoGridLayer(t,r,o){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="layers";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,r,o);a.created();return a}t=WjGeoGridLayer;WjGeoGridLayer.prototype.created=function(){};WjGeoGridLayer.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjGeoGridLayer.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjGeoGridLayer.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjGeoGridLayer.meta={outputs:wjGeoGridLayerMeta.outputs,changeEvents:{itemsSourceChanged:["itemsSource"]},siblingId:"layers"};return WjGeoGridLayer=t=__decorate([core_1.Component({selector:wjGeoGridLayerMeta.selector,template:wjGeoGridLayerMeta.template,inputs:wjGeoGridLayerMeta.inputs,outputs:wjGeoGridLayerMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjGeoGridLayerMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjGeoGridLayer)}(wjcChartMap.GeoGridLayer);exports.WjGeoGridLayer=WjGeoGridLayer;var wjColorScaleMeta={selector:"wj-color-scale",template:"",inputs:["wjProperty","scale","binding","colorUnknown","colors","format"],outputs:["initialized"],providers:[]};exports.wjColorScaleMeta=wjColorScaleMeta;var WjColorScale=function(e){__extends(WjColorScale,e);function WjColorScale(t,r,o){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="colorScale";a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,r,o);a.created();return a}t=WjColorScale;WjColorScale.prototype.created=function(){};WjColorScale.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjColorScale.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjColorScale.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjColorScale.meta={outputs:wjColorScaleMeta.outputs};return WjColorScale=t=__decorate([core_1.Component({selector:wjColorScaleMeta.selector,template:wjColorScaleMeta.template,inputs:wjColorScaleMeta.inputs,outputs:wjColorScaleMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjColorScaleMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjColorScale)}(wjcChartMap.ColorScale);exports.WjColorScale=WjColorScale;var moduleExports=[WjFlexMap,WjScatterMapLayer,WjGeoMapLayer,WjGeoGridLayer,WjColorScale],WjChartMapModule=function(){function WjChartMapModule(){}return WjChartMapModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],WjChartMapModule)}();exports.WjChartMapModule=WjChartMapModule;