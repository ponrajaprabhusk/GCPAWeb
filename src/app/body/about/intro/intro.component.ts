import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  content={
    video:'https://youtu.be/EmWtKzUzWZQ',
    para:'GCP Awards is the world’s first and only child prodigy initiative that recognizes Top 100 Child Prodigies around the globe each year from various verticals. A platform for all kids up to age 15 to showcase their talent and uniqueness to the global audience and get recognized as Top 100 child prodigies, and they also get featured in Global Child Prodigy Annual Book every year. GCP Awards aims to acknowledge prodigies from various categories such as arts, music, dance, writing, modeling, acting, science, and sports, etc.provide them global exposure to excel in their respective domains.'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
