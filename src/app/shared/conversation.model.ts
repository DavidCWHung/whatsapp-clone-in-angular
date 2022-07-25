import { Message } from "./message.model"

export class Conversation {
    constructor(public contactName: string, 
                public messages: Message[], 
                public picture: string) {}
}