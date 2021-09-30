import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Glover } from '../models/glover';

@Component({
  selector: 'app-glovers-table',
  templateUrl: './glovers-table.component.html',
  styleUrls: ['./glovers-table.component.scss']
})
export class GloversTableComponent implements OnInit {

  @Input() public gloversList: Glover[] = [];
  @Output() public gloverRemoved: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public removeGlover(gloverId: number): void {
    this.gloverRemoved.emit(gloverId);
  }

}
