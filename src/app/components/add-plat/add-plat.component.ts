import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  plat : any = {};
  addPlatForm : FormGroup;
  connectedChef : any ;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.addPlatForm = this.formBuilder.group({
      platName : [''],
      price : [''],
      description : ['']
    })
  }

  addPlat(){
    this.connectedChef = JSON.parse(localStorage.getItem("connectedUser"))
    // ajout d'un attribut idChef dans l'objet plat (id du chef connecté)
    this.plat.idChef = this.connectedChef._id
    console.log(this.plat);

    // Ajout dans la BD 

  }
}
