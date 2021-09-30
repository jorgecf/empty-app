import { Message } from "./message";

export class Conversation {
    public id: number;
    public name: string;
    public messages: Message[] = [];
}