import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  admins:any;
  chefs:any;
  clients:any;
  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
    // import admins
   this.getAdmins();
    // import chefs
    this.getChefs();
    // import clients
   this.getClients();
  }

  getClients(){
    this.userService.getUsersByRole("client").subscribe(
      (data)=>{
        console.log(data.users);

        this.clients = data.users
      }
    )
  }
  getChefs(){
    this.userService.getUsersByRole("chef").subscribe(
      (data)=>{

        console.log(data.users);

        this.chefs = data.users
      }
    )
  }

  getAdmins(){
    this.userService.getUsersByRole("admin").subscribe(
      (data)=>{
        console.log(data.users);
        
        this.admins = data.users
      }
    )
  }
  getColor(speciality){
    switch (speciality) {
      case 'TN':
        return 'red'
        break;

        case 'FR':
          return 'blue'
          break;
          case 'IT':
            return 'green'
            break;
    
     
    }
  }

  deleteAdmin(id){
    this.userService.deleteUser(id).subscribe(
      (data)=>{
        console.log(data.message);
        // import admins
        this.getAdmins();
      }
    )
  }

  deleteChef(id){
    this.userService.deleteUser(id).subscribe(
      (data)=>{
        console.log(data.message);
        // import chefs
        this.getChefs();
      }
    )
  }

  deleteClient(id){
    this.userService.deleteUser(id).subscribe(
      (data)=>{
        console.log(data.message);
        // import clients
        this.getClients();
      }
    )
  }

  displayUser(id){
    this.router.navigate([`displayUser/${id}`])
  }

  editUser(id){
    this.router.navigate([`editUser/${id}`])
  }
}
