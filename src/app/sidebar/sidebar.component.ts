import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  chats = [
    {
      name: 'David',
      time: '8:42 a.m.',
      lastMessage: 'Hello World!',
      picture: 'user.svg',
      isMessageRead: true
    },
    {
      name: 'Ada',
      time: '9:22 a.m.',
      lastMessage: 'Good morning!',
      picture: 'user.svg',
      isMessageRead: false
    },
    {
      name: 'Tom',
      time: '12:42 p.m.',
      lastMessage: 'How are you doing?',
      picture: 'user.svg',
      isMessageRead: false
    },
    {
      name: 'Jason',
      time: 'yesterday',
      lastMessage: 'sure',
      picture: 'user.svg',
      isMessageRead: false
    },
    {
      name: 'Jimmy',
      time: 'yesterday',
      lastMessage: 'Thank you!!',
      picture: 'user.svg',
      isMessageRead: true
    },
    {
      name: 'Jane',
      time: 'yesterday',
      lastMessage: 'Good luck!',
      picture: 'user.svg',
      isMessageRead: true
    },
    {
      name: 'David',
      time: '8:42 a.m.',
      lastMessage: 'Hello World!',
      picture: 'user.svg',
      isMessageRead: true
    },
    {
      name: 'Ada',
      time: '9:22 a.m.',
      lastMessage: 'Good morning!',
      picture: 'user.svg',
      isMessageRead: true
    },
    {
      name: 'Tom',
      time: '12:42 p.m.',
      lastMessage: 'How are you doing?',
      picture: 'user.svg',
      isMessageRead: true
    },
    {
      name: 'Jason',
      time: 'yesterday',
      lastMessage: 'sure',
      picture: 'user.svg',
      isMessageRead: true
    },
    {
      name: 'Jimmy',
      time: 'yesterday',
      lastMessage: 'Thank you!!',
      picture: 'user.svg',
      isMessageRead: true
    },
    {
      name: 'Jane',
      time: 'yesterday',
      lastMessage: 'Good luck!',
      picture: 'user.svg',
      isMessageRead: true
    },
    {
      name: 'David',
      time: '8:42 a.m.',
      lastMessage: 'Hello World!',
      picture: 'user.svg',
      isMessageRead: true
    },
    {
      name: 'Ada',
      time: '9:22 a.m.',
      lastMessage: 'Good morning!',
      picture: 'user.svg',
      isMessageRead: false
    },
    {
      name: 'Tom',
      time: '12:42 p.m.',
      lastMessage: 'How are you doing?',
      picture: 'user.svg',
      isMessageRead: true
    },
    {
      name: 'Jason',
      time: 'yesterday',
      lastMessage: 'sure',
      picture: 'user.svg',
      isMessageRead: true
    },
    {
      name: 'Jimmy',
      time: 'yesterday',
      lastMessage: 'Thank you!!',
      picture: 'user.svg',
      isMessageRead: true
    },
    {
      name: 'Jane',
      time: 'yesterday',
      lastMessage: 'Good luck!',
      picture: 'user.svg',
      isMessageRead: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
