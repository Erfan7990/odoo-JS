/** @odoo-module **/
import { registry } from "@web/core/registry";
const { Component, useState } = owl;

export class QwlTodoList extends Component {
    setup(){
        this.state = useState({
            taskList:[
            {id: 1, name:'Task 1', color:'#FF0000', completed: false},
            {id: 2, name:'Task 2', color:'#e67e22', completed: true},
            {id: 3, name:'Task 3', color:'#34495e', completed: true},
            ]
        });
    }
}

QwlTodoList.template = 'owl_js.TodoList';
registry.category('actions').add('owl_js.action_todo_list_js', QwlTodoList);
