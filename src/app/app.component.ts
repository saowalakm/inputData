import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';
  score = 100;
  show = true;
  firstName = '';
  lastName = '';
  name = '';
  colors = ['Red', 'Green', 'Blue'];

  InputYourName(event: any): void{
    this.firstName = event.target.value;
  }
  
  inputLastname(input: string): void{
    this.lastName = input;
  }

  saveData(): void{
    this.name = this.firstName + ' ' + this.lastName;
    // this.name = `$(this.firstName) $(this.lastName)`;
  }
}
