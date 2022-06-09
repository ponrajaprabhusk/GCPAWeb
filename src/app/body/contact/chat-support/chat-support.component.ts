import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-support',
  templateUrl: './chat-support.component.html',
  styleUrls: ['./chat-support.component.css']
})
export class ChatSupportComponent implements OnInit {


  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  

  loadSupportPage(){
    this.router.navigate(['/supportPage'])
  }


}
