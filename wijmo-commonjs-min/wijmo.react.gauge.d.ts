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
 * {@module wijmo.react.gauge}
 * Contains React components for the <b>wijmo.gauge</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from 'wijmo/wijmo.react.base';
/**
 * React component for the {@link wijmo.gauge.LinearGauge} control.
 *
 * The <b>linear-gauge</b> component may contain
 * a {@link wijmo.react.gauge.Range} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.gauge.LinearGauge} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The example below shows how to instantiate and initialize a
 * {@link wijmo.gauge.LinearGauge} control in JSX:
 *
 * <pre>&lt;Wj.LinearGauge
 *   min={ 0 } max={ 1000 } step={ 50 } isReadOnly={ false }
 *   value={ this.state.view.currentItem.sales }
 *   valueChanged={ this.salesChanged }
 *   format="c0" thumbSize={ 20 } showRanges={ false }
 *   face={&#8203;{ thickness:0.5 }}
 *   pointer={&#8203;{ thickness:0.5 }}
 *   ranges={[
 *       { min: 0, max: 333, color: 'red' },
 *       { min: 333, max: 666, color: 'gold' },
 *       { min: 666, max: 1000, color: 'green' }
 *   ]} /&gt;</pre>
 *
 * The code <b>min</b>, <b>max</b>, <b>step</b>, and <b>isReadOnly</b> properties
 * to define the range of the gauge and to allow users to edit its value.
 * Next, it sets the <b>value</b> and <b>valueChanged</b> properties to create
 * a two-way binding for the gauge's value.
 *
 * Then it sets the <b>format</b>, <b>thumbSize</b>, and <b>showRanges</b>
 * properties to define the appearance of the gauge. Finally, the markup sets
 * the thickness of the <b>face</b> and <b>pointer</b> ranges, and extra ranges
 * that will control the color of the <b>value</b> range depending on the gauge's
 * current value.
 */
export declare class LinearGauge extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.gauge.BulletGraph} control.
 *
 * The <b>bullet-graph</b> component may contain
 * a {@link wijmo.react.gauge.Range} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.gauge.BulletGraph} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The example below shows how to instantiate and initialize a
 * {@link wijmo.gauge.BulletGraph} control in JSX:
 *
 * <pre>&lt;Wj.BulletGraph
 *   min={ 0 } max={ 1000 } step={ 50 } isReadOnly={ false }
 *   value={ this.state.view.currentItem.sales }
 *   valueChanged={ this.salesChanged }
 *   format="c0" thumbSize={ 20 } showRanges={ false }
 *   face={&#8203;{ thickness:0.5 }}
 *   pointer={&#8203;{ thickness:0.5 }}
 *   ranges={[
 *       { min: 0, max: 333, color: 'red' },
 *       { min: 333, max: 666, color: 'gold' },
 *       { min: 666, max: 1000, color: 'green' }
 *   ]} /&gt;</pre>
 *
 * The code <b>min</b>, <b>max</b>, <b>step</b>, and <b>isReadOnly</b> properties
 * to define the range of the gauge and to allow users to edit its value.
 * Next, it sets the <b>value</b> and <b>valueChanged</b> properties to create
 * a two-way binding for the gauge's value.
 *
 * Then it sets the <b>format</b>, <b>thumbSize</b>, and <b>showRanges</b>
 * properties to define the appearance of the gauge. Finally, the markup sets
 * the thickness of the <b>face</b> and <b>pointer</b> ranges, and extra ranges
 * that will control the color of the <b>value</b> range depending on the gauge's
 * current value.
 */
export declare class BulletGraph extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.gauge.RadialGauge} control.
 *
 * The <b>radial-gauge</b> component may contain
 * a {@link wijmo.react.gauge.Range} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.gauge.RadialGauge} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The example below shows how to instantiate and initialize a
 * {@link wijmo.gauge.RadialGauge} control in JSX:
 *
 * <pre>&lt;Wj.RadialGauge
 *   min={ 0 } max={ 1000 } step={ 50 } isReadOnly={ false }
 *   value={ this.state.view.currentItem.sales }
 *   valueChanged={ this.salesChanged }
 *   format="c0" thumbSize={ 20 } showRanges={ false }
 *   face={&#8203;{ thickness:0.5 }}
 *   pointer={&#8203;{ thickness:0.5 }}
 *   ranges={[
 *       { min: 0, max: 333, color: 'red' },
 *       { min: 333, max: 666, color: 'gold' },
 *       { min: 666, max: 1000, color: 'green' }
 *   ]} /&gt;</pre>
 *
 * The code <b>min</b>, <b>max</b>, <b>step</b>, and <b>isReadOnly</b> properties
 * to define the range of the gauge and to allow users to edit its value.
 * Next, it sets the <b>value</b> and <b>valueChanged</b> properties to create
 * a two-way binding for the gauge's value.
 *
 * Then it sets the <b>format</b>, <b>thumbSize</b>, and <b>showRanges</b>
 * properties to define the appearance of the gauge. Finally, the markup sets
 * the thickness of the <b>face</b> and <b>pointer</b> ranges, and extra ranges
 * that will control the color of the <b>value</b> range depending on the gauge's
 * current value.
 */
export declare class RadialGauge extends ComponentBase {
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.gauge.Range} class.
 *
 * The <b>range</b> component should be contained in
 * one of the following components:
 * {@link wijmo.react.gauge.LinearGauge}
 * , {@link wijmo.react.gauge.BulletGraph}
 *  or {@link wijmo.react.gauge.RadialGauge}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.gauge.Range} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class Range extends ComponentBase {
    _parentProp: string;
    constructor(props: any);
}
