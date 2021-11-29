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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var i in r)r.hasOwnProperty(i)&&(e[i]=r[i])})(e,r)};return function(e,r){extendStatics(e,r);function __(){this.constructor=e}e.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}(),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.default=e;return r};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_vue2_base_1=require("wijmo/wijmo.vue2.base"),wjcGridFilter=__importStar(require("wijmo/wijmo.grid.filter")),WjFlexGridFilterBehavior=function(e){__extends(WjFlexGridFilterBehavior,e);function WjFlexGridFilterBehavior(){return null!==e&&e.apply(this,arguments)||this}WjFlexGridFilterBehavior.tag="wj-flex-grid-filter";WjFlexGridFilterBehavior.parentInCtor=!0;WjFlexGridFilterBehavior.props=["showFilterIcons","showSortButtons","defaultFilterType","filterColumns"];WjFlexGridFilterBehavior.events=["initialized","editingFilter","filterChanging","filterChanged","filterApplied"];WjFlexGridFilterBehavior.classCtor=function(){return wjcGridFilter.FlexGridFilter};return WjFlexGridFilterBehavior}(wijmo_vue2_base_1.WjComponentBehavior);exports.WjFlexGridFilter=WjFlexGridFilterBehavior.register();function registerV3WjFlexGridFilter(e){e.component(WjFlexGridFilterBehavior.tag,exports.WjFlexGridFilter)}function registerGridFilter(e){wijmo_vue2_base_1.VueApi.isV3Plus&&registerV3WjFlexGridFilter(e)}exports.registerGridFilter=registerGridFilter;