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
 * {@module wijmo.react.grid.sheet}
 * Contains React components for the <b>wijmo.grid.sheet</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from 'wijmo/wijmo.react.base';
/**
 * React component for the {@link wijmo.grid.sheet.FlexSheet} control.
 *
 * The <b>flex-sheet</b> component may contain
 * a {@link wijmo.react.grid.sheet.Sheet} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.sheet.FlexSheet} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexSheet extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.grid.sheet.Sheet} class.
 *
 * The <b>sheet</b> component should be contained in
 * a {@link wijmo.react.grid.sheet.FlexSheet} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.sheet.Sheet} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class Sheet extends ComponentBase {
    _parentProp: string;
    _parentInCtor: boolean;
    constructor(props: any);
}
