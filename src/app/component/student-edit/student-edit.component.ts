import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/domain/student';
import { StudentService } from 'src/app/service/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  
    public id: number = 0;
    public student: Student = new Student(0, '', '', new Date(), '');
    //public student!: Student;
  
    public showMsg: boolean = false;
    public msg: string = '';
    public type: string = '';

    constructor(public studentServices: StudentService,
      public router: Router,
      public activateRoute: ActivatedRoute){ }

  
    ngOnInit(): void {
      this.getByid();
    }
    getByid(){
      let param = this.activateRoute.snapshot.paramMap.get('id');
      this.id = Number(param);
      this.studentServices.getById(this.id).subscribe(data => {
        this.student= data;
      })
    }
    public  Edit(){
      if (this.student.LastName === ''){
        this.showMsg = true;
        this.msg = 'The field last name is requeride';
        this.type = 'warning';
        return;
  
      }
      this.studentServices.edit(this.student).subscribe(data =>{
        this.router.navigate(['student-list']);
    
        }, error =>{
          this.showMsg = true;
          this.msg = error;
          this.type = 'danger';
    
        })
      }
     
    }
  
  
