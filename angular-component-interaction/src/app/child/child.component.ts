import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { GrandChildComponent } from './../grand-child/grand-child.component';
@Component({
  selector: 'ai-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('fname') fnameRef!: ElementRef;
  @ViewChild('headding') headRef!: ElementRef;
  // @ViewChild(GrandChildComponent) grandChildRef!: ElementRef;
  @ViewChildren(GrandChildComponent) grandChildRefs!: QueryList<ElementRef>;
  private _loggedIn!: boolean;
  @Input() login!: boolean;
  message!: string;
  name = 'tharsikan';
  printName(): void{
    alert('hello ' + this.name);
  }
  ngOnChanges(changes: SimpleChanges): void{
    const key = 'login';
    if (changes[key]){
      this.login = changes[key].currentValue;
      if (this.login){
        this.message = 'Welcome';
      }else{
        this.message = 'please login';
      }
    }
  }
  get loggedIn(): boolean {
    return this._loggedIn;
  }
  @Input()
  set loggedIn(loggedIn: boolean) {
    this._loggedIn = loggedIn;
    if (loggedIn === true) {
      this.message = 'welcome';
    } else {
      this.message = 'please login';
    }
  }
  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.fnameRef.nativeElement.focus();
    console.log(this.headRef.nativeElement); // actual dom ele
    console.log(this.grandChildRefs.toArray());
  }
}
