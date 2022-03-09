import { Component, OnInit } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

    
  constructor() { }

  ngOnInit(): void {
  }

}