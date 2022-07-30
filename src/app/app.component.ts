import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employee-app';
  depScreen = true;
  empScreen = false;
  
  constructor(){}

  ngOnInit(): void {
    
    
  }
  
}
