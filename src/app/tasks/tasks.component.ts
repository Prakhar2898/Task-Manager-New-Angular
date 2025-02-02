import { Component, Input } from '@angular/core';
import { NewTask } from './task/task.modle';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isActivate: boolean = false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get userTaskByUserId() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  removeCompletedTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
  onNewTask() {
    this.isActivate = true;
  }
  onCancelTask() {
    this.isActivate = false;
  }
  onSubmittingTask(newTask: NewTask) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate
    })
    this.isActivate = false;
  }

}
