import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from '../confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  test:Boolean=true;
  constructor(private formBuilder : FormBuilder, private userSerivce : UserService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName : ['',[Validators.minLength(3),Validators.required]],
      lastName : ['',[Validators.minLength(5),Validators.required]],
      email : ['',[Validators.email,Validators.required]],
      password : ['',[Validators.minLength(8),Validators.required]],
      confirmPassword : [''],
      tel : ['',[Validators.minLength(8),Validators.maxLength(13),Validators.required]]
    },
    {
      validator : MustMatch('password','confirmPassword')
    }
    )
  }

  signup(f:any){
    console.log(f);
    f.role = "client"
    this.userSerivce.createUser(f).subscribe(
      (data)=>{
        console.log(data.message);
        
      }
    )
    
  }


}
