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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.hasOwnProperty.call(t,o)&&(e[o]=t[o]);e.default=t;return e};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_webcomponents_base_1=require("wijmo/wijmo.webcomponents.base"),wjcGridTransposedmultirow=__importStar(require("wijmo/wijmo.grid.transposedmultirow")),_wj_ns_exists_16=!0,WjcTransposedMultiRow=function(t){__extends(WjcTransposedMultiRow,t);function WjcTransposedMultiRow(){var e=t.call(this,document.createElement("div"))||this;e._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(e);return e}Object.defineProperty(WjcTransposedMultiRow,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcTransposedMultiRow.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcTransposedMultiRow.prototype.attributeChangedCallback=function(t,e,o){this._wjBehaviour.lhAttributeChanged(t,e,o)};WjcTransposedMultiRow.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcTransposedMultiRow.prototype.addEventListener=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):t.prototype.addEventListener.apply(this,e)};return WjcTransposedMultiRow}(wjcGridTransposedmultirow.TransposedMultiRow);exports.WjcTransposedMultiRow=WjcTransposedMultiRow;_wj_ns_exists_16&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-transposed-multi-row",WjcTransposedMultiRow);