import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ai-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userLoggedIn!: boolean;
  fname = '';
  title = 'Bindings';
  imgUrl = 'https://picsum.photos/100';
  count = 0;
  private _lname!: string;    // hey compiler i know it wont be null
  set lname(value: string){
    this._lname = value;
  }
  get lname(): string{
    return this._lname;
  }
  clicked(): void {
    this.count++;
  }
  setFname(char: string): void {
    console.log(char);
    this.fname = this.fname + char;
  }
  setFname2(char: string): void {
    this.fname = this.fname + char;
  }
}
