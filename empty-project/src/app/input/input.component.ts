import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public newGlover: string;
  @Output() public newGloverEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public addGlover(): void {
    this.newGloverEvent.emit(this.newGlover);
    this.newGlover = "";
  }

}
