import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./tasks/task/task.component";
import { CardComponent } from "./shared/card/card.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent, CardComponent, TaskComponent, TasksComponent, NewTaskComponent],
    bootstrap: [AppComponent],
    imports: [FormsModule, BrowserModule]
})
export class AppModule {

}


