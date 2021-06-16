import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ai-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input name!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
