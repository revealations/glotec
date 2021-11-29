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
 * {@module wijmo.react.grid.transposed}
 * Contains React components for the <b>wijmo.grid.transposed</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from 'wijmo/wijmo.react.base';
/**
 * React component for the {@link wijmo.grid.transposed.TransposedGrid} control.
 *
 * The <b>transposed-grid</b> component may contain
 * a {@link wijmo.react.grid.transposed.TransposedGridRow} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.transposed.TransposedGrid} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class TransposedGrid extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.grid.transposed.TransposedGridRow} class.
 *
 * The <b>transposed-grid-row</b> component should be contained in
 * a {@link wijmo.react.grid.transposed.TransposedGrid} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.transposed.TransposedGridRow} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class TransposedGridRow extends ComponentBase {
    _parentProp: string;
    constructor(props: any);
    protected _initParent(): void;
}
