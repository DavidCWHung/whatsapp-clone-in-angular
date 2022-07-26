import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Conversation } from '../shared/conversation.model';
import { ConversationService } from '../shared/conversation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  conversations: Conversation[];
  @Output() conversationSelected = new EventEmitter<Conversation>();

  conversationChangedSub: Subscription;

  constructor(private conversationService: ConversationService) { }

  ngOnInit(): void {
    this.conversationChangedSub = this.conversationService.conversationChanged.subscribe(
      (conversations : Conversation[]) => {
        this.conversations = conversations;
      }
    );
  }

  onClick(conversation: Conversation) {
    this.conversationSelected.emit(conversation);
  }

  ngOnDestroy(): void {
    this.conversationChangedSub.unsubscribe();
  }
}
