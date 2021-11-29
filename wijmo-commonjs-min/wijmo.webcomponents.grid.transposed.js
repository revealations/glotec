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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var r in o)o.hasOwnProperty(r)&&(e[r]=o[r])})(e,o)};return function(e,o){extendStatics(e,o);function __(){this.constructor=e}e.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}(),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(o[r]=e[r]);o.default=e;return o};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_webcomponents_base_1=require("wijmo/wijmo.webcomponents.base"),wjcGridTransposed=__importStar(require("wijmo/wijmo.grid.transposed")),_wj_ns_exists_15=!0,WjcTransposedGrid=function(e){__extends(WjcTransposedGrid,e);function WjcTransposedGrid(){var o=e.call(this,document.createElement("div"))||this;o._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(o);return o}Object.defineProperty(WjcTransposedGrid,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcTransposedGrid.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcTransposedGrid.prototype.attributeChangedCallback=function(e,o,r){this._wjBehaviour.lhAttributeChanged(e,o,r)};WjcTransposedGrid.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcTransposedGrid.prototype.addEventListener=function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];"string"==typeof o[0]?HTMLElement.prototype.addEventListener.apply(this,o):e.prototype.addEventListener.apply(this,o)};return WjcTransposedGrid}(wjcGridTransposed.TransposedGrid);exports.WjcTransposedGrid=WjcTransposedGrid;_wj_ns_exists_15&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-transposed-grid",WjcTransposedGrid);var WjcTransposedGridRow=function(e){__extends(WjcTransposedGridRow,e);function WjcTransposedGridRow(){var o=e.call(this)||this;o._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(o);return o}Object.defineProperty(WjcTransposedGridRow,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcTransposedGridRow.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcTransposedGridRow.prototype.attributeChangedCallback=function(e,o,r){this._wjBehaviour.lhAttributeChanged(e,o,r)};WjcTransposedGridRow.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcTransposedGridRow.prototype._beforeInitParent=function(){var e=this.parentElement.control;if(e.autoGenerateRows){e.autoGenerateRows=!1;e._rowInfo.clear()}};WjcTransposedGridRow.wrappedClass=function(){return wjcGridTransposed.TransposedGridRow};WjcTransposedGridRow.parentProp="_rowInfo";return WjcTransposedGridRow}(HTMLElement);exports.WjcTransposedGridRow=WjcTransposedGridRow;_wj_ns_exists_15&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-transposed-grid-row",WjcTransposedGridRow);