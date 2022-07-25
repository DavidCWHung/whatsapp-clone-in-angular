import { Component, Input, OnInit } from '@angular/core';
import { Conversation } from 'src/app/shared/conversation.model';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  @Input('conversationSelected') conversation: Conversation;

  ngOnInit(): void {}

}