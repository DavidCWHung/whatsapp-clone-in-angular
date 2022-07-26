import { Component, OnInit } from '@angular/core';
import { Conversation } from './shared/conversation.model';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'whatsapp-clone';
  
  conversation: Conversation = null;

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    // this.dataStorageService.storeConversations();
    this.dataStorageService.fetchConversations();
  }

  onConversationSelected(conversation: Conversation) {
    this.conversation = new Conversation(
      conversation.contactName,
      conversation.messages,
      conversation.picture
    );
  }
}
