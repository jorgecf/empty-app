import { Conversation } from "./conversation";
import { User } from "./user";

export class State {
    public currentUser: User;
    public conversation: Conversation[] = [];
    public addresBook: User[] = [];
}