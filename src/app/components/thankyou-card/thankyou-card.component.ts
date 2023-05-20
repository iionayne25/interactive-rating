import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-thankyou-card',
  templateUrl: './thankyou-card.component.html',
  styleUrls: ['./thankyou-card.component.css']
})
export class ThankyouCardComponent {
@Input() recieveData : any;

}
