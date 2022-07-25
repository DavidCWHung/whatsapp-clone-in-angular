import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Conversation } from '../shared/conversation.model';
import { ConversationService } from '../shared/conversation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  conversations: Conversation[] = [];
  @Output() conversationSelected = new EventEmitter<Conversation>();

  constructor(private conversationService: ConversationService) { }

  ngOnInit(): void {
    this.conversations = this.conversationService.getConversations();
  }

  onClick(conversation: Conversation) {
    this.conversationSelected.emit(conversation);
  }
}
