import { Component } from '@angular/core';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'demo-todolist'
  faTimes = faTimes
  faCheck = faCheck
  toDoList: { title: string, done: boolean }[] = [
    {
      title: 'Title',
      done: false
    },
    {
      title: 'Title2',
      done: true
    },
    {
      title: 'Title3',
      done: false
    }
  ]
}
