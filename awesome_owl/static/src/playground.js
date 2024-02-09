/** @odoo-module **/
import { useState, Component } from "@odoo/owl";

export class Counter extends Component {
    static template = "awesome_owl.counter";

    state = useState({value:0});

    increment() {
        this.state.value++;
    }
    
}

export class Playground extends Component {
    static template = "awesome_owl.playground";
    
    state = useState({value: 0});

    increment() {
        this.state.value++;
    }
    
    static components = {Counter};
}
