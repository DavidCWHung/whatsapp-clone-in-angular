import { Component } from '@angular/core';
import { Conversation } from './shared/conversation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'whatsapp-clone';
  
  conversation: Conversation = null;

  onConversationSelected(conversation: Conversation) {
    this.conversation = new Conversation(
      conversation.contactName,
      conversation.messages,
      conversation.picture
    );
  }
}
