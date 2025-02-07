/** @odoo-module **/


import { registry } from '@web/core/registry';
import { Component, useState } from "@odoo/owl";

class OwlToDoList extends Component {

    setup(){
        this.state = useState({
            taskList: [
                {id:1, name:"Task 1", color:"#115095", completed: true},
                {id:2, name:"Task 2", color:"#984738", completed: true},
                {id:3, name:"Task 3", color: "#cb9898", completed: false},
            ]
        });
    }

    increment(){
        this.state.value++;
    }

    static template = 'odoo-JS.ToDoList_Owl_Js'
}

export default OwlToDoList
registry.category('actions').add('odoo-JS.action_owl_todo_list_js', OwlToDoList)