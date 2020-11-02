import { Component } from '@angular/core';
import { DestinationServiceService } from './destination-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserDestination';
  to;
  from;
  date;
  constructor(public dstService:DestinationServiceService)
  {
   
  }

  submitUserDestination()
  {
    var userDst = {to:this.to, from: this.from, date:this.date}
    this.dstService.putUserDestination(userDst);
  }
}
