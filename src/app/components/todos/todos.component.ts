import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];


  constructor(private tds:TodoService) { }

  ngOnInit() {
    this.tds.getTodos().subscribe(todos => {
      this.todos = todos
    });
  }

  deleteTodo(todo:Todo){
    this.todos = this.todos.filter(t => t.id != todo.id);

    this.tds.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo){
     this.tds.addTodo(todo).subscribe(todo => {
       this.todos.push(todo);
     });
  }

}
