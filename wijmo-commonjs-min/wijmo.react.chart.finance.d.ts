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
 * {@module wijmo.react.chart.finance}
 * Contains React components for the <b>wijmo.chart.finance</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from 'wijmo/wijmo.react.base';
/**
 * React component for the {@link wijmo.chart.finance.FinancialChart} control.
 *
 * The <b>financial-chart</b> component may contain
 * the following child components:
 * {@link wijmo.react.chart.analytics.FlexChartTrendLine}
 * , {@link wijmo.react.chart.analytics.FlexChartMovingAverage}
 * , {@link wijmo.react.chart.analytics.FlexChartYFunctionSeries}
 * , {@link wijmo.react.chart.analytics.FlexChartParametricFunctionSeries}
 * , {@link wijmo.react.chart.analytics.FlexChartWaterfall}
 * , {@link wijmo.react.chart.analytics.FlexChartBoxWhisker}
 * , {@link wijmo.react.chart.animation.FlexChartAnimation}
 * , {@link wijmo.react.chart.annotation.FlexChartAnnotationLayer}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartFibonacci}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartFibonacciArcs}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartFibonacciFans}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartFibonacciTimeZones}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartAtr}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartCci}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartRsi}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartWilliamsR}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartMacd}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartMacdHistogram}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartStochastic}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartBollingerBands}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartEnvelopes}
 * , {@link wijmo.react.chart.finance.FinancialChartSeries}
 * , {@link wijmo.react.chart.interaction.FlexChartRangeSelector}
 * , {@link wijmo.react.chart.interaction.FlexChartGestures}
 * , {@link wijmo.react.chart.FlexChartAxis}
 * , {@link wijmo.react.chart.FlexChartLegend}
 * , {@link wijmo.react.chart.FlexChartLineMarker}
 * and {@link wijmo.react.chart.FlexChartPlotArea}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.finance.FinancialChart} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FinancialChart extends ComponentBase {
    constructor(props: any);
    componentDidMount(): any;
    componentDidUpdate(prevProps: any): void;
    private _setExtra;
}
/**
 * React component for the {@link wijmo.chart.finance.FinancialSeries} class.
 *
 * The <b>financial-chart-series</b> component should be contained in
 * a {@link wijmo.react.chart.finance.FinancialChart} component.
 *
 * The <b>financial-chart-series</b> component may contain
 * a {@link wijmo.react.chart.FlexChartAxis} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.finance.FinancialSeries} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FinancialChartSeries extends ComponentBase {
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
