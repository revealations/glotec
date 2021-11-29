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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);e.default=t;return e};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_meta_1=require("wijmo/wijmo.meta"),mKo=__importStar(require("knockout")),MetaFactory=function(t){__extends(MetaFactory,t);function MetaFactory(){return null!==t&&t.apply(this,arguments)||this}MetaFactory.CreateProp=function(t,e,r,n,o,i){return new PropDesc(t,e,r,n,o,i)};MetaFactory.CreateEvent=function(t,e){return new EventDesc(t,e)};MetaFactory.CreateComplexProp=function(t,e,r){return new ComplexPropDesc(t,e,r)};MetaFactory.findProp=function(t,e){return wijmo_meta_1.ControlMetaFactory.findProp(t,e)};MetaFactory.findEvent=function(t,e){return wijmo_meta_1.ControlMetaFactory.findEvent(t,e)};MetaFactory.findComplexProp=function(t,e){return wijmo_meta_1.ControlMetaFactory.findComplexProp(t,e)};return MetaFactory}(wijmo_meta_1.ControlMetaFactory);exports.MetaFactory=MetaFactory;var PropDesc=function(t){__extends(PropDesc,t);function PropDesc(){return null!==t&&t.apply(this,arguments)||this}return PropDesc}(wijmo_meta_1.PropDescBase);exports.PropDesc=PropDesc;var EventDesc=function(t){__extends(EventDesc,t);function EventDesc(){return null!==t&&t.apply(this,arguments)||this}return EventDesc}(wijmo_meta_1.EventDescBase);exports.EventDesc=EventDesc;var ComplexPropDesc=function(t){__extends(ComplexPropDesc,t);function ComplexPropDesc(){return null!==t&&t.apply(this,arguments)||this}return ComplexPropDesc}(wijmo_meta_1.ComplexPropDescBase);exports.ComplexPropDesc=ComplexPropDesc;var wjKo=mKo,WjBinding=function(){function WjBinding(){this.init=function(t,e,r,n,o){this.ensureMetaData();return this._initImpl(t,e,r,n,o)}.bind(this);this.update=function(t,e,r,n,o){this._updateImpl(t,e,r,n,o)}.bind(this);this._updateImpl=function(t,e,r,n,o){t[WjBinding._wjContextProp].update(t,e,r,n,o)}}WjBinding.prototype.ensureMetaData=function(){if(!this._metaData){this._metaData=MetaFactory.getMetaData(this._getMetaDataId());this._initialize();this._metaData.prepare()}};WjBinding.prototype._initialize=function(){};WjBinding.prototype._getControlConstructor=function(){return null};WjBinding.prototype._getMetaDataId=function(){return this._getControlConstructor()};WjBinding.prototype._createControl=function(t){return new(this._getControlConstructor())(t)};WjBinding.prototype._createWijmoContext=function(){return new WjContext(this)};WjBinding.prototype._isChild=function(){return this._isParentInitializer()||this._isParentReferencer()};WjBinding.prototype._isParentInitializer=function(){return null!=this._metaData.parentProperty};WjBinding.prototype._isParentReferencer=function(){return null!=this._metaData.parentReferenceProperty};WjBinding.prototype._initImpl=function(t,e,r,n,o){var i=this._createWijmoContext();t[WjBinding._wjContextProp]=i;i.element=t;this._isChild()&&(i.parentWjContext=t.parentElement[WjBinding._wjContextProp]);i.valueAccessor=e;i.allBindings=r;i.viewModel=n;i.bindingContext=o;return i.init(t,e,r,n,o)};WjBinding._wjContextProp="__wjKoContext";WjBinding._parPropAttr="wjProperty";WjBinding._controlPropAttr="control";WjBinding._initPropAttr="isInitialized";WjBinding._initEventAttr="initialized";return WjBinding}();exports.WjBinding=WjBinding;var WjContext=function(){function WjContext(t){this._isInitialized=!1;this._isUpdatingControl=!1;this._isSourceDirty=!1;this._oldSourceValues={};this.wjBinding=t}WjContext.prototype.init=function(t,e,r,n,o){var i=e(),a=(this.wjBinding._metaData.props,this.wjBinding._metaData.events);if(this._isChild()){var s=i[WjBinding._parPropAttr],p=this.wjBinding._metaData,c=s&&wjKo.unwrap(s)||p.parentProperty;this._parentPropDesc=MetaFactory.findComplexProp(c,this.parentWjContext.wjBinding._metaData.complexProps)||new ComplexPropDesc(c,p.isParentPropertyArray,p.ownsObject)}this._initControl();this._safeUpdateSrcAttr(WjBinding._controlPropAttr,this.control);wjKo.applyBindingsToDescendants(o,t);this._childrenInitialized();for(var u in a)this._addEventHandler(a[u]);this._updateControl(e);this._safeNotifySrcAttr(WjBinding._controlPropAttr);this._updateSource();this._isInitialized=!0;this._safeUpdateSrcAttr(WjBinding._initPropAttr,!0);var _=i[WjBinding._initEventAttr];_&&wjKo.unwrap(_)(this.bindingContext.$data,this.control,void 0);return{controlsDescendantBindings:!0}};WjContext.prototype.update=function(t,e,r,n,o){this.valueAccessor=e;this._updateControl(e)};WjContext.prototype._createControl=function(){return this.wjBinding._createControl(this._parentInCtor()?this.parentWjContext.control:this.element)};WjContext.prototype._initControl=function(){if(this._isChild()){this.element.style.display="none";var t=this._getParentProp(),e=this.parentWjContext.control;if(this._useParentObj())this.control=e[t];else{var r=this.control=this._createControl();this._isParentInitializer()&&(this._isParentArray()?e[t].push(r):e[t]=r);this._isParentReferencer()&&!this._parentInCtor()&&(r[this._getParentReferenceProperty()]=e)}}else this.control=this._createControl()};WjContext.prototype._childrenInitialized=function(){};WjContext.prototype._addEventHandler=function(t){var e=this;this.control[t.eventName].addHandler((function(r,n){e._isInitialized&&e._updateSource();var o=e.valueAccessor()[t.eventName];o&&wjKo.unwrap(o)(e.bindingContext.$data,r,n)}),this)};WjContext.prototype._updateSource=function(){WjContext._isUpdatingSource=!0;try{var t=this.wjBinding._metaData.props;for(var e in t){var r=t[e],n=r.propertyName;r.shouldUpdateSource&&r.isNativeControlProperty&&this._safeUpdateSrcAttr(n,this.control[n])}}finally{WjContext._isUpdatingSource=!1;for(;WjContext._pendingSourceUpdates.length>0;){WjContext._pendingSourceUpdates.shift()._updateControl()}}};WjContext.prototype._updateControl=function(t){void 0===t&&(t=this.valueAccessor);var e=t(),r=this.wjBinding._metaData.props;if(WjContext._isUpdatingSource){WjContext._pendingSourceUpdates.indexOf(this)<0&&WjContext._pendingSourceUpdates.push(this);for(var n in r)wjKo.unwrap(e[r[n].propertyName])}else try{var o=[],i=[];for(var n in r){var a=e[c=(s=r[n]).propertyName];if(void 0!==a){if((p=wjKo.unwrap(a))!==this._oldSourceValues[c]||s.changeEvent&&p!==this.control[c]){this._oldSourceValues[c]=p;o.push(p);i.push(s)}}}for(var n in o){var s=i[n],p=wjKo.unwrap(e[s.propertyName]),c=s.propertyName;if(void 0!==p||this._isInitialized){var u=this._castValueToType(p,s);s.updateControl&&s.updateControl(this,s,this.control,p,u)||!s.isNativeControlProperty||this.control[c]!=u&&(this.control[c]=u)}}}finally{}};WjContext.prototype._castValueToType=function(t,e){return e.castValueToType(t)};WjContext.prototype._safeUpdateSrcAttr=function(t,e){var r=this.valueAccessor()[t];if(wjKo.isWritableObservable(r)){e!=wjKo.unwrap(r)&&r(e)}};WjContext.prototype._safeNotifySrcAttr=function(t){var e=this.valueAccessor()[t];wjKo.isWritableObservable(e)&&e.valueHasMutated&&e.valueHasMutated()};WjContext.prototype._isChild=function(){return this.wjBinding._isChild()};WjContext.prototype._isParentInitializer=function(){return this.wjBinding._isParentInitializer()};WjContext.prototype._isParentReferencer=function(){return this.wjBinding._isParentReferencer()};WjContext.prototype._getParentProp=function(){return this._isParentInitializer()?this._parentPropDesc.propertyName:void 0};WjContext.prototype._getParentReferenceProperty=function(){return this.wjBinding._metaData.parentReferenceProperty};WjContext.prototype._useParentObj=function(){return!this._isParentReferencer()&&this._isParentInitializer()&&!this._parentPropDesc.isArray&&!this._parentPropDesc.ownsObject};WjContext.prototype._isParentArray=function(){return this._parentPropDesc.isArray};WjContext.prototype._parentInCtor=function(){return this._isParentReferencer()&&""==this._getParentReferenceProperty()};WjContext._debugId=0;WjContext._isUpdatingSource=!1;WjContext._pendingSourceUpdates=[];return WjContext}();exports.WjContext=WjContext;var WjTagsPreprocessor=function(){function WjTagsPreprocessor(){}WjTagsPreprocessor._getSpecialProps=function(){var t={},e=WjBinding;t[e._controlPropAttr]=!0;t[e._parPropAttr]=!0;return t};WjTagsPreprocessor.prototype.register=function(){this._foreignProc=wjKo.bindingProvider.instance.preprocessNode;wjKo.bindingProvider.instance.preprocessNode=this.preprocessNode.bind(this)};WjTagsPreprocessor.prototype.preprocessNode=function(t){var e=WjTagsPreprocessor._dataBindAttr;if(1!=t.nodeType||!this._isWjTag(t.tagName))return this._delegate(t);var r=MetaFactory.toCamelCase(t.tagName),n=wjKo.bindingHandlers[r];if(!n)return this._delegate(t);n.ensureMetaData();for(var o,i="",a=t.attributes,s=document.createElement("div"),p=0;p<a.length;p++){var c=a[p];if(c.name.toLowerCase()!=e){var u=MetaFactory.toCamelCase(c.name);if(this._isWjProp(u,n._metaData)){i&&(i+=",");i+=u+":"+c.value}else s.setAttribute(c.name,c.value)}else o=c}i=r+":{"+i+"}";o&&o.value&&o.value.trim()&&(i+=","+o.value);s.setAttribute(e,i);for(;t.firstChild;)s.appendChild(t.firstChild);t.parentNode.replaceChild(s,t);return[s]};WjTagsPreprocessor.prototype._delegate=function(t){return this._foreignProc?this._foreignProc(t):void 0};WjTagsPreprocessor.prototype._isWjTag=function(t){var e=WjTagsPreprocessor._wjTagPrefix;return t&&t.length>e.length&&t.substr(0,e.length).toLowerCase()===e};WjTagsPreprocessor.prototype._isWjProp=function(t,e){return WjTagsPreprocessor._specialProps[t]||MetaFactory.findProp(t,e.props)||MetaFactory.findEvent(t,e.events)};WjTagsPreprocessor._specialProps=WjTagsPreprocessor._getSpecialProps();WjTagsPreprocessor._dataBindAttr="data-bind";WjTagsPreprocessor._wjTagPrefix="wj-";return WjTagsPreprocessor}();exports.WjTagsPreprocessor=WjTagsPreprocessor;window.wijmo.disableKnockoutTags||(new WjTagsPreprocessor).register();