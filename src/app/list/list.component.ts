import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service' //Import the service we made

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Object; //this will hold all the results from the API

  constructor(private _http: HttpService) { }



  ngOnInit() // this runs when the componant is loaded.
   {
     //Calling Method from the service file
     this._http.getBeer().subscribe(data => { //This will return an obervable which we can subscribe to. It will then take the data and store it an brews.
        this.brews = data;
        console.log(this.brews)

     });
  }

}
