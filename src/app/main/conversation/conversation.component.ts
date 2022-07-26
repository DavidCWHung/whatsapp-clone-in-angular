import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Conversation } from 'src/app/shared/conversation.model';
import { ConversationService } from 'src/app/shared/conversation.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Message } from 'src/app/shared/message.model';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit, OnChanges {
  @Input('conversationSelected') conversation: Conversation;
  messageInput;
  @ViewChild('main') mainRef: ElementRef;
  
  constructor(private conversationService: ConversationService,
              private dataStorageService: DataStorageService) {}
  
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    // Adjust the scroll to bottom once Angular detects selection change of conversation at sidebar (i.e., the conversation property)
    setTimeout(() => {
      this.mainRef.nativeElement.scrollTop = this.mainRef.nativeElement.scrollHeight;
    }, 0);
  }

  onSend() {
    const newMessage = new Message(this.messageInput, 'now', true, false);

    this.conversationService.addMessage(
      this.conversation,
      newMessage
    );

    // Adjust the scroll to bottom once user enters message
    setTimeout(() => {
      this.mainRef.nativeElement.scrollTop = this.mainRef.nativeElement.scrollHeight;
    }, 0);

    this.messageInput = '';
    this.dataStorageService.storeConversations();
  }
}