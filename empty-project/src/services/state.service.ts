import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { State } from 'src/models/state';
import { User } from 'src/models/user';

@Injectable({ providedIn: 'root' })
export class StateService {

  private subject: BehaviorSubject<State>;
  public currentState: Observable<State>;

  constructor() {
    const state = this.generateFakeData();

    this.subject = new BehaviorSubject<State>(state);
    this.currentState = this.subject.asObservable();
  }

  set nextState(state: State) {
    this.subject.next(state);
  }

  ///

  private generateFakeData(): State {
    const user1: User = { id: 1, name: "John Doe", email: "a@a.a" };
    const user2: User = { id: 2, name: "Jane Doe", email: "b@b.b" };

    const state = new State();
    state.currentUser = user1;

    state.conversation.push({
      id: 123,
      messages: [
        { id: 1, content: "Hello", user: user1 },
        { id: 2, content: "How are you?", user: user2 }
      ],
      name: "Private chat"
    });

    return state;
  }
}
