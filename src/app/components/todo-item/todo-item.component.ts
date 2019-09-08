import { Component, OnInit , Input , EventEmitter , Output } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/todo.service';
import { splitClasses } from '@angular/compiler';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private tds:TodoService) { }

  ngOnInit() {
  }

  setClasses(){
    let classes={
      todo: true,
      'is-completed':this.todo.completed
    }
    return classes;
  }

  onToggle(todo){
    todo.completed = !todo.completed

    this.tds.toggleCompleted(todo).subscribe(todo => console.log(todo) );
  }

  onDelete(todo){
    this.deleteTodo.emit(todo);
  }


}
