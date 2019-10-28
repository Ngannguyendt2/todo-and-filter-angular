import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  name = new FormControl('');
  userInput = new FormControl();
  todos: Array<IToDo> = [];
  constructor() {
  }
  ngOnInit() {
  }


  onChange() {
    const {value} = this.userInput;
    let index = 1;
    if (value) {
      const todo: IToDo = {
        id: index++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }

  toggleTodo(i) {
    this.todos[i].complete = !this.todos[i].complete;
  }
}
