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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(t[o]=e[o]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_webcomponents_base_1=require("wijmo/wijmo.webcomponents.base"),wjcChartMap=__importStar(require("wijmo/wijmo.chart.map")),_wj_ns_exists_25=!0,WjcFlexMap=function(e){__extends(WjcFlexMap,e);function WjcFlexMap(){var t=e.call(this,document.createElement("div"))||this;t._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcFlexMap,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcFlexMap.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcFlexMap.prototype.attributeChangedCallback=function(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)};WjcFlexMap.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcFlexMap.prototype.addEventListener=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];"string"==typeof t[0]?HTMLElement.prototype.addEventListener.apply(this,t):e.prototype.addEventListener.apply(this,t)};return WjcFlexMap}(wjcChartMap.FlexMap);exports.WjcFlexMap=WjcFlexMap;_wj_ns_exists_25&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-flex-map",WjcFlexMap);var WjcScatterMapLayer=function(e){__extends(WjcScatterMapLayer,e);function WjcScatterMapLayer(){var t=e.call(this)||this;t._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcScatterMapLayer,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcScatterMapLayer.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcScatterMapLayer.prototype.attributeChangedCallback=function(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)};WjcScatterMapLayer.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcScatterMapLayer.wrappedClass=function(){return wjcChartMap.ScatterMapLayer};WjcScatterMapLayer.parentProp="layers";WjcScatterMapLayer.siblingId="layers";return WjcScatterMapLayer}(HTMLElement);exports.WjcScatterMapLayer=WjcScatterMapLayer;_wj_ns_exists_25&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-scatter-map-layer",WjcScatterMapLayer);var WjcGeoMapLayer=function(e){__extends(WjcGeoMapLayer,e);function WjcGeoMapLayer(){var t=e.call(this)||this;t._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcGeoMapLayer,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcGeoMapLayer.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcGeoMapLayer.prototype.attributeChangedCallback=function(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)};WjcGeoMapLayer.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcGeoMapLayer.wrappedClass=function(){return wjcChartMap.GeoMapLayer};WjcGeoMapLayer.parentProp="layers";WjcGeoMapLayer.siblingId="layers";return WjcGeoMapLayer}(HTMLElement);exports.WjcGeoMapLayer=WjcGeoMapLayer;_wj_ns_exists_25&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-geo-map-layer",WjcGeoMapLayer);var WjcGeoGridLayer=function(e){__extends(WjcGeoGridLayer,e);function WjcGeoGridLayer(){var t=e.call(this)||this;t._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcGeoGridLayer,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcGeoGridLayer.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcGeoGridLayer.prototype.attributeChangedCallback=function(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)};WjcGeoGridLayer.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcGeoGridLayer.wrappedClass=function(){return wjcChartMap.GeoGridLayer};WjcGeoGridLayer.parentProp="layers";WjcGeoGridLayer.siblingId="layers";return WjcGeoGridLayer}(HTMLElement);exports.WjcGeoGridLayer=WjcGeoGridLayer;_wj_ns_exists_25&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-geo-grid-layer",WjcGeoGridLayer);var WjcColorScale=function(e){__extends(WjcColorScale,e);function WjcColorScale(){var t=e.call(this)||this;t._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcColorScale,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcColorScale.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcColorScale.prototype.attributeChangedCallback=function(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)};WjcColorScale.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcColorScale.wrappedClass=function(){return wjcChartMap.ColorScale};WjcColorScale.parentProp="colorScale";return WjcColorScale}(HTMLElement);exports.WjcColorScale=WjcColorScale;_wj_ns_exists_25&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-color-scale",WjcColorScale);