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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(n[e]=t[e]);n.default=t;return n};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_knockout_base_1=require("wijmo/wijmo.knockout.base"),wijmo_1=require("wijmo/wijmo"),mKo=__importStar(require("knockout")),wjcInput=__importStar(require("wijmo/wijmo.input")),wjKo=mKo,WjDropDownBinding=function(t){__extends(WjDropDownBinding,t);function WjDropDownBinding(){return null!==t&&t.apply(this,arguments)||this}WjDropDownBinding.prototype._getControlConstructor=function(){return wjcInput.DropDown};return WjDropDownBinding}(wijmo_knockout_base_1.WjBinding);exports.WjDropDownBinding=WjDropDownBinding;var wjComboBox=function(t){__extends(wjComboBox,t);function wjComboBox(){return null!==t&&t.apply(this,arguments)||this}wjComboBox.prototype._getControlConstructor=function(){return wjcInput.ComboBox};return wjComboBox}(WjDropDownBinding);exports.wjComboBox=wjComboBox;var wjAutoComplete=function(t){__extends(wjAutoComplete,t);function wjAutoComplete(){return null!==t&&t.apply(this,arguments)||this}wjAutoComplete.prototype._getControlConstructor=function(){return wjcInput.AutoComplete};return wjAutoComplete}(wjComboBox);exports.wjAutoComplete=wjAutoComplete;var wjCalendar=function(t){__extends(wjCalendar,t);function wjCalendar(){return null!==t&&t.apply(this,arguments)||this}wjCalendar.prototype._getControlConstructor=function(){return wjcInput.Calendar};return wjCalendar}(wijmo_knockout_base_1.WjBinding);exports.wjCalendar=wjCalendar;var wjColorPicker=function(t){__extends(wjColorPicker,t);function wjColorPicker(){return null!==t&&t.apply(this,arguments)||this}wjColorPicker.prototype._getControlConstructor=function(){return wjcInput.ColorPicker};return wjColorPicker}(wijmo_knockout_base_1.WjBinding);exports.wjColorPicker=wjColorPicker;var wjListBox=function(t){__extends(wjListBox,t);function wjListBox(){return null!==t&&t.apply(this,arguments)||this}wjListBox.prototype._getControlConstructor=function(){return wjcInput.ListBox};return wjListBox}(wijmo_knockout_base_1.WjBinding);exports.wjListBox=wjListBox;var wjMenu=function(t){__extends(wjMenu,t);function wjMenu(){return null!==t&&t.apply(this,arguments)||this}wjMenu.prototype._getControlConstructor=function(){return wjcInput.Menu};wjMenu.prototype._createWijmoContext=function(){return new WjMenuContext(this)};wjMenu.prototype._initialize=function(){t.prototype._initialize.call(this);wijmo_knockout_base_1.MetaFactory.findProp("value",this._metaData.props).updateControl=this._updateControlValue};wjMenu.prototype._updateControlValue=function(t,n,e,o,i){if(null!=i){e.selectedValue=i;t._updateHeader()}return!0};return wjMenu}(wjComboBox);exports.wjMenu=wjMenu;var WjMenuContext=function(t){__extends(WjMenuContext,t);function WjMenuContext(){return null!==t&&t.apply(this,arguments)||this}WjMenuContext.prototype._initControl=function(){var n=this;t.prototype._initControl.call(this);var e=this.control;e.displayMemberPath="header";e.commandPath="cmd";e.commandParameterPath="cmdParam";e.selectedValuePath="value";e.itemsSource=new wijmo_1.ObservableArray;e.itemClicked.addHandler((function(){n._safeUpdateSrcAttr("value",e.selectedValue);n._updateHeader()}))};WjMenuContext.prototype._childrenInitialized=function(){t.prototype._childrenInitialized.call(this);this.control.selectedIndex=0;this._updateHeader()};WjMenuContext.prototype._updateHeader=function(){var t=this.control,n=this.valueAccessor(),e=wjKo.unwrap(n.header);if(void 0!==wjKo.unwrap(n.value)&&t.selectedItem&&t.displayMemberPath){var o=t.selectedItem[t.displayMemberPath];null!=o&&(e+=": <b>"+o+"</b>")}t.header=e};return WjMenuContext}(wijmo_knockout_base_1.WjContext);exports.WjMenuContext=WjMenuContext;var wjMenuItem=function(t){__extends(wjMenuItem,t);function wjMenuItem(){return null!==t&&t.apply(this,arguments)||this}wjMenuItem.prototype._getMetaDataId=function(){return"MenuItem"};wjMenuItem.prototype._createWijmoContext=function(){return new WjMenuItemContext(this)};wjMenuItem.prototype._initialize=function(){t.prototype._initialize.call(this);var n=this._metaData;n.parentProperty="itemsSource";n.isParentPropertyArray=!0};return wjMenuItem}(wijmo_knockout_base_1.WjBinding);exports.wjMenuItem=wjMenuItem;var WjMenuItemContext=function(t){__extends(WjMenuItemContext,t);function WjMenuItemContext(){return null!==t&&t.apply(this,arguments)||this}WjMenuItemContext.prototype._createControl=function(){return{header:this.element.innerHTML,cmd:null,cmdParam:null,value:null}};return WjMenuItemContext}(wijmo_knockout_base_1.WjContext);exports.WjMenuItemContext=WjMenuItemContext;var wjMenuSeparator=function(t){__extends(wjMenuSeparator,t);function wjMenuSeparator(){return null!==t&&t.apply(this,arguments)||this}wjMenuSeparator.prototype._getMetaDataId=function(){return"MenuSeparator"};wjMenuSeparator.prototype._initialize=function(){t.prototype._initialize.call(this);var n=this._metaData;n.parentProperty="itemsSource";n.isParentPropertyArray=!0};wjMenuSeparator.prototype._createControl=function(t){return{header:'<div class="wj-state-disabled" style="width:100%;height:1px;background-color:lightgray"></div>'}};return wjMenuSeparator}(wijmo_knockout_base_1.WjBinding);exports.wjMenuSeparator=wjMenuSeparator;var wjContextMenu=function(t){__extends(wjContextMenu,t);function wjContextMenu(){return null!==t&&t.apply(this,arguments)||this}wjContextMenu.prototype._getMetaDataId=function(){return"ContextMenu"};wjContextMenu.prototype._createControl=function(t){return null};wjContextMenu.prototype._createWijmoContext=function(){return new WjContextMenuContext(this)};return wjContextMenu}(wijmo_knockout_base_1.WjBinding);exports.wjContextMenu=wjContextMenu;var WjContextMenuContext=function(t){__extends(WjContextMenuContext,t);function WjContextMenuContext(){return null!==t&&t.apply(this,arguments)||this}WjContextMenuContext.prototype._initControl=function(){t.prototype._initControl.call(this);var n=this.valueAccessor(),e=wijmo_1.getElement(n.id);this.element.addEventListener("contextmenu",(function(t){var n=wijmo_1.Control.getControl(e),o=n.dropDown;if(n&&o&&!wijmo_1.closest(t.target,"[disabled]")){t.preventDefault();n.owner=this.element;n.selectedIndex=-1;if(n.onIsDroppedDownChanging(new wijmo_1.CancelEventArgs)){wijmo_1.showPopup(o,t);n.onIsDroppedDownChanged();o.focus()}}}))};return WjContextMenuContext}(wijmo_knockout_base_1.WjContext);exports.WjContextMenuContext=WjContextMenuContext;var wjInputDate=function(t){__extends(wjInputDate,t);function wjInputDate(){return null!==t&&t.apply(this,arguments)||this}wjInputDate.prototype._getControlConstructor=function(){return wjcInput.InputDate};return wjInputDate}(WjDropDownBinding);exports.wjInputDate=wjInputDate;var wjInputDateTime=function(t){__extends(wjInputDateTime,t);function wjInputDateTime(){return null!==t&&t.apply(this,arguments)||this}wjInputDateTime.prototype._getControlConstructor=function(){return wjcInput.InputDateTime};return wjInputDateTime}(wijmo_knockout_base_1.WjBinding);exports.wjInputDateTime=wjInputDateTime;var wjInputNumber=function(t){__extends(wjInputNumber,t);function wjInputNumber(){return null!==t&&t.apply(this,arguments)||this}wjInputNumber.prototype._getControlConstructor=function(){return wjcInput.InputNumber};return wjInputNumber}(wijmo_knockout_base_1.WjBinding);exports.wjInputNumber=wjInputNumber;var wjInputMask=function(t){__extends(wjInputMask,t);function wjInputMask(){return null!==t&&t.apply(this,arguments)||this}wjInputMask.prototype._getControlConstructor=function(){return wjcInput.InputMask};return wjInputMask}(wijmo_knockout_base_1.WjBinding);exports.wjInputMask=wjInputMask;var wjInputTime=function(t){__extends(wjInputTime,t);function wjInputTime(){return null!==t&&t.apply(this,arguments)||this}wjInputTime.prototype._getControlConstructor=function(){return wjcInput.InputTime};return wjInputTime}(wjComboBox);exports.wjInputTime=wjInputTime;var wjInputColor=function(t){__extends(wjInputColor,t);function wjInputColor(){return null!==t&&t.apply(this,arguments)||this}wjInputColor.prototype._getControlConstructor=function(){return wjcInput.InputColor};return wjInputColor}(WjDropDownBinding);exports.wjInputColor=wjInputColor;var WjCollectionViewBaseBinding=function(t){__extends(WjCollectionViewBaseBinding,t);function WjCollectionViewBaseBinding(){return null!==t&&t.apply(this,arguments)||this}WjCollectionViewBaseBinding.prototype._createControl=function(t){return null};WjCollectionViewBaseBinding.prototype._createWijmoContext=function(){return new WjCollectionViewContext(this)};WjCollectionViewBaseBinding.prototype._getTemplate=function(){return""};return WjCollectionViewBaseBinding}(wijmo_knockout_base_1.WjBinding);exports.WjCollectionViewBaseBinding=WjCollectionViewBaseBinding;var WjCollectionViewContext=function(t){__extends(WjCollectionViewContext,t);function WjCollectionViewContext(){var n=null!==t&&t.apply(this,arguments)||this;n._emptyCV=new wijmo_1.CollectionView([]);return n}WjCollectionViewContext.prototype.init=function(t,n,e,o,i){t.innerHTML=this.wjBinding._getTemplate();var r=wjKo.unwrap(n().cv)||this._emptyCV;this._subscribeToCV(r);this._localVM={cv:wjKo.observable(r)};var u=i.createChildContext(this._localVM);wjKo.applyBindingsToDescendants(u,t);return{controlsDescendantBindings:!0}};WjCollectionViewContext.prototype.update=function(t,n,e,o,i){var r=wjKo.unwrap(n().cv)||this._emptyCV,u=wjKo.unwrap(this._localVM.cv);if(r!==u){this._unsubscribeFromCV(u);this._subscribeToCV(r);this._localVM.cv(r)}};WjCollectionViewContext.prototype._subscribeToCV=function(t){if(t){t.collectionChanged.addHandler(this._forceBindingsUpdate,this);t.currentChanged.addHandler(this._forceBindingsUpdate,this);t.pageChanged.addHandler(this._forceBindingsUpdate,this)}};WjCollectionViewContext.prototype._unsubscribeFromCV=function(t){if(t){t.collectionChanged.removeHandler(this._forceBindingsUpdate,this);t.currentChanged.removeHandler(this._forceBindingsUpdate,this);t.pageChanged.removeHandler(this._forceBindingsUpdate,this)}};WjCollectionViewContext.prototype._forceBindingsUpdate=function(t,n){this._localVM.cv.valueHasMutated()};return WjCollectionViewContext}(wijmo_knockout_base_1.WjContext);exports.WjCollectionViewContext=WjCollectionViewContext;var wjCollectionViewPager=function(t){__extends(wjCollectionViewPager,t);function wjCollectionViewPager(){return null!==t&&t.apply(this,arguments)||this}wjCollectionViewPager.prototype._getMetaDataId=function(){return"CollectionViewPager"};wjCollectionViewPager.prototype._getTemplate=function(){return'<div class="wj-control wj-content wj-pager">    <div class="wj-input-group">        <span class="wj-input-group-btn" >            <button class="wj-btn wj-btn-default" type="button"               data-bind="click: function () { cv().moveToFirstPage() },               disable: cv().pageIndex <= 0">                <span class="wj-glyph-left" style="margin-right: -4px;"></span>                <span class="wj-glyph-left"></span>            </button>        </span>        <span class="wj-input-group-btn" >           <button class="wj-btn wj-btn-default" type="button"               data-bind="click: function () { cv().moveToPreviousPage() },               disable: cv().pageIndex <= 0">                <span class="wj-glyph-left"></span>            </button>        </span>        <input type="text" class="wj-form-control" data-bind="            value: cv().pageIndex + 1 + \' / \' + cv().pageCount        " disabled />        <span class="wj-input-group-btn" >            <button class="wj-btn wj-btn-default" type="button"               data-bind="click: function () { cv().moveToNextPage() },               disable: cv().pageIndex >= cv().pageCount - 1">                <span class="wj-glyph-right"></span>            </button>        </span>        <span class="wj-input-group-btn" >            <button class="wj-btn wj-btn-default" type="button"               data-bind="click: function () { cv().moveToLastPage() },               disable: cv().pageIndex >= cv().pageCount - 1">                <span class="wj-glyph-right"></span>                <span class="wj-glyph-right" style="margin-left: -4px;"></span>            </button>        </span>    </div></div>'};return wjCollectionViewPager}(WjCollectionViewBaseBinding);exports.wjCollectionViewPager=wjCollectionViewPager;var wjCollectionViewNavigator=function(t){__extends(wjCollectionViewNavigator,t);function wjCollectionViewNavigator(){return null!==t&&t.apply(this,arguments)||this}wjCollectionViewNavigator.prototype._getMetaDataId=function(){return"CollectionViewNavigator"};wjCollectionViewNavigator.prototype._getTemplate=function(){return'<div class="wj-control wj-content wj-pager">    <div class="wj-input-group">        <span class="wj-input-group-btn" >            <button class="wj-btn wj-btn-default" type="button"               data-bind="click: function () { cv().moveCurrentToFirst() },               disable: cv().currentPosition <= 0">                <span class="wj-glyph-left" style="margin-right: -4px;"></span>                <span class="wj-glyph-left"></span>            </button>        </span>        <span class="wj-input-group-btn" >           <button class="wj-btn wj-btn-default" type="button"               data-bind="click: function () { cv().moveCurrentToPrevious() },               disable: cv().currentPosition <= 0">                <span class="wj-glyph-left"></span>            </button>        </span>        <input type="text" class="wj-form-control" data-bind="            value: cv().currentPosition + 1 + \' / \' + cv().itemCount        " disabled />        <span class="wj-input-group-btn" >            <button class="wj-btn wj-btn-default" type="button"               data-bind="click: function () { cv().moveCurrentToNext() },               disable: cv().currentPosition >= cv().itemCount - 1">                <span class="wj-glyph-right"></span>            </button>        </span>        <span class="wj-input-group-btn" >            <button class="wj-btn wj-btn-default" type="button"               data-bind="click: function () { cv().moveCurrentToLast() },               disable: cv().currentPosition >= cv().itemCount - 1">                <span class="wj-glyph-right"></span>                <span class="wj-glyph-right" style="margin-left: -4px;"></span>            </button>        </span>    </div></div>'};return wjCollectionViewNavigator}(WjCollectionViewBaseBinding);exports.wjCollectionViewNavigator=wjCollectionViewNavigator;var wjMultiSelect=function(t){__extends(wjMultiSelect,t);function wjMultiSelect(){return null!==t&&t.apply(this,arguments)||this}wjMultiSelect.prototype._getControlConstructor=function(){return wjcInput.MultiSelect};return wjMultiSelect}(wjComboBox);exports.wjMultiSelect=wjMultiSelect;var wjMultiAutoComplete=function(t){__extends(wjMultiAutoComplete,t);function wjMultiAutoComplete(){return null!==t&&t.apply(this,arguments)||this}wjMultiAutoComplete.prototype._getControlConstructor=function(){return wjcInput.MultiAutoComplete};return wjMultiAutoComplete}(wjAutoComplete);exports.wjMultiAutoComplete=wjMultiAutoComplete;var wjPopup=function(t){__extends(wjPopup,t);function wjPopup(){return null!==t&&t.apply(this,arguments)||this}wjPopup.prototype._getControlConstructor=function(){return wjcInput.Popup};wjPopup.prototype._createWijmoContext=function(){return new WjPopupContext(this)};wjPopup.prototype._initialize=function(){t.prototype._initialize.call(this);wijmo_knockout_base_1.MetaFactory.findProp("owner",this._metaData.props).updateControl=function(t,n,e,o,i){e.owner=i;t._updateModal(i);return!0}};return wjPopup}(wijmo_knockout_base_1.WjBinding);exports.wjPopup=wjPopup;var WjPopupContext=function(t){__extends(WjPopupContext,t);function WjPopupContext(){return null!==t&&t.apply(this,arguments)||this}WjPopupContext.prototype._initControl=function(){t.prototype._initControl.call(this);this.control.removeOnHide=!1};WjPopupContext.prototype._updateModal=function(t){var n=this.valueAccessor(),e=this.control;null==wjKo.unwrap(n.modal)&&(e.modal=!t)};return WjPopupContext}(wijmo_knockout_base_1.WjContext);exports.WjPopupContext=WjPopupContext;wjKo.bindingHandlers.wjComboBox=new wjComboBox;wjKo.bindingHandlers.wjAutoComplete=new wjAutoComplete;wjKo.bindingHandlers.wjCalendar=new wjCalendar;wjKo.bindingHandlers.wjColorPicker=new wjColorPicker;wjKo.bindingHandlers.wjListBox=new wjListBox;wjKo.bindingHandlers.wjMenu=new wjMenu;wjKo.bindingHandlers.wjMenuItem=new wjMenuItem;wjKo.bindingHandlers.wjMenuSeparator=new wjMenuSeparator;wjKo.bindingHandlers.wjContextMenu=new wjContextMenu;wjKo.bindingHandlers.wjInputDate=new wjInputDate;wjKo.bindingHandlers.wjInputDateTime=new wjInputDateTime;wjKo.bindingHandlers.wjInputNumber=new wjInputNumber;wjKo.bindingHandlers.wjInputMask=new wjInputMask;wjKo.bindingHandlers.wjInputTime=new wjInputTime;wjKo.bindingHandlers.wjInputColor=new wjInputColor;wjKo.bindingHandlers.wjCollectionViewNavigator=new wjCollectionViewNavigator;wjKo.bindingHandlers.wjCollectionViewPager=new wjCollectionViewPager;wjKo.bindingHandlers.wjMultiSelect=new wjMultiSelect;wjKo.bindingHandlers.wjMultiAutoComplete=new wjMultiAutoComplete;wjKo.bindingHandlers.wjPopup=new wjPopup;