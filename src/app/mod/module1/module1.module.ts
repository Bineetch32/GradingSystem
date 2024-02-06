import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { CustomPipe } from './custom.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentComponent,
    CustomPipe
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[StudentComponent]
})
export class Module1Module { }
