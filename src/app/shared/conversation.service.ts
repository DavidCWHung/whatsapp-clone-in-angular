import { Injectable } from "@angular/core";
import { Conversation } from "./conversation.model";
import { Message } from "./message.model";

@Injectable({providedIn: 'root'})
export class ConversationService {
    private conversations: Conversation[] = [
        new Conversation(
            'Ben',
            [
                new Message('Hello', '8:42 a.m.', false, true),
                new Message('How are you?', '8:43 a.m.', false, true),
                new Message('I am good, thanks', '8:50 a.m.', true, false),
                new Message('See you later then!', '9:00 a.m.', false, true)
            ],
            'user.svg'
        ),
        new Conversation(
            'Kaden',
            [
                new Message('Hey', 'yesterday', false, true),
                new Message('Hang out tonight?', 'yesterday', false, true),
                new Message('Sure!', 'yesterday', true, true)
            ],
            'user.svg'
        )
    ];

    getConversations () {
        return this.conversations;
    }
}
