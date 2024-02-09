/** @odoo-module **/
import { useState, Component } from "@odoo/owl";

export class Counter extends Component {
    static template = "awesome_owl.counter";

    static props = {
        onChange: { type: Function, optional: true } // a property called 'onChange' may be passed which should contain a function
    }

    state = useState({value:0});

    increment() {
        this.state.value++;

        if (this.props.onChange){ // if the onChange property was defined with a function
            // call it
            this.props.onChange();
        }
    }
    
}