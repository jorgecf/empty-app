import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { State } from 'src/models/state';
import { StateService } from 'src/services/state.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  public state: State;

  constructor(
    public stateService: StateService
  ) { }

  public get conversationIndex(): number {
    return this.state.conversation.findIndex(c => c.id == 123);
  };

  ngOnInit(): void {
    this.stateService.currentState.subscribe(s => {
      this.state = s;
      console.log("Received subscription: " + s.conversation[this.conversationIndex].messages.length)
    });
  }

  newMessageCallback(event: string): void {
    this.state.conversation[this.conversationIndex].messages.push({
      id: new Date().getTime(),
      content: event,
      user: this.state.currentUser
    });

    this.stateService.nextState = this.state;
  }

}
