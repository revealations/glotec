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

"use strict";var __decorate=this&&this.__decorate||function(o,e,t,r){var i,n=arguments.length,p=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(o,e,t,r);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(p=(n<3?i(p):n>3?i(e,t,p):i(e,t))||p);return n>3&&p&&Object.defineProperty(e,t,p),p},__param=this&&this.__param||function(o,e){return function(t,r){e(t,r,o)}},__importStar=this&&this.__importStar||function(o){if(o&&o.__esModule)return o;var e={};if(null!=o)for(var t in o)Object.hasOwnProperty.call(o,t)&&(e[t]=o[t]);e.default=o;return e};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase"),ngCore=__importStar(require("@angular/core")),wjcCore=__importStar(require("wijmo/wijmo")),wjTooltipMeta={selector:"[wjTooltip]",inputs:[],outputs:["initialized"],exportAs:"wjTooltip",providers:[]};exports.wjTooltipMeta=wjTooltipMeta;var WjTooltip=function(){function WjTooltip(e,t,r){this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,r);this._elRef=e;o._toolTip||(o._toolTip=new wjcCore.Tooltip);this.created()}o=WjTooltip;WjTooltip.prototype.created=function(){};WjTooltip.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjTooltip.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjTooltip.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy();this.wjTooltip=null};Object.defineProperty(WjTooltip.prototype,"wjTooltip",{get:function(){return this._toolTipText},set:function(e){if(this._toolTipText!=e){this._toolTipText=e;o._toolTip.setTooltip(this._elRef.nativeElement,e,this._toolTipPosition)}},enumerable:!0,configurable:!0});Object.defineProperty(WjTooltip.prototype,"wjTooltipPosition",{get:function(){return this._toolTipPosition},set:function(e){if(this._toolTipText){var t=wjcCore.asEnum(e,wjcCore.PopupPosition);if(this._toolTipPosition!=t){this._toolTipPosition=t;o._toolTip.setTooltip(this._elRef.nativeElement,this._toolTipText,t)}}},enumerable:!0,configurable:!0});var o;WjTooltip.meta={outputs:wjTooltipMeta.outputs};__decorate([core_1.Input()],WjTooltip.prototype,"wjTooltip",null);__decorate([core_1.Input()],WjTooltip.prototype,"wjTooltipPosition",null);return WjTooltip=o=__decorate([core_1.Directive({selector:wjTooltipMeta.selector,inputs:wjTooltipMeta.inputs,outputs:wjTooltipMeta.outputs,exportAs:wjTooltipMeta.exportAs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return o}))}].concat(wjTooltipMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjTooltip)}();exports.WjTooltip=WjTooltip;var WjComponentLoader=function(){function WjComponentLoader(o,e){this._cmpResolver=o;this._elementRef=e;this._isInit=!1;this.propertiesChange=new ngCore.EventEmitter}Object.defineProperty(WjComponentLoader.prototype,"component",{get:function(){return this._component},set:function(o){if(this._component!==o){this._component=o;this._createComponent()}},enumerable:!0,configurable:!0});Object.defineProperty(WjComponentLoader.prototype,"properties",{get:function(){return this._properties},set:function(o){this._properties=o;this._updateProperties()},enumerable:!0,configurable:!0});WjComponentLoader.prototype.ngOnInit=function(){this._isInit=!0;this._createComponent()};WjComponentLoader.prototype._createComponent=function(){if(this._isInit){if(this._cmpRef){this._cmpRef.destroy();this._cmpRef=null}var o=this._component;if(o&&this._anchor){this._cmpRef=this._anchor.createComponent(this._cmpResolver.resolveComponentFactory(o));this._updateProperties()}}};WjComponentLoader.prototype._updateProperties=function(){var o=this._cmpRef&&this._cmpRef.instance,e=this.properties;if(o&&e)for(var t=0,r=Object.getOwnPropertyNames(e);t<r.length;t++){var i=r[t];o[i]=e[i];var n=o[i+"Change"];n instanceof core_1.EventEmitter&&this._addPropListener(o,i,n)}};WjComponentLoader.prototype._addPropListener=function(o,e,t){var r=this;t.subscribe((function(t){r.properties[e]=r.properties[e]=o[e];r.propertiesChange.next(r.properties)}))};__decorate([core_1.ViewChild("anchor",{read:core_1.ViewContainerRef,static:!0})],WjComponentLoader.prototype,"_anchor",void 0);return WjComponentLoader=__decorate([core_1.Component({selector:"wj-component-loader",template:"<div #anchor></div>",inputs:["component","properties"],outputs:["propertiesChange"]}),__param(0,core_1.Inject(core_1.ComponentFactoryResolver)),__param(1,core_1.Inject(core_1.ElementRef))],WjComponentLoader)}();exports.WjComponentLoader=WjComponentLoader;var moduleExports=[WjTooltip,WjComponentLoader],WjCoreModule=function(){function WjCoreModule(){}return WjCoreModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],WjCoreModule)}();exports.WjCoreModule=WjCoreModule;