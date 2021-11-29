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
 * {@module wijmo.react.nav}
 * Contains React components for the <b>wijmo.nav</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from 'wijmo/wijmo.react.base';
/**
 * React component for the {@link wijmo.nav.TreeView} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.nav.TreeView} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class TreeView extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.nav.TabPanel} control.
 *
 * The <b>tab-panel</b> component may contain
 * a {@link wijmo.react.nav.Tab} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.nav.TabPanel} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class TabPanel extends ComponentBase {
    constructor(props: any);
    protected _createControl(): any;
    componentDidMount(): void;
}
/**
 * React component for the {@link wijmo.nav.Tab} class.
 *
 * The <b>tab</b> component should be contained in
 * a {@link wijmo.react.nav.TabPanel} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.nav.Tab} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class Tab extends ComponentBase {
    _parentProp: string;
    constructor(props: any);
    protected _createControl(): any;
    protected _renderImpl(): any;
}
/**
 * React component for the {@link wijmo.nav.Accordion} control.
 *
 * The <b>accordion</b> component may contain
 * a {@link wijmo.react.nav.AccordionPane} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.nav.Accordion} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class Accordion extends ComponentBase {
    constructor(props: any);
    protected _createControl(): any;
    componentDidMount(): void;
}
/**
 * React component for the {@link wijmo.nav.AccordionPane} class.
 *
 * The <b>accordion-pane</b> component should be contained in
 * a {@link wijmo.react.nav.Accordion} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.nav.AccordionPane} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class AccordionPane extends ComponentBase {
    _parentProp: string;
    constructor(props: any);
    protected _createControl(): any;
    protected _renderImpl(): any;
}
