/** @odoo-module **/

import { useState, markup, Component } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Card } from "./card/card";

export class Playground extends Component {
    static template = "awesome_owl.playground";
    static components = { Counter, Card }; // tell Playground what it will need for the awesome_owl.playground template

    value1 = "<div><strong>some text 1</strong></div>";
    value2 = markup("<div><strong>some text 2</strong></div>")

    sum = useState({value: 0});
    
    incrementSum() { // this gets called from the counter, cause we passed this function to counter in playground.xml as the 'onChange' property
        this.sum.value++;
    }
}
