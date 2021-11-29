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
 * {@module wijmo.react.input}
 * Contains React components for the <b>wijmo.input</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from 'wijmo/wijmo.react.base';
import * as wjcCore from 'wijmo/wijmo';
/**
 * React component for the {@link wijmo.input.ListBox} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.ListBox} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The component includes a <b>wjItemTemplate</b> property which is used to define list item template.
 * The template is a function with single argument. The argument is a plain object with keys of
 * <b>control</b> (list control, owner of the list item),
 * <b>item</b> (item data for the list item) and
 * <b>itemIndex</b> (zero-based index of the list item).
 */
export declare class ListBox extends ComponentBase {
    wjItemTemplate: ItemTemplateRender;
    constructor(props: any);
    componentDidMount(): any;
}
/**
 * React component for the {@link wijmo.input.MultiSelectListBox} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.MultiSelectListBox} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class MultiSelectListBox extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.ComboBox} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.ComboBox} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The component includes a <b>wjItemTemplate</b> property which is used to define list item template.
 * The template is a function with single argument. The argument is a plain object with keys of
 * <b>control</b> (list control, owner of the list item),
 * <b>item</b> (item data for the list item) and
 * <b>itemIndex</b> (zero-based index of the list item).
 */
export declare class ComboBox extends ComponentBase {
    wjItemTemplate: ItemTemplateRender;
    constructor(props: any);
    componentDidMount(): any;
}
/**
 * React component for the {@link wijmo.input.AutoComplete} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.AutoComplete} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class AutoComplete extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.Calendar} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.Calendar} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class Calendar extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.ColorPicker} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.ColorPicker} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class ColorPicker extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.InputMask} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.InputMask} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class InputMask extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.InputColor} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.InputColor} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class InputColor extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.MultiSelect} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.MultiSelect} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The component includes a <b>wjItemTemplate</b> property which is used to define list item template.
 * The template is a function with single argument. The argument is a plain object with keys of
 * <b>control</b> (list control, owner of the list item),
 * <b>item</b> (item data for the list item) and
 * <b>itemIndex</b> (zero-based index of the list item).
 */
export declare class MultiSelect extends ComponentBase {
    wjItemTemplate: ItemTemplateRender;
    constructor(props: any);
    componentDidMount(): any;
}
/**
 * React component for the {@link wijmo.input.MultiAutoComplete} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.MultiAutoComplete} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class MultiAutoComplete extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.InputNumber} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.InputNumber} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class InputNumber extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.InputDate} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.InputDate} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class InputDate extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.InputTime} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.InputTime} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class InputTime extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.InputDateTime} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.InputDateTime} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class InputDateTime extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.InputDateRange} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.InputDateRange} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class InputDateRange extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.Menu} control.
 *
 * The <b>menu</b> component may contain
 * the following child components:
 * {@link wijmo.react.input.MenuItem}
 * and {@link wijmo.react.input.MenuSeparator}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.Menu} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The component includes a <b>wjItemTemplate</b> property which is used to define list item template.
 * The template is a function with single argument. The argument is a plain object with keys of
 * <b>control</b> (list control, owner of the list item),
 * <b>item</b> (item data for the list item) and
 * <b>itemIndex</b> (zero-based index of the list item).
 *
 * The component includes a <b>contextMenuOf</b> property which is used to assign context menu to elements or controls.
 * Value of the property can be id attribute of HTMLElement, reference or array of HTMLElement/ReactComponent.
 */
export declare class Menu extends ComponentBase {
    wjItemTemplate: ItemTemplateRender;
    private _definedHeader;
    private _value;
    private _contextMenuData;
    readonly contextMenuProp: string;
    constructor(props: any);
    value: any;
    componentDidMount(): any;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    protected _createControl(): any;
    private _updateHeader;
    private _fmtItem;
    private _contextMenuGetElementsIfChanged;
    private _contextMenuGetElements;
    private _contextMenuBindListeners;
    private _contextMenuUnbindListeners;
}
/**
 * React component that represents an item in a {@link wijmo.react.input.Menu} control.
 *
 * The <b>menu-item</b> component should be contained in
 * a {@link wijmo.react.input.Menu} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link } class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class MenuItem extends ComponentBase {
    _parentProp: string;
    _siblingId: string;
    contentRoot: HTMLElement;
    value: any;
    cmd: any;
    cmdParam: any;
    constructor(props: any);
    protected _createControl(): any;
    _renderImpl(): any;
    added(toItem: HTMLElement): void;
}
/**
* React component that represents an item separator in a {@link wijmo.react.input.Menu} control.
 *
 * The <b>menu-separator</b> component should be contained in
 * a {@link wijmo.react.input.Menu} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link } class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class MenuSeparator extends ComponentBase {
    _parentProp: string;
    _siblingId: string;
    contentRoot: HTMLElement;
    constructor(props: any);
    protected _createControl(): any;
    _renderImpl(): any;
    added(toItem: HTMLElement): void;
}
/**
 * TBD
 */
export interface ItemTemplateContext {
    control: wjcCore.Control;
    item: any;
    itemIndex: number;
}
/**
 * TBD
 */
export declare type ItemTemplateRender = (context: ItemTemplateContext) => any;
/**
 * React component for the {@link wijmo.input.Popup} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.Popup} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class Popup extends ComponentBase {
    constructor(props: any);
    _renderImpl(): any;
}
/**
 * React component for the {@link wijmo.input.CollectionViewNavigator} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.CollectionViewNavigator} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class CollectionViewNavigator extends ComponentBase {
    constructor(props: any);
}
