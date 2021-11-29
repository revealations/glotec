/*!
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
/**
 * {@module wijmo.react.chart.map}
 * Contains React components for the <b>wijmo.chart.map</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from 'wijmo/wijmo.react.base';
/**
 * React component for the {@link wijmo.chart.map.FlexMap} control.
 *
 * The <b>flex-map</b> component may contain
 * the following child components:
 * {@link wijmo.react.chart.FlexChartLegend}
 * , {@link wijmo.react.chart.map.ScatterMapLayer}
 * , {@link wijmo.react.chart.map.GeoMapLayer}
 * and {@link wijmo.react.chart.map.GeoGridLayer}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.map.FlexMap} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexMap extends ComponentBase {
    constructor(props: any);
    componentDidMount(): any;
    componentDidUpdate(prevProps: any): void;
    private _setExtra;
}
/**
 * React component for the {@link wijmo.chart.map.ScatterMapLayer} class.
 *
 * The <b>scatter-map-layer</b> component should be contained in
 * a {@link wijmo.react.chart.map.FlexMap} component.
 *
 * The <b>scatter-map-layer</b> component may contain
 * a {@link wijmo.react.chart.map.ColorScale} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.map.ScatterMapLayer} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class ScatterMapLayer extends ComponentBase {
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.map.GeoMapLayer} class.
 *
 * The <b>geo-map-layer</b> component should be contained in
 * a {@link wijmo.react.chart.map.FlexMap} component.
 *
 * The <b>geo-map-layer</b> component may contain
 * a {@link wijmo.react.chart.map.ColorScale} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.map.GeoMapLayer} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class GeoMapLayer extends ComponentBase {
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.map.GeoGridLayer} class.
 *
 * The <b>geo-grid-layer</b> component should be contained in
 * a {@link wijmo.react.chart.map.FlexMap} component.
 *
 * The <b>geo-grid-layer</b> component may contain
 * a {@link wijmo.react.chart.map.ColorScale} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.map.GeoGridLayer} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class GeoGridLayer extends ComponentBase {
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.map.ColorScale} class.
 *
 * The <b>color-scale</b> component should be contained in
 * one of the following components:
 * {@link wijmo.react.chart.map.ScatterMapLayer}
 * , {@link wijmo.react.chart.map.GeoMapLayer}
 *  or {@link wijmo.react.chart.map.GeoGridLayer}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.map.ColorScale} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class ColorScale extends ComponentBase {
    _parentProp: string;
    constructor(props: any);
}
