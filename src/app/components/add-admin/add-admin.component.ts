import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  user :any = {};
  addAdminForm : FormGroup;
  id:any;
  title:any;
  constructor(private formBuilder : FormBuilder,private router: Router, private activatedRoute : ActivatedRoute, private userService : UserService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.title = "Edit User"
      this.userService.getUserById(this.id).subscribe(
        (data)=>{
          this.user = data.user
        }
      )
    } else {
      this.title = "Add Admin"
    }

    this.addAdminForm = this.formBuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      password : [''],
      tel : [''],
    })
  }
  addAdmin(){
    if (this.id) {
      // edit
      this.userService.updateUser(this.user).subscribe(
        (data)=>{
          console.log(data.message);
          this.router.navigate(['dashboardAdmin'])
        }
      )
    } else {
      // add
      console.log(this.user);
    this.user.role ="admin"
    this.userService.createUser(this.user).subscribe(
      (data)=>{
        console.log(data.message);
        
      }
    )
    }
    
    
  }

}
