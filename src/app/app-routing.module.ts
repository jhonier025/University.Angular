import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentCreateComponent } from './component/department-create/department-create.component';
import { StudentCreateComponent } from './component/student-create/student-create.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentListComponent } from './component/student-list/student-list.component';

const routes: Routes = [

  /// Student
  {path:'student-list', component: StudentListComponent},
  {path:'student-create', component: StudentCreateComponent},
  {path:'student-edit/:id', component: StudentEditComponent},
  {path:'student-delete/:id', component: StudentDeleteComponent},
   
  /// Departament

  {path:'department-create', component: DepartmentCreateComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
