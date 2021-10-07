import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/domain/student';
import { StudentService } from 'src/app/service/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

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
  public  delete(){  
     this.studentServices.delete(this.student.ID).subscribe(data =>{
      this.router.navigate(['student-list']);

  
      }, error =>{
        this.showMsg = true;
        this.msg = error;
        this.type = 'danger';
  
      })
    }
   

}
