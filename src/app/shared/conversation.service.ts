import { Injectable } from "@angular/core";
import { Conversation } from "./conversation.model";
import { Message } from "./message.model";

@Injectable({providedIn: 'root'})
export class ConversationService {
    private conversations: Conversation[] = [
        new Conversation(
            'Ada',
            [
                new Message('Hello', 'Ada', '8:42 a.m.', true),
                new Message('How are you?', 'Ada', '8:43 a.m.', false)
            ],
            'user.svg'
        ),
        new Conversation(
            'Billy',
            [
                new Message('Hey', 'Billy', 'yesterday', true),
                new Message('Hang out tonight?', 'Billy', 'yesterday', true)
            ],
            'user.svg'
        )
    ];

    getConversations () {
        return this.conversations;
    }
}
