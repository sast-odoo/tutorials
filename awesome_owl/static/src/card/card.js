/** @odoo-module **/
import { useState, Component } from "@odoo/owl";

export class Card extends Component {
    static template = "awesome_owl.card";    

    // In dev mode, this enforces that the properties "title" and "content" passed to Card are both of type String
    static props = {
        title: {type: String},
        content: {type: String}
    }
}