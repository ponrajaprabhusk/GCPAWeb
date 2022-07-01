import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterServiceService } from 'src/app/services/register-service/register-service.service';

@Component({
  selector: 'app-registration-detail',
  templateUrl: './registration-detail.component.html',
  styleUrls: ['./registration-detail.component.css']
})
export class RegistrationDetailComponent implements OnInit {
  uid:string;
  constructor(private route: ActivatedRoute,public registerService:RegisterServiceService) { }

  ngOnInit(): void {
    this.uid = this.route.snapshot.params[ 'uid' ]
    this.registerService.getRegistrationById(this.uid)
  }

}
