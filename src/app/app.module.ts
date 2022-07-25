import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PlaceholderComponent } from './main/placeholder/placeholder.component';
import { ConversationComponent } from './main/conversation/conversation.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PlaceholderComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
