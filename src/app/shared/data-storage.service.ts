import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Conversation } from "./conversation.model";
import { ConversationService } from "./conversation.service";
import { Message } from "./message.model";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient,
                private conversationService: ConversationService) {}

    storeConversations() {
        const conversations = this.conversationService.getConversations();

        this.http.put('https://ng-whatsapp-clone-6b6e1-default-rtdb.firebaseio.com/conversations.json', conversations).subscribe();
    }

    fetchConversations() {
        this.http.get<Conversation[]>('https://ng-whatsapp-clone-6b6e1-default-rtdb.firebaseio.com/conversations.json').subscribe(conversations => {
            this.conversationService.setConversations(conversations);
        });
    }
}