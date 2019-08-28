import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

//We are now creating the component that we made in home.comonent.html via {{clickCounter}}

clickCounter: number = 0; //This sets a number counter to 0
name: string = ''; //This will set the Sting to Empty


  constructor() { }

  ngOnInit() {
  }

  countClick() //This is what we made when we did (Click) Count means counter. 
  {
    this.clickCounter += 1; //This meant that it will add 1 to the clickCounter that we made above everytime we call it.
  }


  //From HomeComponant.html
  setClasses() {
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4,
    }
    return myClasses;
  }
}
