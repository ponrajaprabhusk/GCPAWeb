import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country=''
  @Output() newItemEvent = new EventEmitter<string>();

  sendData() {
    this.newItemEvent.emit(this.country);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
