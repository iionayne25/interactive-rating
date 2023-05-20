import { Component } from '@angular/core';

@Component({
  selector: 'app-rate-component',
  templateUrl: './rateSurveyCard.component.html',
  styleUrls: ['./rateSurveyCard.component.css']
})
export class RateComponentComponent {
  selectedValue: number = 0;
  submitted: boolean = false;
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']

 onClick(value: number){
  this.selectedValue =value;
 }

 onSubmit(){
  this.submitted = true;
 }
}
