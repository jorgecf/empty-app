import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public newMessage: string;
  @Output() public newMessageEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public sendMessage(): void {
    this.newMessageEvent.emit(this.newMessage);

    this.newMessage = "";
  }
}
