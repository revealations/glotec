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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.hasOwnProperty.call(t,a)&&(e[a]=t[a]);e.default=t;return e};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_1=require("wijmo/wijmo"),wijmo_chart_1=require("wijmo/wijmo.chart"),selfModule=__importStar(require("wijmo/wijmo.chart.radar")),FlexRadarSeries=function(t){__extends(FlexRadarSeries,t);function FlexRadarSeries(){return null!==t&&t.apply(this,arguments)||this}Object.defineProperty(FlexRadarSeries.prototype,"chartType",{get:function(){return this._finChartType},set:function(t){if((t=wijmo_1.asEnum(t,RadarChartType,!0))!=this._finChartType){this._finChartType=t;this._invalidate()}},enumerable:!0,configurable:!0});FlexRadarSeries.prototype._getChartType=function(){var t;switch(this.chartType){case RadarChartType.Area:t=wijmo_chart_1.ChartType.Area;break;case RadarChartType.Line:t=wijmo_chart_1.ChartType.Line;break;case RadarChartType.Column:t=wijmo_chart_1.ChartType.Column;break;case RadarChartType.LineSymbols:t=wijmo_chart_1.ChartType.LineSymbols;break;case RadarChartType.Scatter:t=wijmo_chart_1.ChartType.Scatter}return t};return FlexRadarSeries}(wijmo_chart_1.SeriesBase);exports.FlexRadarSeries=FlexRadarSeries;var _RadarLinePlotter=function(t){__extends(_RadarLinePlotter,t);function _RadarLinePlotter(){var e=null!==t&&t.apply(this,arguments)||this;e.isArea=!1;return e}_RadarLinePlotter.prototype._getLabelPoint=function(t,e){var a=t._getAxisX(),r=t._getAxisY(),i=a.convert(e.dataX),s=r.convert(e.dataY);return this.chart._convertPoint(s,i)};_RadarLinePlotter.prototype.plotSeries=function(t,e,a,r,i,s,n){var o=wijmo_1.asType(r,wijmo_chart_1.SeriesBase),l=this.chart,_=o._getChartType()||l._getChartType(),h=l.series.indexOf(r),c=r.getValues(0),u=r.getValues(1);if(c){u||(u=this.dataInfo.getXVals());var d=wijmo_chart_1._BasePlotter.cloneStyle(r.style,["fill"]),p=c.length,x=!0;if(u)p=Math.min(p,u.length);else{x=!1;u=new Array(p)}var f=this._DEFAULT_WIDTH,m=o._getSymbolFill(h),y=o._getAltSymbolFill(h)||m,g=o._getSymbolStroke(h),v=o._getAltSymbolStroke(h)||g,w=o._getSymbolSize();t.stroke=g;t.strokeWidth=f;t.fill=m;var A=new Array,P=new Array,j=a.actualMax,T=this.stacking!=wijmo_chart_1.Stacking.None&&!o._isCustomAxisY(),R=this.stacking==wijmo_chart_1.Stacking.Stacked100pc&&!o._isCustomAxisY();void 0!==o._getChartType()&&(T=R=!1);for(var b=o.interpolateNulls,L=!1,C=this.getItemFormatter(r),M=0;M<p;M++){var S=x?u[M]:M,k=null==c[M]?0:c[M];if(wijmo_chart_1._DataInfo.isValid(S)&&wijmo_chart_1._DataInfo.isValid(k)){if(T){if(R){k/=this.dataInfo.getStackedAbsSum(S)}if(k>=0){var F=isNaN(this.stackPos[S])?0:this.stackPos[S];k=this.stackPos[S]=F+k}else{F=isNaN(this.stackNeg[S])?0:this.stackNeg[S];k=this.stackNeg[S]=F+k}}k=Math.min(k,j);var I;I=new wijmo_chart_1._DataPoint(h,M,S,k);var N=e.convert(S),X=a.convert(k),D=this.chart._convertPoint(X,N);S=D.x;k=D.y;if(isNaN(S)||isNaN(k)){L=!0;if(!0!==b){A.push(void 0);P.push(void 0)}}else{A.push(S);P.push(k);var O=new wijmo_chart_1._CircleArea(new wijmo_1.Point(S,k),.5*w);O.tag=I;this.hitTester.add(O,h)}}else{L=!0;if(!0!==b){A.push(void 0);P.push(void 0)}}}var V=0;if(this.hasLines){this.isArea?t.fill=m||i._getColorLight(h):t.fill="none";if(L&&!0!==b){var B=[],G=[];for(M=0;M<p;M++)if(void 0===A[M]){B.push(void 0);G.push(0)}else{B.push(A[M]);G.push(P[M])}if(B.length>1){if(l._isPolar&&_!==wijmo_chart_1.ChartType.Area)this._drawLines(t,B,G,null,d,this.chart._plotrectId);else{if(l.totalAngle<360){B.push(l._center.x);G.push(l._center.y)}t.drawPolygon(B,G,null,d,this.chart._plotrectId)}this.hitTester.add(new wijmo_chart_1._LinesArea(B,G),h);V++}}else{if(l._isPolar&&_!==wijmo_chart_1.ChartType.Area)this._drawLines(t,A,P,null,d,this.chart._plotrectId);else{if(l.totalAngle<360){A.push(l._center.x);P.push(l._center.y)}t.drawPolygon(A,P,null,d,this.chart._plotrectId)}this.hitTester.add(new wijmo_chart_1._LinesArea(A,P),h);V++}}t.fill=m;for(M=0;M<p;M++){S=A[M],k=P[M];if(!1===this.hasLines){t.fill=c[M]>0?m:y;t.stroke=c[M]>0?g:v}if(this.isValid(S,k,e,a)){(this.hasSymbols||C)&&w>0&&this._drawSymbol(t,S,k,w,o,M,C);r._setPointIndex(M,V);V++}}}};return _RadarLinePlotter}(wijmo_chart_1._LinePlotter);exports._RadarLinePlotter=_RadarLinePlotter;var RadarChartType,_RadarBarPlotter=function(t){__extends(_RadarBarPlotter,t);function _RadarBarPlotter(){return null!==t&&t.apply(this,arguments)||this}_RadarBarPlotter.prototype.adjustLimits=function(t,e){this.dataInfo=t;var a=t.getMinX(),r=t.getMinY(),i=t.getMaxX(),s=t.getMaxY(),n=t.getDeltaX();n<=0&&(n=1);this.chart.totalAngle<360&&(n=0);this.unload();this.chart.axisY._getLogBase()||(this.origin>s?s=this.origin:this.origin<r&&(r=this.origin));return new wijmo_1.Rect(a,r,i-a+n,s-r)};_RadarBarPlotter.prototype._getLabelPoint=function(t,e){var a=t._getAxisX(),r=t._getAxisY(),i=a.convert(e.dataX),s=r.convert(e.dataY);return this.chart._convertPoint(s,i)};_RadarBarPlotter.prototype.plotSeries=function(t,e,a,r,i,s,n){var o=this.chart.series.indexOf(r),l=wijmo_1.asType(r,wijmo_chart_1.SeriesBase),_=(this.chart._options,this.width),h=this.chart,c=-90*Math.PI/180;s=s||0;var u,d=l._getAxisY()._uniqueId,p=(this.stackNegMap[d],this.stackPosMap[d]),x=this.stacking!=wijmo_chart_1.Stacking.None,f=this.stacking==wijmo_chart_1.Stacking.Stacked100pc,m=r.getValues(0),y=r.getValues(1);if(m){y||(y=this.dataInfo.getXVals());var g;(g=y?h.totalAngle/y.length:h.totalAngle/(e.actualMax-e.actualMin))>0&&(_=x?g*_*Math.PI/180:g*Math.pow(_,s+1)*Math.PI/180);var v=l._getSymbolFill(o),w=l._getAltSymbolFill(o)||v,A=l._getSymbolStroke(o),P=l._getAltSymbolStroke(o)||A,j=m.length;null!=y&&(j=Math.min(j,y.length));var T,R,b=this.origin,L=0;void 0!==l._getChartType()&&(x=f=!1);b<a.actualMin?b=a.actualMin:b>a.actualMax&&(b=a.actualMax);a.convert(b);var C=e.actualMin,M=e.actualMax,S=a.actualMax;l._isCustomAxisY()&&(x=f=!1);h._areas[o]||(h._areas[o]=[]);for(var k=0;k<j;k++){var F=y?y[k]:k,I=null==m[k]?0:m[k];this._getSymbolOrigin&&a.convert(this._getSymbolOrigin(b,k,j));if(this._getSymbolStyles){var N=this._getSymbolStyles(k,j);v=N&&N.fill?N.fill:v;w=N&&N.fill?N.fill:w;A=N&&N.stroke?N.stroke:A;P=N&&N.stroke?N.stroke:P}T=I>0?v:w;R=I>0?A:P;t.fill=T;t.stroke=R;if(wijmo_chart_1._DataInfo.isValid(F)&&wijmo_chart_1._DataInfo.isValid(I)){if(x){var X,D,O=F-.5*_,V=F+.5*_;if(O<C&&V<C||O>M&&V>M)continue;O=e.convert(O);V=e.convert(V);if(!wijmo_chart_1._DataInfo.isValid(O)||!wijmo_chart_1._DataInfo.isValid(V))continue;if(f){I/=this.dataInfo.getStackedAbsSum(F)}var B=isNaN(p[F])?0:p[F];X=B;D=B+I;p[F]=B+I;var G=e.convert(F),Y=a.convert(X),E=a.convert(D);G-=_/2;t.drawDonutSegment(h._center.x,h._center.y,E,Y,G+c,_,null,l.symbolStyle);(u=new wijmo_chart_1._DonutSegment(new wijmo_1.Point(h._center.x,h._center.y),E,Y,G+c,_,h.startAngle||0)).tag=new wijmo_chart_1._DataPoint(o,k,F,B+I);this.hitTester.add(u,o)}else{G=e.convert(F);var W=a.convert(Math.min(I,S));h._convertPoint(W,G);G-=_/2;t.drawPieSegment(h._center.x,h._center.y,W,G+c,_,null,l.symbolStyle);(u=new wijmo_chart_1._PieSegment(new wijmo_1.Point(h._center.x,h._center.y),W,G+c,_,h.startAngle)).tag=new wijmo_chart_1._DataPoint(o,k,F,I);this.hitTester.add(u,o)}h._areas[o].push(u);r._setPointIndex(k,L);L++}}}};return _RadarBarPlotter}(wijmo_chart_1._BarPlotter);exports._RadarBarPlotter=_RadarBarPlotter;!function(t){t[t.Column=0]="Column";t[t.Scatter=1]="Scatter";t[t.Line=2]="Line";t[t.LineSymbols=3]="LineSymbols";t[t.Area=4]="Area"}(RadarChartType=exports.RadarChartType||(exports.RadarChartType={}));var FlexRadar=function(t){__extends(FlexRadar,t);function FlexRadar(e,a){var r=t.call(this,e,a)||this;r._chartType=RadarChartType.Line;r._startAngle=0;r._totalAngle=360;r._reversed=!1;r._areas=[];return r}Object.defineProperty(FlexRadar.prototype,"_radarLinePlotter",{get:function(){if(null==this.__radarLinePlotter){this.__radarLinePlotter=new _RadarLinePlotter;this._initPlotter(this.__radarLinePlotter)}return this.__radarLinePlotter},enumerable:!0,configurable:!0});Object.defineProperty(FlexRadar.prototype,"_radarColumnPlotter",{get:function(){if(null==this.__radarColumnPlotter){this.__radarColumnPlotter=new _RadarBarPlotter;this._initPlotter(this.__radarColumnPlotter)}return this.__radarColumnPlotter},enumerable:!0,configurable:!0});FlexRadar.prototype._initAxes=function(){t.prototype._initAxes.call(this);this.axes.pop();this.axes.pop();this.axisX=new FlexRadarAxis(wijmo_chart_1.Position.Bottom);this.axisX.majorGrid=!0;this.axisY=new FlexRadarAxis(wijmo_chart_1.Position.Left);this.axisY.majorTickMarks=wijmo_chart_1.TickMark.Outside;this.axes.push(this.axisX);this.axes.push(this.axisY)};FlexRadar.prototype._layout=function(e,a,r){t.prototype._layout.call(this,e,a,r);var i=this.axisX._height;this._plotRect.top+=i/2;var s=this._plotRect;this._radius=Math.min(Math.max(20,s.width-i),s.height)/2;this._center=new wijmo_1.Point(s.left+s.width/2,s.top+s.height/2)};Object.defineProperty(FlexRadar.prototype,"chartType",{get:function(){return this._chartType},set:function(t){if((t=wijmo_1.asEnum(t,RadarChartType))!=this._chartType){this._chartType=t;this.invalidate()}},enumerable:!0,configurable:!0});Object.defineProperty(FlexRadar.prototype,"startAngle",{get:function(){return this._startAngle},set:function(t){if(t!=this._startAngle){this._startAngle=wijmo_1.asNumber(t,!0);this.invalidate()}},enumerable:!0,configurable:!0});Object.defineProperty(FlexRadar.prototype,"totalAngle",{get:function(){return this._totalAngle},set:function(t){if(t!=this._totalAngle&&t>=0){this._totalAngle=wijmo_1.asNumber(t,!0);if(this._totalAngle<=0){wijmo_1.assert(!1,"totalAngle must be greater than 0.");this._totalAngle=0}if(this._totalAngle>360){wijmo_1.assert(!1,"totalAngle must be less than or equal to 360.");this._totalAngle=360}this.invalidate()}},enumerable:!0,configurable:!0});Object.defineProperty(FlexRadar.prototype,"reversed",{get:function(){return this._reversed},set:function(t){if(t!=this._reversed){this._reversed=wijmo_1.asBoolean(t,!0);this.invalidate()}},enumerable:!0,configurable:!0});Object.defineProperty(FlexRadar.prototype,"stacking",{get:function(){return this._stacking},set:function(t){if((t=wijmo_1.asEnum(t,wijmo_chart_1.Stacking))!=this._stacking){this._stacking=t;this.invalidate()}},enumerable:!0,configurable:!0});FlexRadar.prototype._getChartType=function(){var t=wijmo_chart_1.ChartType.Line;switch(this.chartType){case RadarChartType.Area:t=wijmo_chart_1.ChartType.Area;break;case RadarChartType.Line:t=wijmo_chart_1.ChartType.Line;break;case RadarChartType.Column:t=wijmo_chart_1.ChartType.Column;break;case RadarChartType.LineSymbols:t=wijmo_chart_1.ChartType.LineSymbols;break;case RadarChartType.Scatter:t=wijmo_chart_1.ChartType.Scatter}return t};FlexRadar.prototype._getPlotter=function(e){var a=this.chartType,r=null;if(e){var i=e.chartType;if(null!=i&&i!=a){a=i;!0}}switch(a){case RadarChartType.Line:this._radarLinePlotter.hasSymbols=!1;this._radarLinePlotter.hasLines=!0;this._radarLinePlotter.isArea=!1;r=this._radarLinePlotter;break;case RadarChartType.LineSymbols:this._radarLinePlotter.hasSymbols=!0;this._radarLinePlotter.hasLines=!0;this._radarLinePlotter.isArea=!1;r=this._radarLinePlotter;break;case RadarChartType.Area:this._radarLinePlotter.hasSymbols=!1;this._radarLinePlotter.hasLines=!0;this._radarLinePlotter.isArea=!0;r=this._radarLinePlotter;break;case RadarChartType.Scatter:this._radarLinePlotter.hasSymbols=!0;this._radarLinePlotter.hasLines=!1;this._radarLinePlotter.isArea=!1;r=this._radarLinePlotter;break;case RadarChartType.Column:this._radarColumnPlotter.isVolume=!1;this._radarColumnPlotter.width=.8;r=this._radarColumnPlotter;break;default:r=t.prototype._getPlotter.call(this,e)}return r};FlexRadar.prototype._convertPoint=function(t,e){var a=new wijmo_1.Point,r=this._center;a.x=r.x+t*Math.sin(e);a.y=r.y-t*Math.cos(e);return a};FlexRadar.prototype._createSeries=function(){return new FlexRadarSeries};FlexRadar.prototype._clearCachedValues=function(){t.prototype._clearCachedValues.call(this);this._isPolar=!1;this._areas=[]};FlexRadar.prototype._performBind=function(){this._xDataType=null;this._xlabels.splice(0);this._xvals.splice(0);if(this._cv){var t=this._cv.items;if(t){for(var e=t.length,a=0;a<e;a++){var r=t[a],i=this.bindingX?new wijmo_1.Binding(this.bindingX):null;if(i){var s=i.getValue(r);if(wijmo_1.isNumber(s)){this._xvals.push(wijmo_1.asNumber(s));this._xDataType=wijmo_1.DataType.Number}else wijmo_1.isDate(s)&&(this._xDataType=wijmo_1.DataType.Date);this._xlabels.push(s)}}this._xvals.length==e?this._xlabels.splice(0):this._xvals.splice(0)}}this._xDataType===wijmo_1.DataType.Number&&(this._isPolar=!0)};FlexRadar.prototype._prepareRender=function(){t.prototype._prepareRender.call(this);this._areas=[]};return FlexRadar}(wijmo_chart_1.FlexChartCore);exports.FlexRadar=FlexRadar;var FlexRadarAxis=function(t){__extends(FlexRadarAxis,t);function FlexRadarAxis(){var e=null!==t&&t.apply(this,arguments)||this;e._points=[];e._axisLabels=[];return e}FlexRadarAxis.prototype._render=function(e){var a=this;if(this._hasVisibileSeries()){t.prototype._render.call(this,e);var r=this._axisLabels;if(r.length){var renderLabels=function(){var t=a.axisType==wijmo_chart_1.AxisType.X?"wj-axis-x-labels "+wijmo_chart_1.FlexChart._CSS_AXIS_X:"wj-axis-y-labels "+wijmo_chart_1.FlexChart._CSS_AXIS_Y;e.startGroup(t);r.forEach((function(t){var r=t.labelAngle;r>0?wijmo_chart_1.FlexChart._renderRotatedText(e,t.text,t.pos,t.align,t.vAlign,t.pos,r,t.class):r<0?wijmo_chart_1.FlexChart._renderRotatedText(e,t.text,t.pos,t.align,t.vAlign,t.pos,r,t.class):a._renderLabel(e,t.val,t.text,t.pos,t.align,t.vAlign,t.class)}));e.endGroup();a._axisLabels=[];a._chart.rendered.removeHandler(renderLabels)};this._chart.rendered.addHandler(renderLabels,this)}}};FlexRadarAxis.prototype._getHeight=function(e,a){var r=t.prototype._getHeight.call(this,e,a);this._axisType==wijmo_chart_1.AxisType.Y&&(r=4);this._height=2*r;return this._height};FlexRadarAxis.prototype._getActualRange=function(){return this._isTimeAxis&&null!=this.__actualMax&&null!=this.__actualMin?this.__actualMax-this.__actualMin:t.prototype._getActualRange.call(this)};FlexRadarAxis.prototype._updateActualLimits=function(e,a,r,i,s){var n=this;void 0===i&&(i=null);void 0===s&&(s=null);t.prototype._updateActualLimits.call(this,e,a,r,i,s);var o,l=this._chart,_=this._lbls,h=this.actualMin.valueOf?this.actualMin.valueOf():this.actualMin,c=this.actualMax.valueOf?this.actualMax.valueOf():this.actualMax;if(this._lbls&&this===l.axisX){l._angles=[];this._isTimeAxis&&0===this._lbls.length&&this._values.forEach((function(t){_.push(n._formatValue(t))}));o=_.length;l.totalAngle<360&&(o-=1);_.forEach((function(t,e){var a=h+e/o*(c-h),r=l.startAngle+e/o*l.totalAngle;isNaN(r)||isNaN(a)||l._angles.push({value:n.convert(a),angle:r});if(n._isTimeAxis){(null==n.__actualMin||n.__actualMin>t)&&(n.__actualMin=t);(null==n.__actualMax||n.__actualMax<t)&&(n.__actualMax=t)}else if(null!=n.__actualMin||null!=n.__actualMax){n.__actualMin=null;n.__actualMax=null}}));if(this._isTimeAxis&&this._lbls.length>0){this._updateAutoFormat(0);this._lbls=_.map((function(t){var e=wijmo_1.asDate(t).valueOf();return n._formatValue(e)}))}}};FlexRadarAxis.prototype._updateActualLimitsByChartType=function(t,e,a){var r=this._chart;if(r._getChartType()!=wijmo_chart_1.ChartType.Column&&360===r.totalAngle&&this.axisType===wijmo_chart_1.AxisType.X)if(this._isTimeAxis){var i=(r._xlabels.length||r._xvals.length)-1;a+=(a-e)/(i=i<1?1:i)}else r._isPolar||(a+=1);return{min:e,max:a}};FlexRadarAxis.prototype._isOverlapped=function(t,e,a,r){return!1};FlexRadarAxis.prototype.convert=function(t,e,a){var r=null==e?this.actualMax:e,i=null==a?this.actualMin:a,s=this._chart;if(!s)return NaN;if(r==i)return 0;if(this.axisType===wijmo_chart_1.AxisType.X)return s.reversed?(s.startAngle-(t-i)/(r-i)*s.totalAngle)*Math.PI/180:(s.startAngle+(t-i)/(r-i)*s.totalAngle)*Math.PI/180;if(this._getLogBase()){if(t<=0)return NaN;var n=Math.log(r/i);return Math.log(t/i)/n*s._radius}return(t-i)/(r-i)*s._radius};FlexRadarAxis.prototype._renderLineAndTitle=function(t){var e=this._chart,a=wijmo_chart_1.FlexChart._CSS_LINE,r=(e.startAngle-90)*Math.PI/180,i=e.totalAngle*Math.PI/180,s=e._radius;if(this.axisType===wijmo_chart_1.AxisType.X&&this.axisLine){t.stroke=wijmo_chart_1.FlexChart._FG;if(e._isPolar){r=e.reversed?r-i:r;t.drawPieSegment(e._center.x,e._center.y,s,r,i,a)}else this._renderPolygon(t,s,a)}};FlexRadarAxis.prototype._renderPolygon=function(t,e,a){var r=this._chart,i=r._angles,s=i.length,n=r.axisX.minorGrid,o=[],l=[];i.forEach((function(t,a){if(n&&a>0){var s=r._convertPoint(e,t.value-(t.value-i[a-1].value)/2);o.push(s.x);l.push(s.y)}var _=r._convertPoint(e,t.value);o.push(_.x);l.push(_.y)}));if(r.totalAngle<360){o.push(r._center.x);l.push(r._center.y)}else if(n&&s>=2){var _=r._convertPoint(e,i[s-1].value-(i[s-2].value-i[s-1].value)/2);o.push(_.x);l.push(_.y)}t.drawPolygon(o,l,a)};FlexRadarAxis.prototype._renderMinors=function(t,e,a,r){var i,s=this,n=this._chart,o=wijmo_chart_1.FlexChart._CSS_GRIDLINE_MINOR,l=this.minorGrid,_=n._angles,h=_.length,c=n.axisX.minorGrid,u=wijmo_chart_1.FlexChart._FG,d=this._GRIDLINE_WIDTH,p=(n.startAngle,Math.PI,n.totalAngle,Math.PI,this._TICK_OVERLAP),x=this.minorTickMarks,f=!0;this._vals.minor=e;x==wijmo_chart_1.TickMark.Outside?p=1:x==wijmo_chart_1.TickMark.Inside?p=-1:x==wijmo_chart_1.TickMark.Cross?p=0:f=!1;if(this.axisType==wijmo_chart_1.AxisType.Y){t.stroke=u;t.strokeWidth=d;e.forEach((function(e){var a=s.convert(e);l&&s._renderYGridLine(t,n,a,o);if(f){_.forEach((function(e,r){if(c&&r>0){i=e.value-(e.value-_[r-1].value)/2;var o=n._convertPoint(a,i);s._drawMinorTickLength(t,p,i,o)}i=e.value;var l=n._convertPoint(a,i);s._drawMinorTickLength(t,p,i,l)}));if(c&&h>=2){i=_[h-1].value-(_[h-2].value-_[h-1].value)/2;var r=n._convertPoint(a,i);s._drawMinorTickLength(t,p,i,r)}}}))}else{t.stroke=u;t.strokeWidth=d;e.forEach((function(e){var a=s.convert(e);if(l){s._renderXGridLine(t,n,a,o);f&&s._drawMinorTickLength(t,p,a-Math.PI/2,n._convertPoint(n._radius,a))}}))}};FlexRadarAxis.prototype._drawMinorTickLength=function(t,e,a,r){var i=this._TICK_HEIGHT,s=wijmo_chart_1.FlexChart._CSS_TICK_MINOR,n=.5*(e-1)*i*Math.cos(a),o=.5*(1+e)*i*Math.cos(a),l=.5*(e-1)*i*Math.sin(a),_=.5*(1+e)*i*Math.sin(a);t.drawLine(r.x+n,r.y+l,r.x+o,r.y+_,s)};FlexRadarAxis.prototype._renderLabelsAndTicks=function(t,e,a,r,i,s,n,o,l){this._points=[];i=this.labelAngle||0;var _,h=this._chart,c=this.labelPadding||2,u=wijmo_chart_1.FlexChart._CSS_LABEL,d=wijmo_chart_1.FlexChart._CSS_GRIDLINE,p=wijmo_chart_1.FlexChart._CSS_TICK,x=wijmo_chart_1.FlexChart._FG,f=this._TICK_WIDTH,m=this.majorGrid,y=wijmo_chart_1.FlexChart._FG,g=this._GRIDLINE_WIDTH,v=h.startAngle*Math.PI/180,w=(h.totalAngle,Math.PI,1);if(this.axisType==wijmo_chart_1.AxisType.Y){m=a!=this.actualMin&&m&&a!=this.actualMax;var A=this.convert(a),P=h._convertPoint(A,v);if(m){t.stroke=y;t.strokeWidth=g;this._renderYGridLine(t,h,A,d)}t.stroke=x;t.strokeWidth=f;if(n){(_=(h.startAngle%360+360)%360)<=90&&_>=75||_>=270&&_<=285?w=2:(_>90&&_<=105||_<270&&_>=255)&&(w=0);var j=new wijmo_1.Point(P.x-c-Math.abs(o-l),P.y);this._axisLabels.push({val:a,text:r,pos:j,align:2,vAlign:w,labelAngle:i,class:u})}s!=wijmo_chart_1.TickMark.None&&t.drawLine(P.x-l*Math.cos(v),P.y-l*Math.sin(v),P.x-o*Math.cos(v),P.y-o*Math.sin(v),p)}else{var T=this.convert(a);if(m){t.stroke=y;t.strokeWidth=g;this._renderXGridLine(t,h,T,d)}t.stroke=x;t.strokeWidth=f;if(n){var R,b,L;j=h._convertPoint(h._radius+c,T);R=h._angles&&h._angles.length?h._angles[e].angle:h.startAngle+(a-this.actualMin)*h.totalAngle/(this.actualMax-this.actualMin);R=(R%=360)>=0?R:R+360;b=this._getXLabelVAlign(R);L=this._getXLabelAlign(R);h._isPolar&&(r=this._formatValue(R));i>0?wijmo_chart_1.FlexChart._renderRotatedText(t,r,j,L,b,j,i,u):i<0?wijmo_chart_1.FlexChart._renderRotatedText(t,r,j,L,b,j,i,u):this._renderLabel(t,a,r,j,L,b,u)}s!=wijmo_chart_1.TickMark.None&&this._renderXTick(t,h,T,p,o,l)}return!0};FlexRadarAxis.prototype._renderXGridLine=function(t,e,a,r){var i=e._center,s=e._convertPoint(e._radius,a);t.drawLine(i.x,i.y,s.x,s.y,r)};FlexRadarAxis.prototype._renderXTick=function(t,e,a,r,i,s){var n,o;e._center;n=e._convertPoint(e._radius+i,a);o=e._convertPoint(e._radius+s,a);t.drawLine(n.x,n.y,o.x,o.y,r)};FlexRadarAxis.prototype._renderYGridLine=function(t,e,a,r){e._angles;var i=e._center,s=e.startAngle*Math.PI/180,n=e.totalAngle*Math.PI/180;if(e._isPolar){s=(e.startAngle-90)*Math.PI/180;s=e.reversed?s-n:s;t.drawPieSegment(i.x,i.y,a,s,n,r)}else this._renderPolygon(t,a,r)};FlexRadarAxis.prototype._getXLabelVAlign=function(t){var e=1,a=this._chart,r=a.startAngle;a.reversed&&(t=(360+r+(r%360-t%360))%360);0===t?e=2:180===t&&(e=0);return e};FlexRadarAxis.prototype._getXLabelAlign=function(t){var e=0,a=this._chart,r=a.startAngle;a.reversed&&(t=(360+r+(r%360-t%360))%360);t>0&&t<180?e=-1:t>180&&t<360&&(e=1);return e+1};FlexRadarAxis.prototype._createTimeLabels=function(e,a,r,i){var s=this;if(this._axisType==wijmo_chart_1.AxisType.Y)t.prototype._createTimeLabels.call(this,e,a,r,i);else{var n=this._values;this.format;if(!n||0===n.length)return;n.forEach((function(t){r.push(t);i.push(s._formatValue(t))}))}};FlexRadarAxis.prototype._niceNumber=function(e,a,r){var i=this._chart,s=this.actualMax-this.actualMin,n=i.totalAngle;n>360&&(n%=360);return i._isPolar?n%8==0?s/8:n%6==0?s/6:n%4==0?s/4:n%3==0?s/3:n%2==0?s/2:t.prototype._niceNumber.call(this,e,a,r):t.prototype._niceNumber.call(this,e,a,r)};return FlexRadarAxis}(wijmo_chart_1.Axis);exports.FlexRadarAxis=FlexRadarAxis;wijmo_1._registerModule("wijmo.chart.radar",selfModule);