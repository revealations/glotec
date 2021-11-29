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
 * {@module wijmo.react.chart.radar}
 * Contains React components for the <b>wijmo.chart.radar</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from 'wijmo/wijmo.react.base';
/**
 * React component for the {@link wijmo.chart.radar.FlexRadar} control.
 *
 * The <b>flex-radar</b> component may contain
 * the following child components:
 * {@link wijmo.react.chart.animation.FlexChartAnimation}
 * , {@link wijmo.react.chart.radar.FlexRadarAxis}
 * , {@link wijmo.react.chart.radar.FlexRadarSeries}
 * and {@link wijmo.react.chart.FlexChartLegend}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.radar.FlexRadar} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexRadar extends ComponentBase {
    constructor(props: any);
    componentDidMount(): any;
    componentDidUpdate(prevProps: any): void;
    private _setExtra;
}
/**
 * React component for the {@link wijmo.chart.radar.FlexRadarAxis} class.
 *
 * The <b>flex-radar-axis</b> component should be contained in
 * one of the following components:
 * {@link wijmo.react.chart.radar.FlexRadar}
 *  or {@link wijmo.react.chart.radar.FlexRadarSeries}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.radar.FlexRadarAxis} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexRadarAxis extends ComponentBase {
    _parentProp: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.chart.radar.FlexRadarSeries} class.
 *
 * The <b>flex-radar-series</b> component should be contained in
 * a {@link wijmo.react.chart.radar.FlexRadar} component.
 *
 * The <b>flex-radar-series</b> component may contain
 * a {@link wijmo.react.chart.radar.FlexRadarAxis} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.radar.FlexRadarSeries} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexRadarSeries extends ComponentBase {
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
