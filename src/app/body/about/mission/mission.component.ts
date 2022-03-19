import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  content={
    mission:'To emphasize the natural ability of children who create rarity and showcase their uniqueness around the globe. Every child is special and unique in their own way. Each child holds an exceptional innate talent and can do wonders when given the proper guidance. Parental encouragement, school’s support, programs on talent development, and events on talent recognition can help in nurturing a child’s talent further.'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
