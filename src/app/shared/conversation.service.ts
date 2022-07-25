import { Injectable } from "@angular/core";
import { Conversation } from "./conversation.model";
import { Message } from "./message.model";

@Injectable({providedIn: 'root'})
export class ConversationService {
    private conversations: Conversation[] = [
        new Conversation(
            'Ben',
            [
                new Message('Hello', 'Ben', '8:42 a.m.', true),
                new Message('How are you?', 'Ben', '8:43 a.m.', false)
            ],
            'user.svg'
        ),
        new Conversation(
            'Kaden',
            [
                new Message('Hey', 'Kaden', 'yesterday', true),
                new Message('Hang out tonight?', 'Kaden', 'yesterday', true)
            ],
            'user.svg'
        )
    ];

    getConversations () {
        return this.conversations;
    }
}
