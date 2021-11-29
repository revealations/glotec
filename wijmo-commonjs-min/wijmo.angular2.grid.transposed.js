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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var r in o)o.hasOwnProperty(r)&&(e[r]=o[r])})(e,o)};return function(e,o){extendStatics(e,o);function __(){this.constructor=e}e.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,o,r,t){var n,i=arguments.length,a=i<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,o,r,t);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(o,r,a):n(o,r))||a);return i>3&&a&&Object.defineProperty(o,r,a),a},__param=this&&this.__param||function(e,o){return function(r,t){o(r,t,e)}},__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(o[r]=e[r]);o.default=e;return o};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase"),wjcGridTransposed=__importStar(require("wijmo/wijmo.grid.transposed")),wjTransposedGridMeta={selector:"wj-transposed-grid",template:"<div><ng-content></ng-content></div>",inputs:["wjModelProperty","autoGenerateRows","isDisabled","newRowAtTop","allowAddNew","allowDelete","allowDragging","allowMerging","allowResizing","allowSorting","allowPinning","autoScroll","autoRowHeights","autoSizeMode","autoGenerateColumns","autoSearch","caseSensitiveSearch","quickAutoSize","bigCheckboxes","childItemsPath","groupHeaderFormat","headersVisibility","showSelectedHeaders","showMarquee","showPlaceholders","itemFormatter","isReadOnly","imeEnabled","mergeManager","selectionMode","showGroups","showSort","showDropDown","showAlternatingRows","showErrors","alternatingRowStep","itemValidator","validateEdits","treeIndent","itemsSource","autoClipboard","expandSelectionOnCopyPaste","frozenRows","frozenColumns","cloneFrozenCells","deferResizing","sortRowIndex","editColumnIndex","stickyHeaders","preserveSelectedState","preserveOutlineState","preserveWhiteSpace","keyActionTab","keyActionEnter","rowHeaderPath","virtualizationThreshold","anchorCursor","lazyRender","refreshOnEdit","copyHeaders","columnGroups","rowGroups"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","beginningEditNg: beginningEdit","cellEditEndedNg: cellEditEnded","cellEditEndingNg: cellEditEnding","prepareCellForEditNg: prepareCellForEdit","formatItemNg: formatItem","resizingColumnNg: resizingColumn","resizedColumnNg: resizedColumn","autoSizingColumnNg: autoSizingColumn","autoSizedColumnNg: autoSizedColumn","draggingColumnNg: draggingColumn","draggingColumnOverNg: draggingColumnOver","draggedColumnNg: draggedColumn","sortingColumnNg: sortingColumn","sortedColumnNg: sortedColumn","pinningColumnNg: pinningColumn","pinnedColumnNg: pinnedColumn","resizingRowNg: resizingRow","resizedRowNg: resizedRow","autoSizingRowNg: autoSizingRow","autoSizedRowNg: autoSizedRow","draggingRowNg: draggingRow","draggingRowOverNg: draggingRowOver","draggedRowNg: draggedRow","deletingRowNg: deletingRow","deletedRowNg: deletedRow","loadingRowsNg: loadingRows","loadedRowsNg: loadedRows","rowEditStartingNg: rowEditStarting","rowEditStartedNg: rowEditStarted","rowEditEndingNg: rowEditEnding","rowEditEndedNg: rowEditEnded","rowAddedNg: rowAdded","groupCollapsedChangingNg: groupCollapsedChanging","groupCollapsedChangedNg: groupCollapsedChanged","columnGroupCollapsedChangingNg: columnGroupCollapsedChanging","columnGroupCollapsedChangedNg: columnGroupCollapsedChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged","selectionChangingNg: selectionChanging","selectionChangedNg: selectionChanged","scrollPositionChangedNg: scrollPositionChanged","updatingViewNg: updatingView","updatedViewNg: updatedView","updatingLayoutNg: updatingLayout","updatedLayoutNg: updatedLayout","pastingNg: pasting","pastedNg: pasted","pastingCellNg: pastingCell","pastedCellNg: pastedCell","copyingNg: copying","copiedNg: copied"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjTransposedGridMeta=wjTransposedGridMeta;var WjTransposedGrid=function(e){__extends(WjTransposedGrid,e);function WjTransposedGrid(o,r,t){var n=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(o,r))||this;n.isInitialized=!1;n._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(n,o,r,t);n.created();return n}o=WjTransposedGrid;WjTransposedGrid.prototype.created=function(){};WjTransposedGrid.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjTransposedGrid.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjTransposedGrid.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjTransposedGrid.prototype.addEventListener=function(o,r,t,n){var i=this;void 0===n&&(n=!1);var a=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=a.getZone(this);s&&a.outsideZoneEvents[r]?s.runOutsideAngular((function(){e.prototype.addEventListener.call(i,o,r,t,n)})):e.prototype.addEventListener.call(this,o,r,t,n)};var o;WjTransposedGrid.meta={outputs:wjTransposedGridMeta.outputs};return WjTransposedGrid=o=__decorate([core_1.Component({selector:wjTransposedGridMeta.selector,template:wjTransposedGridMeta.template,inputs:wjTransposedGridMeta.inputs,outputs:wjTransposedGridMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return o}))}].concat(wjTransposedGridMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjTransposedGrid)}(wjcGridTransposed.TransposedGrid);exports.WjTransposedGrid=WjTransposedGrid;var wjTransposedGridRowMeta={selector:"wj-transposed-grid-row",template:"",inputs:["asyncBindings","wjProperty","name","dataMap","dataType","binding","sortMemberPath","format","cellTemplate","header","width","maxLength","minWidth","maxWidth","align","allowDragging","allowSorting","allowResizing","allowMerging","aggregate","isReadOnly","cssClass","cssClassAll","isContentHtml","isSelected","visible","wordWrap","multiLine","mask","inputType","isRequired","showDropDown","dataMapEditor","dropDownCssClass","quickAutoSize","editor"],outputs:["initialized","isSelectedChangePC: isSelectedChange"],providers:[]};exports.wjTransposedGridRowMeta=wjTransposedGridRowMeta;var WjTransposedGridRow=function(e){__extends(WjTransposedGridRow,e);function WjTransposedGridRow(o,r,t){var n=e.call(this)||this;n.isInitialized=!1;n.wjProperty="_rowInfo";var i=(n._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(n,o,r,t)).parentBehavior.directive;if(i.autoGenerateRows){i.autoGenerateRows=!1;i._rowInfo.clear()}n.created();return n}o=WjTransposedGridRow;WjTransposedGridRow.prototype.created=function(){};WjTransposedGridRow.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjTransposedGridRow.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjTransposedGridRow.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var o;WjTransposedGridRow.meta={outputs:wjTransposedGridRowMeta.outputs,changeEvents:{"grid.selectionChanged":["isSelected"]}};return WjTransposedGridRow=o=__decorate([core_1.Component({selector:wjTransposedGridRowMeta.selector,template:wjTransposedGridRowMeta.template,inputs:wjTransposedGridRowMeta.inputs,outputs:wjTransposedGridRowMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return o}))}].concat(wjTransposedGridRowMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjTransposedGridRow)}(wjcGridTransposed.TransposedGridRow);exports.WjTransposedGridRow=WjTransposedGridRow;var moduleExports=[WjTransposedGrid,WjTransposedGridRow],WjGridTransposedModule=function(){function WjGridTransposedModule(){}return WjGridTransposedModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],WjGridTransposedModule)}();exports.WjGridTransposedModule=WjGridTransposedModule;