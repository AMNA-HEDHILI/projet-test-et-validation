import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  // Déclaration des variables gloables
  title : String;
  source : any;
  constructor() { }

  ngOnInit() {
    this.title = "Hello";

    this.title = "Hello croco";

    // Déclaration d'une variable locale
    let title:any;
    this.source = "assets/img/logo.png";
  }

  // Déclaration des fonctions
  clickMe(){
    alert("Test")
  }

}
