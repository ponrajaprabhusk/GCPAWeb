import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-is',
  templateUrl: './what-is.component.html',
  styleUrls: ['./what-is.component.css']
})
export class WhatIsComponent implements OnInit {
   content=[
     {
       icon:"fa fa-bullhorn",
       heading:'To enhance the 3% success rate',
       para:'It is observed that only 3% (6 out of 210) Child Prodigies can take their talent to the next level and become Successful in their domain. Global Child Prodigy Aims to Recognize each Talent, Support them, and provide them with Global Exposure to excel in their respective field.'
     },
     {
       icon:'fa fa-registered',
       heading:'To extend change making platforms for Kids',
       para:'To elevate the level of the young natural talents and guide them into a successful future through hard work and keen interest. GCP Awards provides them with platforms so that it helps them to be change-makers and influencers.'
     },
     {
       icon:'fa fa-bolt',
       heading:'To feature prodigies in the  “100 GLOBAL CHILD PRODIGIES AWARD ” Book',
       para:'To promulgate the “100 GLOBAL CHILD PRODIGIES AWARD 2020” book featuring its awardees to the world. This book will be distributed to all the Top Libraries of the world. This book will inspire millions of Readers.'
     },
     {
       icon:'fa fa-street-view',
       heading:'To deliver the right opportunity to prodigies',
       para:'To create a unique mission and to imprint a strong impression of the prodigies rarity in society. To Provide right opportunities to prodigies in time to make sure they create an impact.'
     }
   ]
   
  constructor() { }

  ngOnInit(): void {
  }

}
