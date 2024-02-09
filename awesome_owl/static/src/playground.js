/** @odoo-module **/

import { useState, Component } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Card } from "./card/card";

export class Playground extends Component {
    static template = "awesome_owl.playground";
    static components = { Counter, Card }; // tell Playground what it will need for the awesome_owl.playground template
}
