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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),wijmo=__importStar(require("wijmo/wijmo")),WjOptions=function(){function WjOptions(){}WjOptions.asyncBindings=!0;return WjOptions}();exports.WjOptions=WjOptions;var WjComponentResolvedMetadata=function(){function WjComponentResolvedMetadata(e){this.changeEventMap=[];this.allImplEvents=[];this.resolveChangeEventMap(e)}WjComponentResolvedMetadata.prototype.resolveChangeEventMap=function(e){var t=this.changeEventMap,i=e.outputs,r=e.changeEvents||{};t.splice(0,t.length);this.allImplEvents=[];if(i&&i.length){var n=i.map((function(e){return e.split(":")})).map((function(e){return{implName:e[0].trim(),exposeName:e[1]&&e[1].trim()}}));this.allImplEvents=n.map((function(e){return e.implName}));for(var o=0,s=n.filter((function(e){return e.implName&&e.exposeName}));o<s.length;o++){var a=s[o];if(Ng2Utils.getWjEventName(a.implName)){var v={eventImpl:a.implName,event:a.exposeName},h=r[a.exposeName];h&&h.length&&(v.props=h.map((function(e){return{prop:e,evExposed:Ng2Utils.getChangeEventNameExposed(e),evImpl:Ng2Utils.getChangeEventNameImplemented(e)}})));t.push(v)}}for(var l in r)if(l.indexOf(".")>-1){v={eventImpl:null,event:l,props:r[l].map((function(e){return{prop:e,evExposed:Ng2Utils.getChangeEventNameExposed(e),evImpl:Ng2Utils.getChangeEventNameImplemented(e)}}))};t.push(v)}}};return WjComponentResolvedMetadata}();exports.WjComponentResolvedMetadata=WjComponentResolvedMetadata;var WjDirectiveBehavior=function(){function WjDirectiveBehavior(e,t,i,r){this._pendingEvents=[];this.isInitialized=!1;this.isDestroyed=!1;this.nzRun=function(e){return e()};this.directive=e;this.elementRef=t;this.injector=i;var n=this.nz=i.get(core_1.NgZone);n&&(this.nzRun=n.run.bind(n));this.injectedParent=r;var o=this.typeData=e.constructor[WjDirectiveBehavior.directiveTypeDataProp];null==o.siblingId&&(o.siblingId=++WjDirectiveBehavior.siblingDirId+"");var s=e.constructor[WjDirectiveBehavior.directiveResolvedTypeDataProp];s?this.resolvedTypeData=s:e.constructor[WjDirectiveBehavior.directiveResolvedTypeDataProp]=s=this.resolvedTypeData=new WjComponentResolvedMetadata(o);e[WjDirectiveBehavior.BehaviourRefProp]=this;i[WjDirectiveBehavior.BehaviourRefProp]=this;e[WjDirectiveBehavior.isInitializedPropAttr]=!1;this._createEvents();this._setupAsChild();this._isHostElement()&&t.nativeElement.setAttribute(WjDirectiveBehavior.siblingDirIdAttr,o.siblingId);this.subscribeToEvents(!1)}WjDirectiveBehavior.getHostElement=function(e,t){WjDirectiveBehavior.ngZone=t.get(core_1.NgZone);return e.nativeElement};WjDirectiveBehavior.attach=function(e,t,i,r){return new WjDirectiveBehavior(e,t,i,r)};WjDirectiveBehavior.getZone=function(e){var t=WjDirectiveBehavior.getBehavior(e);return t&&t.nz||WjDirectiveBehavior.ngZone};WjDirectiveBehavior.prototype.ngOnInit=function(){this.isInitialized=!0;this._initParent();this.subscribeToEvents(!0)};WjDirectiveBehavior.prototype.ngAfterViewInit=function(){var e=this;this.directive[WjDirectiveBehavior.isInitializedPropAttr]=!0;setTimeout((function(){e.isDestroyed||e.directive[WjDirectiveBehavior.initializedEventAttr].emit(void 0)}))};WjDirectiveBehavior.prototype.ngOnDestroy=function(){if(!this.isDestroyed){this.isDestroyed=!0;var e=this.directive;this._siblingInsertedEH&&this.elementRef.nativeElement.removeEventListener("DOMNodeInserted",this._siblingInsertedEH);if(this._isChild()&&this.parentBehavior){var t=this.parentBehavior.directive,i=this._getParentProp();if(!this.parentBehavior.isDestroyed&&t&&i&&e){var r=t[i];if(wijmo.isArray(r)&&r){var n=r.indexOf(e);n>=0&&r.splice(n,1)}}}if(e instanceof wijmo.Control&&e.hostElement){var o=this.elementRef.nativeElement,s=o&&o.parentNode,a=s?Array.prototype.indexOf.call(s.childNodes,o):-1;e.dispose();if(a>-1&&Array.prototype.indexOf.call(s.childNodes,o)<0){o.textContent="";a<s.childNodes.length&&s.replaceChild(o,s.childNodes[a])}}this.injector[WjDirectiveBehavior.BehaviourRefProp]=null}};WjDirectiveBehavior.instantiateTemplate=function(e,t,i,r,n){void 0===r&&(r=!1);void 0===n&&(n={});var o,s=t.createEmbeddedView(i,n,t.length),a=s.rootNodes;if(r&&1===a.length)o=a[0];else{o=document.createElement("div");for(var v=0,h=a;v<h.length;v++){var l=h[v];o.appendChild(l)}}e&&e.appendChild(o);return{viewRef:s,rootElement:o}};WjDirectiveBehavior.prototype.getPropChangeEvent=function(e){var t=this.typeData.changeEvents;if(t)for(var i in t)if(t[i].indexOf(e)>-1)return i;return null};WjDirectiveBehavior.prototype._createEvents=function(){for(var e=0,t=this.resolvedTypeData.allImplEvents;e<t.length;e++){var i=t[e];this.directive[i]=new core_1.EventEmitter(!1)}};WjDirectiveBehavior.prototype.subscribeToEvents=function(e){var t=this.resolvedTypeData.changeEventMap;e=!!e;for(var i=0,r=t;i<r.length;i++){e!==(s=r[i]).event.indexOf(".")<0&&this.addHandlers(s)}if(e)for(var n=0,o=t;n<o.length;n++){var s=o[n];this.triggerPropChangeEvents(s,!0)}};WjDirectiveBehavior.prototype.addHandlers=function(e){var t=this,i=this.directive;WjDirectiveBehavior.evaluatePath(i,e.event).addHandler((function(r,n){t.nzRun((function(){t.isInitialized&&t.triggerPropChangeEvents(e);e.eventImpl&&t._triggerEvent(i[e.eventImpl],n,e.props&&e.props.length>0)}))}))};WjDirectiveBehavior.prototype.triggerPropChangeEvents=function(e,t){void 0===t&&(t=!0);var i=this.directive;if(e.props&&e.props.length)for(var r=0,n=e.props;r<n.length;r++){var o=n[r];this._triggerEvent(i[o.evImpl],i[o.prop],t)}};WjDirectiveBehavior.prototype._setupAsChild=function(){if(this._isChild()){this._isHostElement()&&(this.elementRef.nativeElement.style.display="none");this.parentBehavior=WjDirectiveBehavior.getBehavior(this.injectedParent)}};WjDirectiveBehavior.prototype._isAsyncBinding=function(){var e=this.directive[WjDirectiveBehavior.asyncBindingUpdatePropAttr];return null==e?WjOptions.asyncBindings:e};WjDirectiveBehavior.prototype._isChild=function(){return this._isParentInitializer()||this._isParentReferencer()};WjDirectiveBehavior.prototype._isParentInitializer=function(){return null!=this.directive[WjDirectiveBehavior.parPropAttr]};WjDirectiveBehavior.prototype._isParentReferencer=function(){return!!this.typeData.parentRefProperty};WjDirectiveBehavior.prototype._getParentProp=function(){return this.directive[WjDirectiveBehavior.parPropAttr]};WjDirectiveBehavior.prototype._getParentReferenceProperty=function(){return this.typeData.parentRefProperty};WjDirectiveBehavior.prototype._useParentObj=function(){return!1};WjDirectiveBehavior.prototype._parentInCtor=function(){return this._isParentReferencer()&&""==this._getParentReferenceProperty()};WjDirectiveBehavior.prototype._initParent=function(){if(this.parentBehavior&&!this._useParentObj()){var e=this.parentBehavior.directive,t=this._getParentProp(),i=this.directive;if(this._isParentInitializer()){this._getParentProp();var r=e[t];if(wijmo.isArray(r)){var n=this._isHostElement(),o=n?this._getSiblingIndex():-1;(o<0||o>=r.length)&&(o=r.length);r.splice(o,0,i);if(n){this._siblingInsertedEH=this._siblingInserted.bind(this);this.elementRef.nativeElement.addEventListener("DOMNodeInserted",this._siblingInsertedEH)}}else e[t]=i}this._isParentReferencer()&&!this._parentInCtor()&&(i[this._getParentReferenceProperty()]=e)}};WjDirectiveBehavior.prototype._getSiblingIndex=function(){var e=this.elementRef.nativeElement,t=e.parentElement;if(!t)return-1;for(var i=t.childNodes,r=-1,n=this.typeData.siblingId,o=0;o<i.length;o++){var s=i[o];if(1==s.nodeType&&s.getAttribute(WjDirectiveBehavior.siblingDirIdAttr)==n){++r;if(s===e)return r}}return-1};WjDirectiveBehavior.prototype._siblingInserted=function(e){if(e.target===this.elementRef.nativeElement){var t=this._getSiblingIndex(),i=this.parentBehavior.directive[this._getParentProp()],r=this.directive,n=i.indexOf(r);if(t>=0&&n>=0&&t!==n){i.splice(n,1);t=Math.min(t,i.length);i.splice(t,0,r)}}};WjDirectiveBehavior.prototype._isHostElement=function(){return this.elementRef.nativeElement.nodeType===Node.ELEMENT_NODE};WjDirectiveBehavior.prototype._triggerEvent=function(e,t,i){var r=this;if(i&&this._isAsyncBinding()){var n={event:e,args:t};this._pendingEvents.push(n);null==this._pendingEventsTO&&(this._pendingEventsTO=setTimeout((function(){r._triggerPendingEvents(!1)}),0))}else e.emit(t)};WjDirectiveBehavior.prototype._triggerPendingEvents=function(e){if(null!=this._pendingEventsTO){clearTimeout(this._pendingEventsTO);this._pendingEventsTO=null}if(!this.isDestroyed){var t=[].concat(this._pendingEvents);this._pendingEvents.splice(0,this._pendingEvents.length);for(var i=0,r=t;i<r.length;i++){var n=r[i];n.event.emit(n.args)}e&&this._pendingEvents.length&&this._triggerPendingEvents(!0)}};WjDirectiveBehavior.prototype.flushPendingEvents=function(){this._triggerPendingEvents(!0)};WjDirectiveBehavior.evaluatePath=function(e,t){this._pathBinding.path=t;return this._pathBinding.getValue(e)};WjDirectiveBehavior.getBehavior=function(e){return e?e[WjDirectiveBehavior.BehaviourRefProp]:null};WjDirectiveBehavior.directiveTypeDataProp="meta";WjDirectiveBehavior.directiveResolvedTypeDataProp="_wjResolvedMeta";WjDirectiveBehavior.BehaviourRefProp="_wjBehaviour";WjDirectiveBehavior.parPropAttr="wjProperty";WjDirectiveBehavior.wjModelPropAttr="wjModelProperty";WjDirectiveBehavior.initializedEventAttr="initialized";WjDirectiveBehavior.isInitializedPropAttr="isInitialized";WjDirectiveBehavior.siblingDirIdAttr="wj-directive-id";WjDirectiveBehavior.asyncBindingUpdatePropAttr="asyncBindings";WjDirectiveBehavior.siblingDirId=0;WjDirectiveBehavior.wijmoComponentProviderId="WjComponent";WjDirectiveBehavior.outsideZoneEvents={pointermove:!0,pointerover:!0,mousemove:!0,wheel:!0,touchmove:!0,pointerenter:!0,pointerleave:!0,pointerout:!0,mouseover:!0,mouseenter:!0,mouseleave:!0,mouseout:!0};WjDirectiveBehavior._pathBinding=new wijmo.Binding("");return WjDirectiveBehavior}();exports.WjDirectiveBehavior=WjDirectiveBehavior;var Ng2Utils=function(){function Ng2Utils(){}Ng2Utils.initEvents=function(e,t){for(var i=[],r=0,n=t;r<n.length;r++){var o=n[r],s=o.props;o.event&&o.eventImpl&&i.push(o.eventImpl+":"+o.event);if(s&&s.length)for(var a=0,v=s;a<v.length;a++){var h=v[a];i.push(h.evImpl+":"+h.evExposed)}}return i};Ng2Utils.getChangeEventNameImplemented=function(e){return Ng2Utils.getChangeEventNameExposed(e)+Ng2Utils.changeEventImplementSuffix};Ng2Utils.getChangeEventNameExposed=function(e){return e+"Change"};Ng2Utils.getWjEventNameImplemented=function(e){return e+Ng2Utils.wjEventImplementSuffix};Ng2Utils.getWjEventName=function(e){if(e){var t=Ng2Utils.wjEventImplementSuffix,i=e.length-t.length;if(i>0&&e.substr(i)===t)return e.substr(0,i)}return null};Ng2Utils.getBaseType=function(e){var t;return e&&(t=Object.getPrototypeOf(e.prototype))&&t.constructor};Ng2Utils.getAnnotations=function(e){return Reflect.getMetadata("annotations",e)};Ng2Utils.getAnnotation=function(e,t){if(t&&e)for(var i=0,r=e;i<r.length;i++){var n=r[i];if(n instanceof t)return n}return null};Ng2Utils.getTypeAnnotation=function(e,t,i){for(var r=e;r;r=i?null:Ng2Utils.getBaseType(r)){var n=Ng2Utils.getAnnotation(Ng2Utils.getAnnotations(r),t);if(n)return n}return null};Ng2Utils.equals=function(e,t){return e!=e&&t!=t||wijmo.DateTime.equals(e,t)||e===t};Ng2Utils._copy=function(e,t,i,r,n){if(e&&t)for(var o in t)if(r||"_"!==o[0]){var s=t[o];if(!n||n(o,s)){var a=e[o];wijmo.isArray(s)?e[o]=(!wijmo.isArray(a)||i?[]:a).concat(s):void 0!==s&&(e[o]=s)}}};Ng2Utils.changeEventImplementSuffix="PC";Ng2Utils.wjEventImplementSuffix="Ng";return Ng2Utils}();exports.Ng2Utils=Ng2Utils;var WjValueAccessor=function(){function WjValueAccessor(e){this._writeQnt=0;this._isSubscribed=!1;this._dirUpdateQnt=0;this._onChange=function(e){};this._onTouched=function(){};this._directive=e;this._behavior=WjDirectiveBehavior.getBehavior(e)}WjValueAccessor.prototype.writeValue=function(e){var t=this;this._modelValue=e;++this._writeQnt;if(this._directive.isInitialized){this._ensureInitEhUnsubscribed();this._updateDirective()}else if(!this._dirInitEh){var i=this._directive.initialized;this._dirInitEh=i.subscribe((function(){t._updateDirective();t._ensureInitEhUnsubscribed()}))}};WjValueAccessor.prototype.registerOnChange=function(e){this._onChange=e};WjValueAccessor.prototype.registerOnTouched=function(e){this._onTouched=e};WjValueAccessor.prototype.setDisabledState=function(e){var t=this._directive;t instanceof wijmo.Control&&(t.isDisabled=e)};WjValueAccessor.prototype._updateDirective=function(){if(!this._isFirstChange()||null!=this._modelValue){this._ensureNgModelProp();if(this._directive&&this._ngModelProp){var e=this._modelValue;""===e&&(e=null);this._dirUpdateQnt++;try{this._directive[this._ngModelProp]=e}finally{this._dirUpdateQnt--}}this._ensureSubscribed()}};WjValueAccessor.prototype._ensureSubscribed=function(){if(!this._isSubscribed){var e=this._directive;if(e){this._ensureNgModelProp();var t=this._ngModelProp=e[WjDirectiveBehavior.wjModelPropAttr];if(t){var i=this._behavior.getPropChangeEvent(t);i&&e[i].addHandler(this._dirValChgEh,this)}e instanceof wijmo.Control&&e.lostFocus.addHandler(this._dirLostFocusEh,this);this._isSubscribed=!0}}};WjValueAccessor.prototype._ensureNgModelProp=function(){!this._ngModelProp&&this._directive&&(this._ngModelProp=this._directive[WjDirectiveBehavior.wjModelPropAttr])};WjValueAccessor.prototype._ensureInitEhUnsubscribed=function(){if(this._dirInitEh){this._dirInitEh.unsubscribe();this._dirInitEh=null}};WjValueAccessor.prototype._isFirstChange=function(){return this._writeQnt<2};WjValueAccessor.prototype._dirValChgEh=function(e,t){if(this._onChange&&this._directive&&this._ngModelProp){var i=this._directive[this._ngModelProp],r=this._modelValue;""===r&&(r=null);if(!(this._dirUpdateQnt>0&&_isNullOrEmpty(r)&&_isNullOrEmpty(i)||Ng2Utils.equals(r,i))||wijmo.isArray(i)){this._modelValue=i;this._onChange(i)}}};WjValueAccessor.prototype._dirLostFocusEh=function(e,t){this._onTouched&&this._onTouched()};return WjValueAccessor}();exports.WjValueAccessor=WjValueAccessor;function WjValueAccessorFactory(e){return new WjValueAccessor(e)}exports.WjValueAccessorFactory=WjValueAccessorFactory;function _isNullOrEmpty(e){return null==e||""===e}