import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ai-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  name!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
