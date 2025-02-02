import { Component, EventEmitter, Input, Output, computed, input, signal } from '@angular/core';
import { type User } from './user.modle';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();
  @Input({ required: true }) selected !: boolean;
  //name = input.required<string>();

  imagePath = computed(() => {
    console.log(this.user.avatar);
    return 'assets/users/' + this.user.avatar;
  })

  onSelectUser() {
    //console.log(this.id, this.name);

    this.select.emit(this.user.id);
  }

}
