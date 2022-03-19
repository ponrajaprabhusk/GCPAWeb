import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionComponent implements OnInit {

  content={
    vision:'Aims to give young talents the global exposure that they deserve and provide them with the right opportunities at the right time to ensure that they create a significant impact on society. Also, to support and encourage prodigies so that they nevermore get halted because of any hindrance in their journey.'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
