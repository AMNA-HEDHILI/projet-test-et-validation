import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
  chefs:any;
  constructor(private userService : UserService) { }

  ngOnInit() {

    this.userService.getUsersByRole('chef').subscribe(
      (data)=>{
        this.chefs = data.users;
      }
    )
  }

  update(e){
    this.chefs = e;
  }

}
