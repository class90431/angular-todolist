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
      title: 'demo0',
      done: false
    },
    {
      title: 'demo1',
      done: false
    },
    {
      title: 'demo2',
      done: true
    }
  ]
  cacheTitle: string = ''

  addToDo(): void {
    if (this.cacheTitle.trim().length === 0) {
      alert('請填寫代辦事項喔！')
      return
    }
    this.toDoList.push({
      title: this.cacheTitle,
      done: false
    })
    this.cacheTitle = ''
  }
  removeToDo(index: number): void {
    this.toDoList.splice(index, 1)
  }
  doneToDo(item) {
    item.done = !item.done
  }
}
