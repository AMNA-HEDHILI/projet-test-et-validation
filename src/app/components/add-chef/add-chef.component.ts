import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  user:any={};
  addChefForm : FormGroup;
  constructor(private formBuilder : FormBuilder, private userService : UserService) { }

  ngOnInit() {
    this.addChefForm = this.formBuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      password : [''],
      tel : [''],
      speciality : [''],
      experience : [''],
      dateOfBirth : ['']
    })
  }

  addChef(){
    this.user.role = "chef"
    this.userService.createUser(this.user).subscribe(
      (data)=>{
        console.log(data.message);
        
      }
    )
  }

}
