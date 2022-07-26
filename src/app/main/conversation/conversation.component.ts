import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Conversation } from 'src/app/shared/conversation.model';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  @Input('conversationSelected') conversation: Conversation;
  messageInput;
  
  
  ngOnInit(): void { }



}